import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Product from "./components/Product";
import SingleProduct from "./components/SingleProduct";
import Home from "./components/Home";
import Cart from "./components/Cart";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/> 
      <Route path="/products" element={<Product/>} />  
      <Route path="/products/:id" element={<SingleProduct/>} /> 
      <Route path="/cart" element={<Cart/>} />  
    </Routes>
    </BrowserRouter>

    </>
    
  );
}

export default App;
