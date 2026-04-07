import React from 'react';
import { Eye } from 'lucide-react';

const VisibilitySettings = ({ data, updateData }) => {
  return (
    <div className="admin-card">
      <div className="card-header">
        <div className="card-icon accent-alt"><Eye size={18} /></div>
        <h3>Visibility</h3>
      </div>
      <div className="card-body">
        <div className="toggle-group">
          <div className="toggle-info">
            <span className="toggle-label">Published</span>
            <span className="toggle-hint">Make product available to customers</span>
          </div>
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="toggle-group">
          <div className="toggle-info">
            <span className="toggle-label">Featured Product</span>
            <span className="toggle-hint">Highlight on the homepage</span>
          </div>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="form-group mt-6">
          <label>Availability Date</label>
          <input type="date" className="date-input" defaultValue="2026-03-30" />
        </div>
      </div>
    </div>
  );
};

export default VisibilitySettings;
