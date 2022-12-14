import React from 'react'

import OrderProductItem from './OrderProductItem'

export default function Order({ children, order }) {
  console.log(order)
  return (
    <div className="order-info">
      {children}
      <p>
        <span className="key">Order ID: </span>
        {order.id}
      </p>
      <p>
        <span className="key">Created date: </span>
        {order.createdAt}
      </p>
      <p>
        <span className="key">Status: </span>
        {order.status}
      </p>

      {order.products.map((product, i) => {
        return <OrderProductItem key={i} product={product} />
      })}
    </div>
  )
}
