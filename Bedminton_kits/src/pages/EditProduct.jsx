import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Save, Loader2 } from 'lucide-react';
import AdminHeader from '../components/admin/AdminHeader';
import GeneralInfo from '../components/admin/GeneralInfo';
import PricingInfo from '../components/admin/PricingInfo';
import ProductSpecs from '../components/admin/ProductSpecs';
import ProductVariants from '../components/admin/ProductVariants';
import ImageUpload from '../components/admin/ImageUpload';
import VisibilitySettings from '../components/admin/VisibilitySettings';
import AdminFooter from '../components/admin/AdminFooter';
import { api } from '../utils/api';
import './AddProduct.css';

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(true);
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

    // Load existing product data
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await api.get(`products/${id}`);
                setProductData({
                    ...data,
                    price: data.price?.toString() || '',
                    oldPrice: data.oldPrice?.toString() || '',
                    images: data.images || (data.image ? [{ url: data.image, name: 'existing' }] : []),
                });
            } catch (error) {
                console.error('Failed to load product:', error);
                alert('Failed to load product. Redirecting to products list.');
                navigate('/admin/products');
            } finally {
                setIsFetching(false);
            }
        };
        fetchProduct();
    }, [id, navigate]);

    const updateProductData = (key, value) => {
        setProductData(prev => ({ ...prev, [key]: value }));
    };

    const handleUpdate = async () => {
        if (!productData.name || productData.category === 'Select Category' || !productData.price) {
            alert('Please fill in Name, Category and Price');
            return;
        }

        setIsLoading(true);
        try {
            const payload = {
                ...productData,
                price: parseFloat(productData.price),
                oldPrice: productData.oldPrice ? parseFloat(productData.oldPrice) : null,
                stock: parseInt(productData.stock) || 0,
                stockLevel: productData.stock > 10 ? 'in' : (productData.stock > 0 ? 'low' : 'out'),
                image: productData.images.length > 0 ? productData.images[0].url : productData.image || '/NANOFLARE_1000_product.webp'
            };

            await api.put(`products/${id}`, payload);
            setIsLoading(false);
            alert('Product updated successfully!');
            navigate('/admin/products');
        } catch (error) {
            setIsLoading(false);
            console.error('Update error:', error);
            alert('Error updating product: ' + error.message + '\n\nPlease ensure you have run "npm run server".');
        }
    };

    if (isFetching) {
        return (
            <div className="admin-container animate-fade-in">
                <AdminHeader />
                <main className="admin-main">
                    <div style={{ padding: '4rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                        Loading product...
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="admin-container animate-fade-in">
            <AdminHeader />

            <main className="admin-main">
                <div className="breadcrumb">
                    <Link to="/admin/products">Products</Link> <span>›</span> Edit Product
                </div>

                <div className="overview-header">
                    <div className="title-section">
                        <h1>Edit Product</h1>
                    </div>
                    <div className="header-buttons">
                        <Link to="/admin/products" className="btn-premium-secondary">
                            <span>Cancel</span>
                        </Link>
                        <button
                            className={`btn-premium-primary save-btn ${isLoading ? 'loading' : ''}`}
                            onClick={handleUpdate}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <Loader2 size={18} className="animate-spin" />
                            ) : (
                                <Save size={18} />
                            )}
                            <span>{isLoading ? 'Saving...' : 'Update Product'}</span>
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

export default EditProduct;
