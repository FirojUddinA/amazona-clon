import React,{useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "../store/actions/cartActions";
import {Link} from "react-router-dom";
import MessageBox from "./MessageBox";

const CartPage = (props) => {

    const productId = props.match.params.id;
    const qty = props.location.search ?
        Number(props.location.search.split('=')[1]) : 1;
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();


    useEffect(() => {
        if (productId){
            dispatch(addToCart(productId,qty));
        }
    }, [dispatch,productId,qty]);

    const deleteFromCart=( id ) =>{
        dispatch(removeFromCart(id))
    }

    const checkOutHandler=( ) =>{
        props.history.push('/signin?redirect=shipping');
    }
    return (


        <>
            <h2>Shoping Cart</h2>

            <div className="row top ">
<div className="col-2" style={{padding : '10px' ,}}>
    {
        cartItems.length ===0 ?
            <MessageBox>Cart is empty</MessageBox> :
            (
                <ul>
                    {
                        cartItems.map(item => (
                        <li key={item.product} >
                            <div className="cart-item">
                                <div>
                                    <img src={item.image}
                                         alt={item.name}
                                         className="image-small"/>
                                </div>
                                <div>
                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                </div>
                                <div>
                                    <select value={item.qty}
                                             onChange={(e) =>
                                                 dispatch(addToCart(item.product ,
                                                     Number(e.target.value)))}
                                >
                                    {
                                        [...Array(item.countInStock).keys()].map(x => (
                                            <option key={x+1} value={x+1}>{x+1}</option>
                                        ))
                                    }
                                </select></div>
                                <div><p>${item.price}</p></div>
                                <div>
                                    <button onClick={() => deleteFromCart(item.product)}>Delete</button>
                                </div>




                            </div>
                        </li>
                    ))}
                </ul>
            )
    }

</div>
                <div className="col-1" style={{padding : '10px' ,}} >
                    <div className="card card-body" >
                        <ul>
                            <li>
                                <h2>Subtotal ({cartItems.reduce((a, c) => a+ c.qty,0)}):
                                    ${cartItems.reduce((a,c)=> a+ c.price*c.qty, 0)}</h2>
                            </li>
                            <li>
                                <button type={"button"}
                                        onClick={checkOutHandler}
                                        className={"primary block"}
                                        disabled={cartItems.length===0}
                                >Check Out</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartPage;
