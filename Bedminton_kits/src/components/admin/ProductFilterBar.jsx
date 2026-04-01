import React from 'react';
import { ChevronDown } from 'lucide-react';

const ProductFilterBar = ({ totalCount }) => {
  return (
    <div className="filter-bar">
      <div className="filter-left">
        <span className="filter-label">Filter by:</span>
        <button className="filter-dropdown">
          All Categories <ChevronDown size={16} />
        </button>
      </div>
      <div className="filter-right">
        <span className="inventory-text">Total Inventory: <strong>{totalCount} products</strong></span>
      </div>
    </div>
  );
};

export default ProductFilterBar;
