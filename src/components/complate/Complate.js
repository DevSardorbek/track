import React from "react";
import "../../sass/_complate.scss";
import complateImg1 from "../../img/complateimg1.png";
import complateImg2 from "../../img/complateimg2.png";
import complateImg3 from "../../img/complateimg3.png";

const data = [
  {
    id: 1,
    img: complateImg1,
    title: "Станки и оборудование",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
    price: "20 000 руб.",
  },
  {
    id: 2,
    img: complateImg2,
    title: "Компоненты и запчасти",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
    price: "18 000 руб.",
  },
  {
    id: 3,
    img: complateImg3,
    title: "Станки и оборудование",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
    price: "20 000 руб.",
  },
];

const Complate = () => {
  let cards = data?.map((el, id) => (
    <div key={id}>
      <div className="complate__card">
        <div className="complate__card-img">
          <img src={el.img} alt="" />
        </div>
        <div className="complate__card-info">
          <h3>{el.title}</h3>
          <p>{el.desc}</p>
          <a href="#">{el.price}</a>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="complate__sections">
      <div className="container">
        <div className="complate__title">
          <h1>Выполненные работы</h1>
          <p>
            Мы собрали информацию по грузам, которые мы уже доставили.У нас
            специальный подход к каждому виду товаров.
          </p>
        </div>
        <div className="complate__cards">{cards}</div>
      </div>
    </div>
  );
};

export default Complate;
