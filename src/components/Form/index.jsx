import React, { useEffect, useCallback, useState } from "react";
import axios from "axios";
import debounce from "lodash.debounce";
import InputMask from "react-input-mask";
import schema from "../../utlis/validationSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { cartShow } from "../../redux/cart/reducer";
import { submitShow } from "../../redux/onSubmit/reducer";
import "./style.scss";
const API_KEY_CART = process.env.REACT_APP_API_KEY_CART;

function Form() {
  const { cartProduct } = useSelector((state) => state.cart);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Дебаунс функции для проверки полей
  const debouncedValidateField = useCallback(
    debounce((field) => {
      trigger(field);
    }, 500),
    []
  );

  useEffect(() => {
    register("name");
    register("phone");
  }, [register]);

  const handleFieldChange = (setter, field, value) => {
    setter(value);
    setValue(field, value);
    debouncedValidateField(field);
  };

  const handleNameChange = (e) => handleFieldChange(setName, "name", e.target.value);
  const handlePhoneChange = (e) => handleFieldChange(setPhone, "phone", e.target.value);

  const onSubmit = async (data) => {
    console.log(data);

    // Очистка полей ввода
    setName("");
    setPhone("");
    reset();

    try {
      const deletePromises = cartProduct.map((product) =>
        axios.delete(`https://${API_KEY_CART}.mockapi.io/cart/${product.id}`)
      );
      await Promise.all(deletePromises);
      dispatch(cartShow([]));
    } catch (error) {
      console.error("Ошибка при удалении товаров из корзины:", error);
    }
    dispatch(submitShow(true));
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="form__fieldset">
          <legend className="form__head">Оформить заказ</legend>
          <label className="form__label">
            <input
              className="form__input"
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={handleNameChange}
            />
            {errors.name && (
              <span className="form__error">{errors.name.message}</span>
            )}
          </label>
          <label className="form__label">
            <InputMask
              mask="+7 (999) 999-9999"
              maskChar=" "
              className="form__input"
              placeholder="Ваш телефон"
              value={phone}
              onChange={handlePhoneChange}
            >
              {(inputProps) => <input {...inputProps} />}
            </InputMask>
            {errors.phone && (
              <span className="form__error">{errors.phone.message}</span>
            )}
          </label>
        </fieldset>
        <button className="form__btn" type="submit">
          Оформить заказ
        </button>
      </form>
    </div>
  );
}

export { Form };
