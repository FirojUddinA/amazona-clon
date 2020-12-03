import React from 'react';
import Ratting from "./Ratting";
import {Link} from "react-router-dom";



const Product = ({product}) => {
    return (
        <>
            <div className="card">
                <Link to={`/product/${product._id}`}>
                    <img className="medium" src={product.image} alt="product" />
                </Link>
                <div className="card-body">
                    <Link to={`/product/${product._id}/`}>
                        <h2>{product.name}</h2>
                    </Link>
                    <Ratting rating={product.rating} numReviews={product.numReviews} />

                    <p className="price">${product.price}</p>

                </div>
            </div>
        </>
    );
};

export default Product;
