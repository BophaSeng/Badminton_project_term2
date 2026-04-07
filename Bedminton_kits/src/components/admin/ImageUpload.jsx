import React, { useState, useRef } from 'react';
import { Upload, Plus, X } from 'lucide-react';

const ImageUpload = ({ images, onUpdate }) => {
  const fileInputRef = useRef(null);

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    try {
      const newImagesPromises = files.map(async (file) => {
        const base64 = await fileToBase64(file);
        return {
          id: Math.random().toString(36).substr(2, 9),
          url: base64, // Use Base64 as the URL for previews and storage
          file
        };
      });

      const newImages = await Promise.all(newImagesPromises);
      onUpdate('images', [...images, ...newImages].slice(0, 6)); // Limit to 6 images
    } catch (error) {
      console.error("Error converting images to Base64:", error);
      alert("Failed to process images.");
    }
  };

  const removeImage = (id) => {
    onUpdate('images', images.filter(img => img.id !== id));
  };



  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="admin-card">
      <div className="card-header">
        <div className="card-icon blue">🖼️</div>
        <h3>Product Images</h3>
      </div>
      <div className="card-body">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          multiple
          accept="image/*"
          style={{ display: 'none' }}
        />

        <div className="upload-dropzone" onClick={triggerFileInput}>
          <div className="upload-icon-circle">
            <Upload size={24} className="text-slate-400" />
          </div>
          <p className="upload-text">
            <strong>Click to upload</strong> or drag and drop
          </p>
          <p className="upload-hint">PNG, JPG or WEBP (max. 5MB)</p>
        </div>

        <div className="thumbnail-grid">
          {images.map((img) => (
            <div key={img.id} className="thumbnail-slot relative group animate-scale-in">
              <img src={img.url} alt="preview" className="w-full h-full object-cover rounded-lg" />
              <button
                className="thumbnail-remove-btn"
                onClick={(e) => { e.stopPropagation(); removeImage(img.id); }}
              >
                <X size={14} />
              </button>
            </div>
          ))}
          {/* Fill remaining slots with empty indicators up to 3 minimum if images < 3 */}
          {[...Array(Math.max(0, 3 - images.length))].map((_, i) => (
            <div key={`empty-${i}`} className="thumbnail-slot empty" onClick={triggerFileInput}>
              <Plus size={20} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
