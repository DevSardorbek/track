import React from "react";
import "../../sass/_footer.scss";
import f_insta from "../../img/f_insta.png";
import f_facebook from "../../img/f_facebook.png";
import right from "../../img/right.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__section">
          <div className="footer__logo">
            <h1>LOGO</h1>
          </div>
          <div className="footer__catalog">
            <p>Каталог</p>
            <p>о компании</p>
            <p>Индивидуальная </p>
            <p>Партнерам</p>
          </div>
          <div className="footer__model">
            <p>2D, 3D модели</p>
            <p>Шоу-румы</p>
            <p>Дилерам</p>
            <p>Конфигуратор</p>
          </div>
          <div className="footer__contact">
            <div className="footer__media">
              <img src={f_insta} alt="" />
              <img src={f_facebook} alt="" />
            </div>
            <h3>+38 (099)-638-45-37</h3>
            <button>
              <p>Персональная консультация</p>
              <img src={right} alt="" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
