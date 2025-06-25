import React from 'react';
import './OrderStatus.css';

function OrderStatus({ orderId, status, image }) {
  return (
    <div className="order-box">
      <img src={image} alt={status} className="status-img" />
      <p>Order ID: {orderId}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default OrderStatus;







