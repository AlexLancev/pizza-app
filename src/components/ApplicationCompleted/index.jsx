import React, { useCallback } from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { submitShow } from "../../redux/onSubmit/reducer";
import { bodyScroll } from "../../utlis/body-scroll";

import "./style.scss";

function ApplicationCompleted() {
  const dispatch = useDispatch();
  const { unLock } = bodyScroll;

  const closePopup = useCallback((event) => {
    const applicationBox = event.target.closest('.application__box');
    const applicationClose = event.target.closest('.application__close');

    if (applicationClose || !applicationBox) {
      dispatch(submitShow(false));
      unLock();
    }
  }, [dispatch, unLock]);

  return (
    <div className="application" onClick={closePopup}>
      <div className="application__box">
        <button
          className="application__close"
          type="button"
          title="Закрыть уведомление"
        >
          <IoIosClose className="application__close-icon" size={40} />
        </button>
        <IoCheckmarkCircleSharp size={200} className="application__img" />
        <b className="application__heading">Заказ оформлен</b>
        <p className="application__description">
          Мы свяжемся с вами в течении 5 минут, для уточнения заказа. Спасибо!
        </p>
      </div>
    </div>
  );
}

export { ApplicationCompleted };
