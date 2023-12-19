import React from 'react'

const Payment = () => {
  return (
    <section className="payment contrast-container">
    <button className="title-btn">
      <h2>Способ оплаты</h2>
      <p className="title-btn__text h4">Изменить</p>
    </button>
    <div className="payment__card">
      <img src=".src/assets/icons/mir.svg" alt="" />
      <p className="text card-number">1234 56•• •••• 1234</p>
      <p className="text">01/30</p>
    </div>
    <p className="text--small">Спишем оплату с карты при получении</p>
  </section>
  )
}

export default Payment