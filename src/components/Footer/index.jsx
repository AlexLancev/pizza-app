import React from "react";
import { Link } from "react-router-dom";

import { category } from "../Category";

import "./style.scss";


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <ul className="footer-category">
            {category.map((cat, index) => {
              return (
                <li className="footer-category__item" key={index}>
                  <Link to={`/${cat[1]}`} className="footer-category__link">
                    {cat[0]}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="company-information">
            <b className="company-information__heading">РЕЖИМ РАБОТЫ</b>
            <ul className="company-information__list">
              <li className="company-information__item">
                <span className="company-information__link">
                  ВС — ЧТ С 10:00 ДО 23:45
                </span>
              </li>
              <li className="company-information__item">
                <span className="company-information__link">
                  ПТ — СБ С 10:00 ДО 01:00
                </span>
              </li>
            </ul>
            <b className="company-information__heading">ОБРАТНАЯ СВЯЗЬ</b>
            <ul className="company-information__list">
              <li className="company-information__item">
                <a
                  href="https://vk.com/pizzapp_izh"
                  className="company-information__link"
                >
                  HTTPS://VK.COM/PIZZAPP_IZH
                </a>
              </li>
              <li className="company-information__item">
                <a
                  href="tel:+73412918718"
                  className="company-information__link"
                >
                  +7 3412 918718
                </a>
              </li>
              <li className="company-information__item">
                <a href="/" className="company-information__link">
                  О ДОСТАВКЕ, ОПЛАТЕ И ВАШИХ ДАННЫХ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
