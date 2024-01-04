import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import { Link } from 'react-router-dom';
import axios from 'axios';


const Products = () => {

    const [copydata, setcopydata] = useState([])
    const [response, setresponse] = useState([copydata])
    const [loading, setloading] = useState(false);
   // let componentMounted = true;


    useEffect(() => {
        // const getProducts = async () => {
        //     setloading(true);
        //     const data = await fetch("https://fakestoreapi.com/products");
        //     if (componentMounted) {
        //         setcopydata(await data.clone().json());
        //         setresponse(await data.json());
        //         setloading(false);
        //         console.log(response);
        //     }
        //     return () => {
        //         componentMounted = false;
        //     }
        // }
        // getProducts();

        setloading(true);
        axios({
            method : "GET",
            url: "https://fakestoreapi.com/products",
        })
        .then((res)=>{
            console.log(res.data);
            setcopydata(res.data);
            setresponse(res.data);
        })
        .catch((e)=>console.log(e))
        .finally(()=> setloading(false));
    }, []);

    const filterProduct = (cat) => {
        const updateList = copydata.filter((x) => x.category === cat)
        setresponse(updateList);
    };

    const ShowMenu = () => {

        return (
            <>
                <div className='buttons container text-center'>
                    <button className='btn btn-warning me-2' onClick={() => setresponse(copydata)}>All</button>
                    <button className='btn btn-warning me-2' onClick={() => { filterProduct("men's clothing") }}>Mens Clothing</button>
                    <button className='btn btn-warning me-2' onClick={() => { filterProduct("women's clothing") }}>Womens Clothing</button>
                    <button className='btn btn-warning me-2' onClick={() => { filterProduct("jewelery") }}>Jwellery </button>
                    <button className='btn btn-warning me-2' onClick={() => { filterProduct("electronics") }}>Electronics </button>
                </div>
            </>
        );
    };

    const ShowProducts = () => {
        return (

            <div className="row my-4 p-4"  >

                {response.map((element) => {
                    return (
                        <>
                            <div className="container col-md-3 my-3 p-4" key={element.id}>
                                <div className="card p-3"  >
                                    <img src={element.image} className="card-img-top" alt="" height={200} width={100}/>

                                    <div className="card-body text-align left " >
                                        <h5 className="card-title fw-bold mb-4">{element.title}</h5>
                                        <h4 className="card-title fw-bold">${element.price}</h4>
                                        {/* <p className="card-text">{element.description}</p> */}
                                        <Link to={`/products/${element.id}`} className="btn btn-sm btn-primary">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )

                })};
            </div>
        );
    };


    return (
        <>
            <div>

                <div className='row col-12 mb-3'>
                    <h1 className='fw-bolder text-center'>Latest Products</h1>
                </div>


                {loading ? <Loading /> :
                    <div>
                        <ShowMenu />
                        <ShowProducts />
                    </div>
                }


            </div>


        </>
    );
};

export default Products