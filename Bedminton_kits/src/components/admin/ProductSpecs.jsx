import React from 'react';
import { ChevronDown } from 'lucide-react';

const ProductSpecs = ({ brand, category, onUpdate }) => {
  return (
    <div className="admin-card">
      <div className="card-header">
        <div className="card-icon purple">📊</div>
        <h3>Product Specifications</h3>
      </div>
      <div className="card-body specs-grid">
        <div className="form-group">
          <div className="label-row">
            <label>Brand</label>
            <button className="add-link">+ NEW BRAND</button>
          </div>
          <div className="select-wrapper">
            <select value={brand} onChange={(e) => onUpdate('brand', e.target.value)}>
              <option>Select Brand</option>
              <option>Yonex</option>
              <option>Victor</option>
              <option>Li-Ning</option>
            </select>
            <ChevronDown className="select-arrow" size={16} />
          </div>
        </div>
        <div className="form-group">
          <div className="label-row">
            <label>Category</label>
            <button className="add-link">+ NEW CATEGORY</button>
          </div>
          <div className="select-wrapper">
            <select value={category} onChange={(e) => onUpdate('category', e.target.value)}>
              <option>Select Category</option>
              <option>Rackets</option>
              <option>Shoes</option>
              <option>Apparel</option>
              <option>Bags</option>
              <option>Shuttlecocks</option>
            </select>
            <ChevronDown className="select-arrow" size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecs;
