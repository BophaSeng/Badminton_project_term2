import React from 'react';
import './Shop.css';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import ProductCard from '../components/user/ProductCard';
import db from '../../db.json';

const Shop = () => {
    const { addToCart } = useCart();
    const products = db.products;
    const loading = false;
    const [selectedCategories, setSelectedCategories] = React.useState([]);
    const [selectedBrands, setSelectedBrands] = React.useState([]);
    const [sortBy, setSortBy] = React.useState('Best Selling');

    const filteredProducts = products.filter(p => {
        const catMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
        const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(p.brand);
        return catMatch && brandMatch;
    });

    const toggleCategory = (cat) => {
        setSelectedCategories(prev =>
            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
        );
    };

    const toggleBrand = (brand) => {
        setSelectedBrands(prev =>
            prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
        );
    };

    const clearAll = () => {
        setSelectedCategories([]);
        setSelectedBrands([]);
    };

    return (
        <div className="shop-page animate-fade-in">
            <div className="shop-container">
                {/* Filters Sidebar */}
                <aside className="filters-sidebar">
                    <div className="filter-group-header">
                        <h3>FILTERS</h3>
                        <span className="clear-all" onClick={clearAll}>CLEAR ALL</span>
                    </div>

                    <div className="filter-group">
                        <h3>CATEGORY</h3>
                        <div className="filter-options">
                            {['Rackets', 'Shoes', 'Shuttlecocks', 'Apparel', 'Bags'].map(cat => (
                                <label key={cat} className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(cat)}
                                        onChange={() => toggleCategory(cat)}
                                    />
                                    {cat}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3>BRAND</h3>
                        <div className="filter-options">
                            {['YONEX', 'VICTOR', 'LI-NING', 'FZ FORZA'].map(brand => (
                                <label key={brand} className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={selectedBrands.includes(brand)}
                                        onChange={() => toggleBrand(brand)}
                                    />
                                    {brand}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3>MATERIAL</h3>
                        <div className="filter-options">
                            {['Carbon Graphite', 'Mesh / Synthetic', 'Polyester'].map(mat => (
                                <label key={mat} className="checkbox-label">
                                    <input type="checkbox" />
                                    {mat}
                                </label>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <section className="shop-content">
                    <div className="shop-header">
                        <div className="product-count">Showing <span>{filteredProducts.length}</span> products</div>
                        <div className="sort-dropdown">
                            <label>SORT BY: </label>
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                <option>Best Selling</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest</option>
                            </select>
                        </div>
                    </div>

                    <div className="shop-grid">
                        {loading ? (
                            <div className="loading-state">Loading products...</div>
                        ) : filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        ) : (
                            <div className="no-products">
                                No products match your filters. <span onClick={clearAll}>Clear All</span>
                            </div>
                        )}
                    </div>

                    {filteredProducts.length > 0 && (
                        <div className="pagination">
                            <button className="page-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg></button>
                            <button className="page-btn active">1</button>
                            <span>...</span>
                            <button className="page-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg></button>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default Shop;
