import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signout} from "../store/actions/userAction";

const Header = () => {

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart

    const user = useSelector(state=> state.user)
    const {userInfo} = user;
    console.log(userInfo);
    const dispatch = useDispatch();
    const signoutHandler = () =>{
        dispatch(signout());
    }

    return (
        <>
            <header className="row">
                <div className="brand">
                    <Link to="/" className="">AMAZONA</Link>
                </div>
                <div className="search"/>
                <div className="nav">
                    <Link to="/cart">Cart {cartItems.length >0 && (
                        <sup className="badge">{cartItems.length}</sup>
                    ) }</Link>
                    {
                        userInfo ? (

                                <div className="dropdown">
                                    <Link to="#">{userInfo.name} <i className="fa fa-caret-down" /></Link>

                                    <ul className="dropdown-content">
                                        <li>
                                            <Link to="#" onClick={signoutHandler} >Sign Out</Link>
                                        </li>
                                        <li>
                                            <Link to="#signout"  >Profile</Link>
                                        </li>
                                        <li>
                                            <Link to="#signout"  >Order</Link>
                                        </li>
                                    </ul>
                                </div>


                        ):(
                            <Link to="/signin">Sign In</Link>
                        )
                    }

                </div>

            </header>
        </>
    );
};

export default Header;
