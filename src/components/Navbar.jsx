import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import './home.css';

const Navbar = () => {
  const state = useSelector((state) => state.handleCart.ttt);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ height: "70px" }}>
      <div className=" d-flex justify-content-between align-items-center">
        <div className="navbarList">
          <Link className="navbar-brand navbarList" to="/">ShopMart</Link>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav justify-content-around align-items-center w-100">
            <li className="nav-item navbarList">
              <Link className="nav-link my_text" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item navbarList">
              <Link className="nav-link my_text" to="/products">Products</Link>
            </li>
          </ul>

          <Link to="/cart">
            <Badge badgeContent={state.length} color="primary" className="mx-4">
              <i className="fa-solid fa-cart-shopping text-light p-2 " style={{ fontSize: 25, cursor: "pointer" }} ></i>
            </Badge>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
