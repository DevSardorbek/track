import React from "react";
import "../../sass/_delivery.scss";
import delImg1 from "../../img/deliveryImg1.png";
import delImg2 from "../../img/deliveryImg2.png";
import delImg3 from "../../img/deliveryImg3.png";

const data = [
  {
    id: 1,
    img: delImg1,
    title: "Предложение от продавца",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. ",
  },
  {
    id: 2,
    img: delImg2,
    title: "Доставка",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. ",
  },
  {
    id: 3,
    img: delImg3,
    title: "Установка у клиента",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. ",
  },
];

const Delivery = () => {
  let cards = data?.map((el, id) => (
    <div className="delivery__card" key={id}>
      <div className="delivery__card-img">
        <img src={el.img} alt="" />
      </div>
      <div className="delivery__card-info">
        <h3>{el.title}</h3>
        <span></span>
        <p>{el.desc}</p>
      </div>
    </div>
  ));
  return (
    <div className="delivery__section">
      <div className="container">
        <div className="delivery__title">
          <h1>Этапы поставки </h1>
        </div>
        <div className="delivery__cards">{cards}</div>
      </div>
    </div>
  );
};

export default Delivery;
