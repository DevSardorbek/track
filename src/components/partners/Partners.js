import React from "react";
import "../../sass/_partners.scss";
import partnerImg1 from "../../img/partnerImg1.png";
import partnerImg2 from "../../img/partnerImg2.png";
import partnerImg3 from "../../img/partnerImg3.png";
import partnerImg4 from "../../img/partnerImg4.png";
import partnerImg5 from "../../img/partnerImg5.png";
import partnerImg6 from "../../img/partnerImg6.png";
import partnerImg7 from "../../img/partnerImg7.png";
import partnerImg8 from "../../img/partnerImg8.png";

const data = [
  {
    id: 1,
    img: partnerImg1,
    title: "Газпром",
    desc: "Корпорация атомной энергии",
  },
  {
    id: 2,
    img: partnerImg2,
    title: "Росатом",
    desc: "Энергетическая компания",
  },
  {
    id: 3,
    img: partnerImg3,
    title: "Роснефть",
    desc: "Нефтегазовая компания",
  },
  {
    id: 4,
    img: partnerImg4,
    title: "Роскосмос",
    desc: "Корпорация в космической отрасли",
  },
  {
    id: 5,
    img: partnerImg5,
    title: "Лукойл",
    desc: "Нефтяная компания",
  },
  {
    id: 6,
    img: partnerImg6,
    title: "Интер РАО",
    desc: "Энергетическая компания",
  },
  {
    id: 7,
    img: partnerImg7,
    title: "Ростех",
    desc: "Промышленная корпорация",
  },
  {
    id: 8,
    img: partnerImg8,
    title: "Банк ВТБ",
    desc: "Коммерческий банк ",
  },
];

const Partners = () => {
  let cards = data?.map((el, id) => (
    <div key={id} className="partners__card">
      <img src={el.img} alt="" />
      <h3>{el.title}</h3>
      <p>{el.desc}</p>
    </div>
  ));
  return (
    <div className="partners__section">
      <div className="container">
        <div className="partners__cards">{cards}</div>
      </div>
    </div>
  );
};

export default Partners;
