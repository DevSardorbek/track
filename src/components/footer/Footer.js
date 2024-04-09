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
            <a href="#">Каталог</a>
            <a href="#">о компании</a>
            <a href="#">Индивидуальная </a>
            <a href="#">Партнерам</a>
          </div>
          <div className="footer__model">
            <a href="#">2D, 3D модели</a>
            <a href="#">Шоу-румы</a>
            <a href="#">Дилерам</a>
            <a href="#">Конфигуратор</a>
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
