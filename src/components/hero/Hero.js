import React from "react";
import "../../sass/_hero.scss";
import heroImg from "../../img/heroimg.png";
import icon1 from "../../img/heroicon1.png";
import icon2 from "../../img/heroicon2.png";
import icon3 from "../../img/heroicon3.png";

const data = [
  {
    id: 1,
    img: icon1,
    title: " Поиск производителей по товару ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.",
  },
  {
    id: 2,
    img: icon2,
    title: " Поиск производителей по товару ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.",
  },
  {
    id: 3,
    img: icon3,
    title: " Поиск производителей по товару ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.",
  },
];
const Hero = () => {
  let cards = data?.map((el, id) => (
    <div key={id} className="hero__card">
      <img src={el.img} alt="" />
      <h3>{el.title}</h3>
      <p>{el.desc}</p>
    </div>
  ));
  return (
    <>
      <div className="hero__sections">
        <div className="container">
          <div className="hero__section">
            <div className="hero__section-info">
              <h1>Поставщик Дальнего Востока</h1>
              <p>
                Наши клиенты получают полный спектр услуг по работе с Китаем.
                Начиная с подбора производителя заканчивая доставкой товара до
                двери. Настолько прозрачных сделок с Китаем вы еще не
                осуществляли.
              </p>
              <a href="#">Узнать больше</a>
            </div>
            <div className="hero__section-img">
              <img src={heroImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="hero__cards">
        <div className="container">
          <div className="hero__cards__wrapper">{cards}</div>
        </div>
      </div>
    </>
  );
};

export default Hero;
