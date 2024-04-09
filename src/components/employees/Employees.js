import React from "react";
import "../../sass/_employees.scss";
import media1 from "../../img/media1.png";
import media2 from "../../img/media2.png";
import media3 from "../../img/media3.png";
import avatar1 from "../../img/avatar1.png";
import avatar2 from "../../img/avatar2.png";
import avatar3 from "../../img/avatar3.png";
import avatar4 from "../../img/avatar4.png";
import avatar5 from "../../img/avatar5.png";
import avatar6 from "../../img/avatar6.png";
import carimg from "../../img/imageCard.png";

const data = [
  {
    id: 1,
    name: "Антон Макаров",
    job: "Руководитель компании",
    img: avatar1,
  },
  {
    id: 2,
    name: "Елена Валерьева",
    job: "Главный бухгалтер",
    img: avatar2,
  },
  {
    id: 3,
    name: "Иван Аркадьев ",
    job: "Менеджер по закупкам",
    img: avatar3,
  },
  {
    id: 4,
    name: "Борис Вавилов",
    job: "Бухгалтер",
    img: avatar4,
  },
  {
    id: 5,
    name: "Алина Кравец",
    job: "Сотрудник отдела кадров",
    img: avatar5,
  },
  {
    id: 6,
    name: "Виктор Козуб",
    job: "Менеджер по закупкам",
    img: avatar6,
  },
];

const Employees = () => {
  let cards = data?.map((el, id) => (
    <div key={id} className="employees__card">
      <div className="employees__color">
        <span></span>
      </div>
      <div className="employees__avater">
        <div className="employees__avater-img">
          <img src={el.img} alt="" />
        </div>
        <div className="employees__avater-info">
          <h3>{el.name}</h3>
          <p>{el.job}</p>
          <span></span>
          <div className="avatar__media">
            <img src={media1} alt="" />
            <img src={media2} alt="" />
            <img src={media3} alt="" />
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="employees__section">
      <div className="container">
        <h1>Сотрудники компании</h1>
        <div className="employees__cards">{cards}</div>
        <div className="cars_img">
          <img src={carimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Employees;
