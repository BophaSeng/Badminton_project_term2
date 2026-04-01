import React, { useState, useEffect } from 'react';
import { Filter, Download } from 'lucide-react';
import AdminHeader from '../components/admin/AdminHeader';
import OrderTable from '../components/admin/OrderTable';
import AdminFooter from '../components/admin/AdminFooter';
import './AdminOrders.css';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialMockOrders = [
    {
      id: '#ORD-7291',
      date: 'Oct 24, 2023, 10:45 AM',
      customer: 'Liam Anderson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Liam',
      paymentStatus: 'PAID',
      fulfillment: 'SHIPPED',
      amount: '$342.50'
    },
    {
      id: '#ORD-7290',
      date: 'Oct 24, 2023, 09:12 AM',
      customer: 'Sarah Jenkins',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      paymentStatus: 'PENDING',
      fulfillment: 'PROCESSING',
      amount: '$89.00'
    },
    {
      id: '#ORD-7289',
      date: 'Oct 23, 2023, 05:30 PM',
      customer: 'Marcus Wright',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
      paymentStatus: 'PAID',
      fulfillment: 'UNFULFILLED',
      amount: '$1,210.00'
    },
    {
      id: '#ORD-7288',
      date: 'Oct 23, 2023, 03:15 PM',
      customer: 'Sophia Chen',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia',
      paymentStatus: 'REFUNDED',
      fulfillment: 'PROCESSING',
      amount: '$45.20'
    },
    {
      id: '#ORD-7287',
      date: 'Oct 23, 2023, 01:05 PM',
      customer: 'David Wilson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
      paymentStatus: 'PAID',
      fulfillment: 'SHIPPED',
      amount: '$215.00'
    }
  ];

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3001/orders');
        if (response.ok) {
          const data = await response.json();
          const formattedData = data.map(o => ({
            ...o,
            amount: o.amount.toString().startsWith('$') ? o.amount : `$${o.amount}`
          }));
          setOrders(formattedData);
        } else {
          setOrders(initialMockOrders);
        }
      } catch (error) {
        console.warn('API not available, using mock data');
        setOrders(initialMockOrders);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="admin-container animate-fade-in">
      <AdminHeader />

      <main className="admin-main">
        <div className="overview-header">
          <div className="title-section">
            <h1>Orders</h1>
            <p className="subtitle">Total of <span className="highlight">156 orders</span> received today.</p>
          </div>
          <div className="header-buttons">
            <button className="btn-premium-secondary">
              <Filter size={18} />
              <span>Filter</span>
            </button>
            <button className="btn-premium-primary">
              <Download size={18} />
              <span>Export Report</span>
            </button>
          </div>
        </div>

        <div className="orders-container">
          {loading ? (
            <div className="loading-state">Loading orders...</div>
          ) : (
            <>
              <OrderTable orders={orders} />
              <div className="table-footer">
                <span>Total of {orders.length} orders</span>
              </div>
            </>
          )}
        </div>

        <AdminFooter />
      </main>
    </div>
  );
};

export default AdminOrders;
