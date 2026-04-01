import React from 'react';
import { Upload, Plus } from 'lucide-react';

const ImageUpload = () => {
  return (
    <div className="admin-card">
      <div className="card-header">
        <div className="card-icon blue">🖼️</div>
        <h3>Product Images</h3>
      </div>
      <div className="card-body">
        <div className="upload-dropzone">
          <div className="upload-icon-circle">
            <Upload size={24} className="text-slate-400" />
          </div>
          <p className="upload-text">
            <strong>Click to upload</strong> or drag and drop
          </p>
          <p className="upload-hint">PNG, JPG or WEBP (max. 5MB)</p>
        </div>
        <div className="thumbnail-grid">
          <div className="thumbnail-slot empty"><Plus size={20} /></div>
          <div className="thumbnail-slot empty"><Plus size={20} /></div>
          <div className="thumbnail-slot empty"><Plus size={20} /></div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
