import React, { useState, useEffect } from 'react';
import { Filter, Download } from 'lucide-react';
import AdminHeader from '../components/admin/AdminHeader';
import OrderTable from '../components/admin/OrderTable';
import AdminFooter from '../components/admin/AdminFooter';
import { api } from '../utils/api';
import './AdminOrders.css';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await api.get('orders');
        const formattedData = data.map(o => ({
          ...o,
          amount: o.amount.toString().startsWith('$') ? o.amount : `$${o.amount}`
        }));
        setOrders(formattedData);
      } catch (error) {
        console.error('Error fetching orders:', error);
        alert('Failed to fetch orders. Please ensure the backend server is running.');
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
