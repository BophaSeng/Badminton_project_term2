import React from 'react';

const OrderRow = ({ id, date, customer, paymentStatus, fulfillment, amount, avatar }) => {
  // Helper to determine status classes
  const getStatusClass = (status) => {
    const s = status.toLowerCase();
    if (['paid', 'shipped'].includes(s)) return 'status-green';
    if (['pending', 'processing'].includes(s)) return 'status-yellow';
    if (['refunded', 'unfulfilled', 'cancelled'].includes(s)) return 'status-red';
    return 'status-default';
  };

  return (
    <tr className="order-row">
      <td className="order-id">{id}</td>
      <td className="order-date">{date}</td>
      <td className="order-customer">
        <div className="customer-info">
          {avatar ? (
            <img src={avatar} alt={customer} className="customer-avatar" />
          ) : (
            <div className="customer-avatar-placeholder"></div>
          )}
          <span>{customer}</span>
        </div>
      </td>
      <td>
        <span className={`status-badge ${getStatusClass(paymentStatus)}`}>
          {paymentStatus}
        </span>
      </td>
      <td>
        <span className={`status-badge ${getStatusClass(fulfillment)}`}>
          {fulfillment}
        </span>
      </td>
      <td className="order-amount">{amount}</td>
    </tr>
  );
};

export default OrderRow;
