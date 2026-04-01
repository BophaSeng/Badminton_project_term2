import React from 'react';
import { Bold, Italic, List, Link } from 'lucide-react';

const GeneralInfo = () => {
  return (
    <div className="admin-card">
      <div className="card-header">
        <div className="card-icon blue">ℹ️</div>
        <h3>General Information</h3>
      </div>
      <div className="card-body">
        <div className="form-group">
          <label>Product Name</label>
          <input type="text" placeholder="e.g. Carbonex 8000 Plus" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <div className="rich-text-editor">
            <div className="editor-toolbar">
              <button type="button"><Bold size={16} /></button>
              <button type="button"><Italic size={16} /></button>
              <button type="button"><List size={16} /></button>
              <button type="button"><Link size={16} /></button>
            </div>
            <textarea placeholder="Write product description here..." rows="6"></textarea>
          </div>
        </div>
        <div className="form-group">
          <label>SKU</label>
          <input type="text" placeholder="e.g. YX-CB-8000" />
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
