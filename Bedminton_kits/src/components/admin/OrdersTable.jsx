import React from 'react';

const OrdersTable = ({ orders }) => {
  return (
    <div className="orders-section">
      <div className="section-header">
        <h2>Recent Orders</h2>
        <button className="view-all-link">View All</button>
      </div>
      <div className="table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>ORDER ID</th>
              <th>CUSTOMER</th>
              <th>PRODUCT</th>
              <th>STATUS</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td className="font-medium">{order.id}</td>
                <td>
                  <div className="customer-cell">
                    <img src={order.avatar} alt={order.customer} className="table-avatar" />
                    <span>{order.customer}</span>
                  </div>
                </td>
                <td>{order.product}</td>
                <td>
                  <span className={`status-badge ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
                <td className="font-bold">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
