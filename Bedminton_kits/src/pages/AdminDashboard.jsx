import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Download,
  Calendar
} from 'lucide-react';
import AdminHeader from '../components/admin/AdminHeader';
import StatCard from '../components/admin/StatCard';
import OrdersTable from '../components/admin/OrdersTable';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Total Sales',
      value: '$45,230',
      change: '+12.5%',
      isPositive: true,
      icon: <ShoppingCart size={20} className="text-green-500" />,
      color: 'green'
    },
    {
      title: 'New Orders',
      value: '124',
      change: '+5.2%',
      isPositive: true,
      icon: <Package size={20} className="text-accent" />,
      color: 'accent'
    },
    {
      title: 'Total Users',
      value: '1,240',
      change: '+18.7%',
      isPositive: true,
      icon: <LayoutDashboard size={20} className="text-orange-500" />,
      color: 'orange'
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '-2.1%',
      isPositive: false,
      icon: <LayoutDashboard size={20} className="text-red-500" />,
      color: 'red'
    }
  ];

  const recentOrders = [
    { id: '#1024', customer: 'Bopha', product: 'Yonex Astrox 99', status: 'Delivered', amount: '$210', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bopha' },
    { id: '#1025', customer: 'Heang smos', product: 'Aerobite String', status: 'Processing', amount: '$15', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Heang' },
    { id: '#1026', customer: 'jek jean', product: 'SHB-65Z3 Shoes', status: 'Shipped', amount: '$140', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jek' }
  ];

  return (
    <div className="admin-container">
      <AdminHeader />

      <main className="admin-main animate-fade-in">
        <div className="overview-header">
          <div className="title-section">
            <h1>Dashboard Overview</h1>
            <p className="welcome-text">Welcome back! Here's what's happening today.</p>
          </div>
          <div className="header-buttons">
            <button className="btn-premium-secondary" style={{ padding: '10px 20px', fontSize: '0.875rem' }}>
              <Calendar size={18} />
              <span>Last 30 Days</span>
            </button>
            <button className="btn-premium-primary" style={{ padding: '10px 20px', fontSize: '0.875rem' }}>
              <Download size={18} />
              <span>Export Report</span>
            </button>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <OrdersTable orders={recentOrders} />
      </main>
    </div>
  );
};

export default AdminDashboard;
