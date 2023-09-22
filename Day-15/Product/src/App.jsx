import React from 'react';
import Navbar from './Components/Navbar';
import './index.css';
import ProductImage from './Components/ProductImage';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <>
    <nav>
      <Navbar/>
    </nav>
    <main className='main-container'>
      <ProductImage/>
      <ProductDetails/>
    </main>
    </>
  );
}

export default App;
