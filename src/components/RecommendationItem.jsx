import React from "react";

const RecommendationItem = ({ item }) => {
  if (item.rec)
    return (
      <li className="rec__item" key={item.id}>
        <img className="rec__pic" src={item.img} alt="" />
        <div className="rec__description">
          <div className="rec__subtotal">
            <h4 className="rec__discount">
              {item.price} <span className="h4">сом</span>
            </h4>
            <div className="subtotal__full">{item.fullPrice} сом</div>
            <h5 className="rec__title">{item.title}</h5>
          </div>
        </div>
        <button className="btn" type="button">Добавить в корзину</button>
      </li>
    );
};

export default RecommendationItem;
