import React from 'react';

const PricingInfo = ({ data, updateData }) => {
  return (
    <div className="admin-card">
      <div className="card-header">
        <div className="card-icon green">💵</div>
        <h3>Pricing</h3>
      </div>
      <div className="card-body pricing-grid">
        <div className="form-group">
          <label>Base Price ($)</label>
          <input
            type="number"
            placeholder="0.00"
            step="0.01"
            value={data.price}
            onChange={(e) => updateData('price', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Sale Price ($)</label>
          <input
            type="number"
            placeholder="0.00"
            step="0.01"
            value={data.oldPrice}
            onChange={(e) => updateData('oldPrice', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default PricingInfo;
