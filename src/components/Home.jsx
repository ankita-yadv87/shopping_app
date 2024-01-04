import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='my_home'>
      <div className='content'>
        <h1>Welcome to Our Online Store</h1>
        <p>Discover the latest trends and shop a wide range of products for the whole family.</p>
        <p>Explore our collection of Clothing for Men and Women, Kids' Fashion, Stylish Accessories</p>
        <p>Find the perfect style that suits you. Happy shopping!</p>
         
          <Link to="/products" type='button' className='my_button'>View Products</Link>
    
       
        
      </div>
    </div>
  );
};

export default Home;
