import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import {useDispatch } from 'react-redux'
import { addCart } from './redux/action/index'
import { Link } from 'react-router-dom'

const SingleProduct = () => {

    const { id } = useParams();
    const [loading, setloading] = useState(false);
    const [product1, setproduct1] = useState([]);

    const dispatch = useDispatch();

    const addProduct = (product1) => {
       dispatch(addCart({product1}));
     };

    const SingleCard = () => {
        return (
            <>
                <div className='container d-flex'>

                    <div className="col-md-6 mx-2">
                        <img src={product1.image}  alt={product1.title} height="400px" width="400px" />
                    </div>

                    <div className="col-md-6">
                        <div className="container my-3">
                            <div className="text-left p-2" height="200px" width="400px">
                                <div className="card-body " width="200px" height="200px">
                                    <h4 className="text-uppercase text-black-50">{product1.category}</h4>
                                    <h1 className='display-5 fw-bold' style={{color: "#031938"}}>{product1.title}</h1>
                                    <p className='lead'>Rating {product1.rating && product1.rating.rate}
                                        <i className='fa fa-star'> </i></p>
                                    <h3 className="card-title">${product1.price}</h3>

                                    <p className="card-text my-2">{product1.description}</p>

                                    <button className='btn btn-outline-dark px-4' onClick={() => addProduct(product1)}> Add to cart</button>

                                    <button className='btn btn-dark mx-2 px-3'> Add to wishlist</button>

                                    <Link type='button' className='btn btn-outline-dark px-4' to="/cart">Go to Cart</Link>

                                    {/* <Link type='button' className='btn btn-outline-dark px-4' to="/cart">Go to Cart</Link> onClick={() => addProduct(product1)}*/}


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        );
    };

    useEffect(() => {

        const getSingleProduct = async () => {

            const url = (`https://fakestoreapi.com/products/${id}`)
            setloading(true)
            let data = await fetch(url);
            let parsedData = await data.json()
            setproduct1(parsedData);
            console.log(parsedData)
            setloading(false)
        }
        getSingleProduct();
    }, []);

    return (
        <>
        <div>
            <div className='row col-12 mb-5'>
                <h1 className='fw-bolder text-center'>Selected Product</h1>
            </div>

            {loading ? <Loading /> : <SingleCard />}

        </div>
        </>
    );
};
export default SingleProduct;