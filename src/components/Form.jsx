import React from "react";

const Form = () => {
  return (
    <section className="receiver contrast-container">
      <h2>Получатель</h2>
      <form>
        <div className="receiver__row receiver__row--1">
          <div className="receiver__col">
            <div className="receiver__label"></div>
            <input type="text" name="name" id="input-name" placeholder="Имя" />
            <div className="receiver__err"></div>
          </div>
          <div className="receiver__col">
            <div className="receiver__label"></div>
            <input
              type="text"
              name="surname"
              id="input-surname"
              placeholder="Фамилия"
            />
            <div className="receiver__err"></div>
          </div>
        </div>
        <div className="receiver__row receiver__row--2">
          <div className="receiver__col">
            <div className="receiver__label"></div>
            <input
              type="email"
              name="email"
              id="input-email"
              placeholder="Почта"
            />
            <div className="receiver__err"></div>
          </div>
          <div className="receiver__col">
            <div className="receiver__label"></div>
            <input
              type="tel"
              name="telephone"
              id="input-telephone"
              placeholder="+7 988 123-45-67"
            />
            <div className="receiver__err"></div>
          </div>
          <div className="receiver__col">
            <div className="receiver__label"></div>
            <input
              type="number"
              name="inn-num"
              id="inn-input"
              placeholder="ИНН"
            />
            <div className="receiver__err"></div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
