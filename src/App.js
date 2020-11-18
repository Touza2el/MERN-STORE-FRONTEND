import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.scss';

const App = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios(
        ' https://mern-store-app.herokuapp.com/api/products'
      );
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className='App'>
      <h1>THE MERN STORE</h1>
    </div>
  );
};

export default App;
