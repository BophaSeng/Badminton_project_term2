import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

const ProductRow = ({ image, name, subtitle, sku, category, price, stock, stockLevel }) => {
  // Determine stock bar color and percentage
  let barColor = '#22c55e'; // Green
  let percentage = '100%';
  let statusText = `${stock} In Stock`;

  if (stockLevel === 'low') {
    barColor = '#f97316'; // Orange
    percentage = '30%';
    statusText = `${stock} Low Stock`;
  } else if (stockLevel === 'out') {
    barColor = '#ef4444'; // Red
    percentage = '10%';
    statusText = 'Out of Stock';
  }

  return (
    <tr>
      <td className="product-image-cell">
        <div className="product-img-wrapper">
          <img src={image} alt={name} />
        </div>
      </td>
      <td>
        <div className="product-name-cell">
          <span className="p-name">{name}</span>
          <span className="p-subtitle">{subtitle} - {sku}</span>
        </div>
      </td>
      <td className="sku-cell">{sku}</td>
      <td>
        <span className={`category-tag ${category.toLowerCase()}`}>
          {category}
        </span>
      </td>
      <td className="font-bold" style={{ color: 'var(--primary)', fontFamily: 'Outfit, sans-serif', fontSize: '1.125rem' }}>{price}</td>
      <td>
        <div className="stock-cell">
          <div className="stock-bar-bg">
            <div
              className="stock-bar-fill"
              style={{
                width: percentage,
                backgroundColor: stockLevel === 'out' ? 'var(--danger)' : stockLevel === 'low' ? 'var(--warning)' : 'var(--success)'
              }}
            ></div>
          </div>
          <span className="stock-text" style={{
            color: stockLevel === 'out' ? 'var(--danger)' : stockLevel === 'low' ? 'var(--warning)' : 'var(--success)'
          }}>{statusText}</span>
        </div>
      </td>
      <td className="actions-cell">
        <button className="icon-btn edit"><Pencil size={18} /></button>
        <button className="icon-btn delete"><Trash2 size={18} /></button>
      </td>
    </tr>
  );
};

export default ProductRow;
