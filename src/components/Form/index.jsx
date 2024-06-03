import React, { useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import debounce from "lodash.debounce";
import InputMask from "react-input-mask";
import schema from "../../utlis/validationSchema";

import "./style.scss";

function Form() {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Дебаунс функция для проверки поля name
  const debouncedValidateName = useCallback(
    debounce(() => {
      trigger("name");
    }, 500),
    []
  );

  // Дебаунс функция для проверки поля phone
  const debouncedValidatePhone = useCallback(
    debounce(() => {
      trigger("phone");
    }, 500),
    []
  );

  // Эффекты для установки значения полей и вызова дебаунс валидации
  useEffect(() => {
    register("name");
    register("phone");
  }, [register]);

  const handleNameChange = (e) => {
    setValue("name", e.target.value);
    debouncedValidateName();
  };

  const handlePhoneChange = (e) => {
    setValue("phone", e.target.value);
    debouncedValidatePhone();
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="form__fieldset">
        <legend className="form__head">Оформить заказ</legend>
        <label className="form__label">
          <input
            className="form__input"
            type="text"
            placeholder="Ваше имя"
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
  );
}

export { Form };
