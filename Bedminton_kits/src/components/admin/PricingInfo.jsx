import React from 'react';

const PricingInfo = () => {
  return (
    <div className="admin-card">
      <div className="card-header">
        <div className="card-icon green">💵</div>
        <h3>Pricing</h3>
      </div>
      <div className="card-body pricing-grid">
        <div className="form-group">
          <label>Base Price ($)</label>
          <input type="number" placeholder="0.00" step="0.01" />
        </div>
        <div className="form-group">
          <label>Sale Price ($)</label>
          <input type="number" placeholder="0.00" step="0.01" />
        </div>
      </div>
    </div>
  );
};

export default PricingInfo;
