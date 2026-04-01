import React from 'react';
import { Link } from 'react-router-dom';
import { Save, X } from 'lucide-react';
import AdminHeader from '../components/admin/AdminHeader';
import GeneralInfo from '../components/admin/GeneralInfo';
import PricingInfo from '../components/admin/PricingInfo';
import ProductSpecs from '../components/admin/ProductSpecs';
import ImageUpload from '../components/admin/ImageUpload';
import VisibilitySettings from '../components/admin/VisibilitySettings';
import AdminFooter from '../components/admin/AdminFooter';
import './AddProduct.css';

const AddProduct = () => {
  return (
    <div className="admin-container animate-fade-in">
      <AdminHeader />

      <main className="admin-main">
        <div className="breadcrumb">
          <Link to="/admin/products">Products</Link> <span>›</span> Add New Product
        </div>

        <div className="overview-header">
          <div className="title-section">
            <h1>Add New Product</h1>
          </div>
          <div className="header-buttons">
            <Link to="/admin/products" className="btn-premium-secondary">
              <span>Cancel</span>
            </Link>
            <button className="btn-premium-primary save-btn">
              <Save size={18} />
              <span>Save Product</span>
            </button>
          </div>
        </div>

        <div className="add-product-grid">
          <div className="form-column">
            <GeneralInfo />
            <PricingInfo />
            <ProductSpecs />
          </div>
          <div className="sidebar-column">
            <ImageUpload />
            <VisibilitySettings />
          </div>
        </div>

        <AdminFooter />
      </main>
    </div>
  );
};

export default AddProduct;
