import React from 'react';
import './Shop.css';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Shop = () => {
    const { addToCart } = useCart();
    const [selectedCategories, setSelectedCategories] = React.useState(['Shoes']);
    const [selectedBrands, setSelectedBrands] = React.useState([]);
    const [sortBy, setSortBy] = React.useState('Best Selling');

    const products = [
        { id: 1, brand: 'YONEX', category: 'Rackets', name: 'Astrox 88D Pro Badminton Racket - Camel Gold', price: '200.59', oldPrice: '289.95', badge: 'SAVE 35%', badgeType: 'sale', img: '/products/NF700P_Midnight_Purple_1.webp' },
        { id: 2, brand: 'YONEX', category: 'Shoes', name: "Power Cushion 65 X3 - Men's Court Shoes", price: '99.99', badge: 'NEW ARRIVAL', badgeType: 'bestseller', img: '/products/SBAZ2M_FLASHGREEN_2.webp' },
        { id: 3, brand: 'YONEX', category: 'Shoes', name: 'Aerobite Hybrid Badminton String - 200m Reel', price: '144.50', oldPrice: '169.95', badge: 'SAVE 15%', badgeType: 'sale', img: '/products/AC102_Wine_Red_1.webp' },
        { id: 4, brand: 'VICTOR', category: 'Bags', name: 'Tournament Bag BR9609 - 12 Racket Capacity', price: '85.00', img: '/products/INT_BA72631WEX_007-1.webp' },
        { id: 5, brand: 'VICTOR', category: 'Rackets', name: 'Thruster K HMR L Racket - Blue/Orange', price: '112.00', oldPrice: '140.00', badge: 'SAVE 20%', badgeType: 'sale', img: '/racket.png' },
        { id: 6, brand: 'YONEX', category: 'Shuttlecocks', name: 'AS-50 Tournament Grade Shuttlecocks (1 Dozen)', price: '34.99', img: '/bags.png' },
        { id: 7, brand: 'ASICS', category: 'Shoes', name: 'Gel-Rocket 10 Court Shoes - White/Gunmetal', price: '79.50', img: '/shoes.png' },
        { id: 8, brand: 'LI-NING', category: 'Apparel', name: 'Pro Series Lightweight Jersey - Olympic Edition', price: '35.00', oldPrice: '58.30', badge: 'SAVE 40%', badgeType: 'sale', img: '/racket.png' },
    ];

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
        <div className="shop-page">
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
                        {filteredProducts.length > 0 ? (
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
                            <button className="page-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>
                            <button className="page-btn active">1</button>
                            <span>...</span>
                            <button className="page-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default Shop;
