import React from 'react';
import OrderRow from './OrderRow';

const OrderTable = ({ orders }) => {
  return (
    <div className="table-container">
      <table className="orders-table">
        <thead>
          <tr>
            <th>ORDER ID</th>
            <th>DATE</th>
            <th>CUSTOMER</th>
            <th>PAYMENT STATUS</th>
            <th>FULFILLMENT</th>
            <th>TOTAL AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <OrderRow key={index} {...order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
