import React from 'react'

const Grocery = ({name, quantity, starred, onPurchase}) => {
  return (
    <article className={`Grocery ${starred ? 'starred' : ''}`}>
      <h2>Item: {name}</h2>
      <h3>Quantity: {quantity}</h3>
      <button onClick={onPurchase} className='purchase-btn'>Purchase</button>
    </article>
  )
}

export default Grocery
