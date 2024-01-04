import React from 'react'
import shoppy from "./shoppy.gif";
import { useDispatch, useSelector } from "react-redux";
import { delCart } from './redux/action/index'
import { Link } from 'react-router-dom';

const Cart = () => {

  const getdata = useSelector((state) => state.handleCart.ttt);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(delCart(e));
  }

  return (
    <>
      {
        getdata.length ?
          <div className='justify-content-center my-5'width="200" height="400">
            {
              getdata.map((element) => {
                return (
                  <>

                    <div className='container d-flex my-5 ' style={{border: "solid"}} height="400" width ="100">

                      <div className="mx-3 p-6">
                        <img src={element.product1.image} alt={element.product1.title} height="400rem" width="400rem" />
                      </div>

                      <div className="col-md-6">
                        <div className="container my-3">
                          <div className="text-left p-3" height="200px" width="400px">
                            <div className="card-body " width="200px" height="200px">
                              <h4 className="text-uppercase text-black-50">{element.product1.category}</h4>
                              <h1 className='display-5 fw-bold' style={{ color: "#031938" }}>{element.product1.title}</h1>
                              <p className='lead'>Rating {element.product1.rating && element.product1.rating.rate}
                                <i className='fa fa-star'> </i></p>
                              <h3 className="card-title">${element.product1.price}</h3>
                              <p className="card-text my-2">{element.product1.description}</p>
                              
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </>
                )
              })
            }
            <p className='text-center fw-bold'>Total :₹ 2000</p>

          </div>
          :
          <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
            <i className='fas fa-close smallclose'
              style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }} ></i>
            <p style={{ fontSize: 22 }}>Your cart is empty</p>
            <img src={shoppy} alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
          </div>
      }
    </>
  )

}

export default Cart;