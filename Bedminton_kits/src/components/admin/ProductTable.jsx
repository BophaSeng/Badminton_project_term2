import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = ({ products, onDelete }) => {
  return (
    <div className="table-container">
      <table className="products-table">
        <thead>
          <tr>
            <th>IMAGE</th>
            <th>PRODUCT NAME</th>
            <th>SKU</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
            <th>STOCK LEVEL</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <ProductRow key={index} {...product} onDelete={() => onDelete(product.id)} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
