import React, { useEffect, useState } from 'react';
import styles from '../styles/Checkout.module.css';
import { LoadingIcon } from '../Icons';
import { getProducts } from '../sevices/dataService';
import Product from './Product';
import { ProductProps } from '../types/Types';

const Checkout: React.FC = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getProducts().then(data => {
      const productsWithQuantity = data.map(product => ({
        ...product,
        orderedQuantity: 0,
        onAdd: () => handleAdd(product.id),
        onRemove: () => handleDelete(product.id)
      }));
      setProducts(productsWithQuantity);
      setLoading(false);
    });
  }, []);

  const handleAdd = (id: number) => {
    setProducts(products => 
      products.map(product =>
        product.id === id ? { ...product, orderedQuantity: product.orderedQuantity + 1 } : product
      )
    );
  };

  const handleDelete = (id: number) => {
    setProducts(products => 
      products.map(product =>
        product.id === id ? { ...product, orderedQuantity: product.orderedQuantity - 1 } : product
      )
    );
  };

  useEffect(() => {
    const subtotal = products.reduce((acc, product) => acc + product.orderedQuantity * product.price, 0);
    const calculatedDiscount = subtotal > 1000 ? subtotal * 0.1 : 0;
    const calculatedTotal = subtotal - calculatedDiscount;

    setDiscount(calculatedDiscount);
    setTotal(calculatedTotal);
  }, [products]);

  return (
    <div>
      <header className={styles.header}>        
        <h1>Electro World</h1>        
      </header>
      <main>
        {loading && <LoadingIcon />}        
        {!loading && (
          <>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th># Available</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <Product
                    key={product.id}
                    {...product}
                  />
                ))}
              </tbody>
            </table>
            <h2>Order summary</h2>
            <p>Discount: ${discount.toFixed(2)}</p>
            <p>Total: ${total.toFixed(2)}</p>       
          </>
        )}
      </main>
    </div>
  );
};

export default Checkout;