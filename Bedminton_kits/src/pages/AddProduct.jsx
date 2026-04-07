import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Save, X, Loader2 } from 'lucide-react';
import AdminHeader from '../components/admin/AdminHeader';
import GeneralInfo from '../components/admin/GeneralInfo';
import PricingInfo from '../components/admin/PricingInfo';
import ProductSpecs from '../components/admin/ProductSpecs';
import ProductVariants from '../components/admin/ProductVariants';
import ImageUpload from '../components/admin/ImageUpload';
import VisibilitySettings from '../components/admin/VisibilitySettings';
import { api } from '../utils/api';
import AdminFooter from '../components/admin/AdminFooter';
import './AddProduct.css';

const AddProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productData, setProductData] = useState({
    name: '',
    subtitle: '',
    sku: '',
    description: '',
    brand: 'Select Brand',
    category: 'Select Category',
    price: '',
    oldPrice: '',
    stock: 0,
    image: '',
    images: [],
    badge: '',
    badgeType: ''
  });

  const navigate = useNavigate();

  const updateProductData = (key, value) => {
    setProductData(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    // Basic validation
    if (!productData.name || productData.category === 'Select Category' || !productData.price) {
      alert('Please fill in Name, Category and Price');
      return;
    }

    setIsLoading(true);
    console.log('Attempting to save product:', productData);

    try {
      const payload = {
        ...productData,
        price: parseFloat(productData.price),
        oldPrice: productData.oldPrice ? parseFloat(productData.oldPrice) : null,
        stock: parseInt(productData.stock) || 0,
        stockLevel: productData.stock > 10 ? 'in' : (productData.stock > 0 ? 'low' : 'out'),
        image: productData.images.length > 0 ? productData.images[0].url : '/NANOFLARE_1000_product.webp'
      };

      await api.post('products', payload);

      setIsLoading(false);
      console.log('Product saved successfully');
      alert('Product added successfully!');
      navigate('/admin/products');
    } catch (error) {
      setIsLoading(false);
      console.error('Save error details:', error);
      alert('Error saving product: ' + error.message + '\n\nPlease ensure you have run "npm run server" to start the database server.');
    }
  };



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
            <button
              className={`btn-premium-primary save-btn ${isLoading ? 'loading' : ''}`}
              onClick={handleSave}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <Save size={18} />
              )}
              <span>{isLoading ? 'Saving...' : 'Save Product'}</span>
            </button>
          </div>
        </div>

        <div className="add-product-grid">
          <div className="form-column">
            <GeneralInfo data={productData} updateData={updateProductData} />
            <PricingInfo data={productData} updateData={updateProductData} />
            <ProductSpecs
              brand={productData.brand}
              category={productData.category}
              onUpdate={updateProductData}
            />
            <ProductVariants category={productData.category} data={productData} updateData={updateProductData} />
          </div>
          <div className="sidebar-column">
            <ImageUpload images={productData.images} onUpdate={updateProductData} />
            <VisibilitySettings data={productData} updateData={updateProductData} />
          </div>
        </div>

        <AdminFooter />
      </main>
    </div>
  );
};

export default AddProduct;

