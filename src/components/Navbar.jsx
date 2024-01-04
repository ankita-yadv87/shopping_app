import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Badge from '@mui/material/Badge';


const Navbar = () => {

  const state = useSelector((state) => state.handleCart.ttt);
  console.log(state);

  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark  " style={{ height: "70px" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">ShopMart</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
          </ul>
          {/* <Link to="/cart" className='btn btn-outline-dark ms-2'>
          <i className="fa fa-shopping-cart">Cart({state.length})</i>
        </Link> */}

          <Link to="/cart">
          <Badge badgeContent={state.length} color="primary" className="mx-4" >
          <i className="fa-solid fa-cart-shopping text-light p-2 " style={{ fontSize: 25, cursor: "pointer" }} ></i>
        </Badge>
        </Link>

        
      </div>
    </div>
</nav >
  )
}

export default Navbar