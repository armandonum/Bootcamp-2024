import React from 'react';
import styles from '../styles/Checkout.module.css';

type ProductProps = {
  id: number;
  name: string;
  availableCount: number;
  price: number;
  orderedQuantity: number;
  onAdd: () => void;
  onRemove: () => void;
};

const Product: React.FC<ProductProps> = ({ id, name, availableCount, price, orderedQuantity, onAdd, onRemove }) => {
  const total = (price * orderedQuantity).toFixed(2);

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{availableCount}</td>
      <td>${price.toFixed(2)}</td>
      <td>{orderedQuantity}</td>   
      <td>${total}</td>
      <td>
        <button 
          className={styles.actionButton} 
          onClick={onAdd} 
          disabled={orderedQuantity >= availableCount}
        >
          +
        </button>
        <button 
          className={styles.actionButton} 
          onClick={onRemove} 
          disabled={orderedQuantity <= 0}
        >
          -
        </button>
      </td>
    </tr>    
  );
}

export default Product;