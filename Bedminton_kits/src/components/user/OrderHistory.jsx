import React from 'react';
import { Search, Filter, Calendar, ExternalLink, Download } from 'lucide-react';
import './OrderHistory.css';

const OrderHistory = () => {
  const orders = [
    { id: '#ORD-9982', date: 'Oct 28, 2023', amount: '$273.50', status: 'Shipped' },
    { id: '#ORD-7721', date: 'Oct 24, 2023', amount: '$12.00', status: 'Delivered' },
    { id: '#ORD-6612', date: 'Oct 12, 2023', amount: '$34.50', status: 'Cancelled' },
    { id: '#ORD-5541', date: 'Sep 30, 2023', amount: '$189.99', status: 'Delivered' },
    { id: '#ORD-4412', date: 'Sep 15, 2023', amount: '$45.00', status: 'Delivered' },
  ];

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered': return 'status-delivered';
      case 'shipped': return 'status-shipped';
      case 'cancelled': return 'status-cancelled';
      default: return '';
    }
  };

  return (
    <div className="order-history-container animate-fade-in">
      <div className="history-header">
        <h2 className="section-title">Order History</h2>
        <span className="total-badge">Total Orders (12)</span>
      </div>

      <div className="history-controls glass">
        <div className="search-box">
          <Search size={18} />
          <input type="text" placeholder="Search orders..." />
        </div>
        <div className="filter-group">
          <select className="filter-select">
            <option>Status: All</option>
            <option>Delivered</option>
            <option>Shipped</option>
            <option>Cancelled</option>
          </select>
          <select className="filter-select">
            <option>Year: 2024</option>
            <option>Year: 2023</option>
          </select>
        </div>
      </div>

      <div className="orders-table-wrapper glass">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="order-id">{order.id}</td>
                <td className="order-date">{order.date}</td>
                <td className="order-amount">{order.amount}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="text-right actions-cell">
                  <button className="action-link primary">View Details</button>
                  <button className="action-link secondary">Invoice</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="table-footer">
          <p>Showing 1 to 5 of 12 orders</p>
          <div className="pagination">
            <button className="page-btn">Previous</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
