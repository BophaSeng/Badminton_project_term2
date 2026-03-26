import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="product-card">
            {product.badge && (
                <span className={`badge ${product.badgeType === 'sale' ? 'sale' : 'bestseller'}`}>
                    {product.badge}
                </span>
            )}
            <Link to={`/product/${product.id}`} className="product-image">
                <img src={product.img} alt={product.name} />
            </Link>
            <div className="product-brand">{product.brand}</div>
            <h3 className="product-name">{product.name}</h3>
            <div className="product-price">
                <span className="price-current">${product.price}</span>
                {product.oldPrice && <span className="price-old">${product.oldPrice}</span>}
            </div>
            <button className="add-to-basket" onClick={() => addToCart(product)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                Add to basket
            </button>
        </div>
    );
};

export default ProductCard;
