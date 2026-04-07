import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { api } from '../utils/api';
import AdminHeader from '../components/admin/AdminHeader';
import ProductTable from '../components/admin/ProductTable';
import ProductFilterBar from '../components/admin/ProductFilterBar';
import AdminFooter from '../components/admin/AdminFooter';
import db from '../../db.json';
import './AdminProducts.css';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await api.get('products');
      // Format prices if they are numbers
      const formattedData = data.map(p => ({
        ...p,
        price: p.price.toString().startsWith('$') ? p.price : `$${p.price}`
      }));
      setProducts(formattedData);
    } catch (error) {
      console.warn('API fetch failed, using mock data from db.json', error);
      const formattedData = db.products.map(p => ({
        ...p,
        price: p.price.toString().startsWith('$') ? p.price : `$${p.price}`
      }));
      setProducts(formattedData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleProductDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await api.delete(`products/${id}`);
        setProducts(prev => prev.filter(p => p.id !== id));
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('Failed to delete product.');
      }
    }
  };

  return (
    <div className="admin-container animate-fade-in">
      <AdminHeader />

      <main className="admin-main">
        <div className="overview-header">
          <div className="title-section">
            <h1>Products</h1>
          </div>
          <div className="header-buttons">
            <Link to="/admin/products/add" className="btn-premium-primary add-product-btn">
              <Plus size={18} />
              <span>Add Product</span>
            </Link>
          </div>
        </div>

        <div className="products-container">
          <ProductFilterBar totalCount={products.length} />
          {loading ? (
            <div className="loading-state">Loading products...</div>
          ) : (
            <ProductTable products={products} onDelete={handleProductDelete} />
          )}
        </div>

        <AdminFooter />
      </main>
    </div>
  );
};

export default AdminProducts;
