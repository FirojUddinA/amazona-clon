import React ,{ useEffect }from 'react';
import Product from "./Product";

import LoaddingBox from "./LoaddingBox";
import MessageBox from "./MessageBox";
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../store/actions/productActions";


const Home = () => {
    const dispatch = useDispatch()
    const productList = useSelector( (state) => state.productList);
    const { loading, error, products} = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, []);

    return (
        <>
            {
                loading ? (
                    <LoaddingBox />
                ) : error ? (
                    <MessageBox variant="error">{error}</MessageBox>
                ) : (
                    <div className="row center">
                        { products.map((product,index) => (

                                <Product product={product}  key={product._id}/>

                            )
                        )}
                    </div>
                )
            }

        </>
    );
};

export default Home;
