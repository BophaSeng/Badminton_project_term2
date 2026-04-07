import React, { useState, useEffect } from 'react';
import { ChevronDown, Plus, Trash2, Palette, Shirt, Settings, X } from 'lucide-react';

const ProductVariants = ({ category, data, updateData }) => {
    const [variantsList, setVariantsList] = useState([]);

    // Initialize/Reset variants when category changes
    useEffect(() => {
        let initialVariants = [];
        if (category === 'Rackets') {
            initialVariants = [{ id: '1', type: '4U (80-84g)', stock: 0 }];
        } else if (category === 'Apparel') {
            initialVariants = [{ id: '1', gender: 'Men', size: 'L', stock: 0 }];
        } else if (category === 'Shuttlecocks') {
            initialVariants = [
                { id: '76', label: 'Speed 76', stock: 0 },
                { id: '77', label: 'Speed 77', stock: 0 },
                { id: '78', label: 'Speed 78', stock: 0 }
            ];
        } else if (category === 'Bags') {
            initialVariants = [{ id: '1', color: 'BLUE NEON', hex: '#2563eb', stock: 0 }];
        } else if (category === 'Shoes') {
            initialVariants = [{ id: '1', size: '40', stock: 0 }, { id: '2', size: '41', stock: 0 }];
        }
        setVariantsList(initialVariants);
    }, [category]);

    // Sync total stock to parent whenever variantsList changes
    useEffect(() => {
        const total = variantsList.reduce((sum, v) => sum + (parseInt(v.stock) || 0), 0);
        if (total !== parseInt(data.stock)) {
            updateData('stock', total);
        }
    }, [variantsList, data.stock, updateData]);

    const handleAddVariant = () => {
        const newId = Math.random().toString(36).substr(2, 9);
        let newVariant = { id: newId, stock: 0 };

        if (category === 'Rackets') newVariant.type = '4U (80-84g)';
        else if (category === 'Apparel') { newVariant.gender = 'Men'; newVariant.size = 'L'; }
        else if (category === 'Bags') { newVariant.color = 'NEW COLOR'; newVariant.hex = '#64748b'; }
        else if (category === 'Shoes') newVariant.size = '42';

        setVariantsList([...variantsList, newVariant]);
    };

    const handleDeleteVariant = (id) => {
        setVariantsList(variantsList.filter(v => v.id !== id));
    };

    const handleStockChange = (id, value) => {
        setVariantsList(variantsList.map(v => v.id === id ? { ...v, stock: parseInt(value) || 0 } : v));
    };

    const handleFieldChange = (id, field, value) => {
        setVariantsList(variantsList.map(v => v.id === id ? { ...v, [field]: value } : v));
    };

    const renderRacketsVariants = () => (
        <div className="variant-section">
            <div className="variant-header-row">
                <h4>WEIGHT & STOCK</h4>
            </div>
            <div className="variant-rows">
                {variantsList.map((v) => (
                    <div key={v.id} className="variant-row-grid racket-grid">
                        <div className="form-group mb-0">
                            <label className="sub-label">WEIGHT CLASS</label>
                            <div className="select-wrapper">
                                <select value={v.type} onChange={(e) => handleFieldChange(v.id, 'type', e.target.value)}>
                                    <option>3U (85-89g)</option>
                                    <option>4U (80-84g)</option>
                                    <option>5U (75-79g)</option>
                                </select>
                                <ChevronDown className="select-arrow" size={16} />
                            </div>
                        </div>
                        <div className="form-group mb-0">
                            <label className="sub-label">STOCK</label>
                            <input
                                type="number"
                                value={v.stock}
                                onChange={(e) => handleStockChange(v.id, e.target.value)}
                            />
                        </div>
                        <button className="delete-row-btn" onClick={() => handleDeleteVariant(v.id)}>
                            <Trash2 size={18} />
                        </button>
                    </div>
                ))}
            </div>
            <button className="btn-add-variant" onClick={handleAddVariant}>
                <Plus size={16} />
                <span>Add Weight Option</span>
            </button>
        </div>
    );

    const renderApparelVariants = () => (
        <div className="variant-section">
            <div className="variant-header-row">
                <h4>GENDER, SIZE & STOCK</h4>
            </div>
            <div className="variant-rows">
                {variantsList.map((v) => (
                    <div key={v.id} className="variant-row-grid apparel-grid">
                        <div className="form-group mb-0">
                            <label className="sub-label">GENDER</label>
                            <div className="select-wrapper">
                                <select value={v.gender} onChange={(e) => handleFieldChange(v.id, 'gender', e.target.value)}>
                                    <option>Men</option>
                                    <option>Women</option>
                                    <option>Unisex</option>
                                </select>
                                <ChevronDown className="select-arrow" size={16} />
                            </div>
                        </div>
                        <div className="form-group mb-0">
                            <label className="sub-label">SIZE</label>
                            <div className="select-wrapper">
                                <select value={v.size} onChange={(e) => handleFieldChange(v.id, 'size', e.target.value)}>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>
                                <ChevronDown className="select-arrow" size={16} />
                            </div>
                        </div>
                        <div className="form-group mb-0">
                            <label className="sub-label">STOCK</label>
                            <input
                                type="number"
                                value={v.stock}
                                onChange={(e) => handleStockChange(v.id, e.target.value)}
                            />
                        </div>
                        <button className="delete-row-btn" onClick={() => handleDeleteVariant(v.id)}>
                            <Trash2 size={18} />
                        </button>
                    </div>
                ))}
            </div>
            <button className="btn-add-variant" onClick={handleAddVariant}>
                <Plus size={16} />
                <span>Add Apparel Variant</span>
            </button>
        </div>
    );

    const renderShuttlecocksVariants = () => (
        <div className="variant-section">
            <div className="variant-header-row">
                <h4>SPEED & STOCK</h4>
            </div>
            <div className="shuttlecock-grid">
                {variantsList.map((v) => (
                    <div key={v.id} className="speed-card">
                        <label>{v.label}</label>
                        <input
                            type="number"
                            placeholder="Stock"
                            value={v.stock}
                            onChange={(e) => handleStockChange(v.id, e.target.value)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );

    const renderBagsVariants = () => (
        <div className="variant-section">
            <div className="variant-header-row">
                <h4>COLOR & STOCK</h4>
            </div>
            <div className="bags-variant-grid">
                {variantsList.map((v) => (
                    <div key={v.id} className="color-swatch-card">
                        <div className="color-info">
                            <div className="color-preview" style={{ backgroundColor: v.hex }}></div>
                            <div className="color-name">
                                <span>{v.color}</span>
                                <input
                                    type="number"
                                    value={v.stock}
                                    onChange={(e) => handleStockChange(v.id, e.target.value)}
                                />
                            </div>
                        </div>
                        <button className="delete-row-btn mini" onClick={() => handleDeleteVariant(v.id)}>
                            <X size={14} />
                        </button>
                    </div>
                ))}
            </div>
            <button className="btn-add-variant dashed-border" onClick={handleAddVariant}>
                <Plus size={16} />
                <span>Add Color Swatch</span>
            </button>
        </div>
    );

    const renderShoesVariants = () => (
        <div className="variant-section">
            <div className="variant-header-row">
                <h4>SIZE & STOCK MANAGEMENT</h4>
            </div>
            <div className="variant-rows">
                {variantsList.map((v) => (
                    <div key={v.id} className="variant-row-grid shoes-grid">
                        <div className="form-group mb-0">
                            <label className="sub-label">SIZE (EU)</label>
                            <input
                                type="number"
                                value={v.size}
                                onChange={(e) => handleFieldChange(v.id, 'size', e.target.value)}
                            />
                        </div>
                        <div className="form-group mb-0">
                            <label className="sub-label">STOCK QUANTITY</label>
                            <input
                                type="number"
                                value={v.stock}
                                onChange={(e) => handleStockChange(v.id, e.target.value)}
                            />
                        </div>
                        <button className="delete-row-btn" onClick={() => handleDeleteVariant(v.id)}>
                            <Trash2 size={18} />
                        </button>
                    </div>
                ))}
            </div>
            <button className="btn-add-variant dashed-border" onClick={handleAddVariant}>
                <Plus size={16} />
                <span>Add Size Row</span>
            </button>
        </div>
    );

    const getContent = () => {
        switch (category) {
            case 'Rackets': return renderRacketsVariants();
            case 'Apparel': return renderApparelVariants();
            case 'Shuttlecocks': return renderShuttlecocksVariants();
            case 'Bags': return renderBagsVariants();
            case 'Shoes': return renderShoesVariants();
            default: return (
                <div className="empty-variants">
                    <p>Please select a category to add variants</p>
                </div>
            );
        }
    };

    return (
        <div className="admin-card variant-card">
            <div className="card-header">
                <div className="header-left">
                    <div className="card-icon blue">💎</div>
                    <h3>Product Variants</h3>
                </div>
                <div className="header-right">
                    <span className="active-badge">ACTIVE: {category !== 'Select Category' ? category.toUpperCase() : 'NONE'}</span>
                    <button className="variant-settings-link">
                        <Settings size={14} />
                        <span>Variant Settings</span>
                    </button>
                </div>
            </div>
            <div className="card-body">
                {getContent()}
            </div>
        </div>
    );
};

export default ProductVariants;
