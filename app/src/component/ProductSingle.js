import React, {useEffect, useState} from 'react';
import Ratting from "./Ratting";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import LoaddingBox from "./LoaddingBox";
import MessageBox from "./MessageBox";
import {detailsProduct} from "../store/actions/productActions";
const ProductSingle = (props) => {
    const dispatch = useDispatch();
    const productDetails = useSelector((state)=>state.productDetails);
    const productId = props.match.params.id;
    const {error, loading, product} = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));


    }, [dispatch, productId]);

    const [qty, setQty] = useState(1);
    console.log(qty)
    const addToCartHandler= () =>{
        props.history.push(`/cart/${productId}?qty=${qty}`);

    }

    return (
        <>
            {
                loading ? (
                    <LoaddingBox />
                ) : error ? (
                    <MessageBox variant="error">{error}</MessageBox>
                ) : (
                    <div>
                        <Link to="/" >Back to result</Link>
                        <div className="row top">
                            <div className="col-2">
                                <img src={product.image} alt={product.name } className={"large"}/>
                            </div>
                            <div className="col-1">
                                <ul>
                                    <li>
                                        <h1>{product.name}</h1>

                                    </li>
                                    <li>
                                        <Ratting rating={product.rating} numReviews={product.numReviews} />

                                    </li>
                                    <li>
                                        <p>Price : $ {product.price}</p>
                                    </li>
                                    <li>
                                        <p>Description : {product.description}</p>
                                    </li>
                                </ul>




                            </div>
                            <div className="col-1">
                                <div className="card card-body">
                                    <ul>
                                        <li>
                                            <div className="row">
                                                <div>Price</div>
                                                <div className="price">${product.price}</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row">
                                                <div>
                                                    Status
                                                </div>
                                                <div>
                                                    {
                                                        product.countInStock > 0 ? <span className="success">In Stock</span>
                                                            : <span className={"error"}>Unavailable</span>
                                                    }
                                                </div>
                                            </div>
                                        </li>
                                        {
                                            product.countInStock > 0 && (
                                                <>
                                                <li>
                                                    <div className="row">
                                                        <div>Qty</div>
                                                        <div>
                                                            <select value={qty}
                                                                onChange={(e) => setQty(e.target.value)}
                                                            >
                                                                {
                                                                    [...Array(product.countInStock).keys()].map(x => (
                                                                        <option key={x+1} value={x+1}>{x+1}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <button onClick={addToCartHandler} className="btn primary block">Add to Cart</button>
                                                </li>
                                                </>

                                            )
                                        }

                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>
                )
            }



        </>
    );
};

export default ProductSingle;
