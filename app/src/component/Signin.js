import React,{useState ,useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signin} from "../store/actions/userAction";
import LoddingBox from "./LoaddingBox";
import MessageBox from "./MessageBox";

const Signin = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/';
   const dispatch = useDispatch();
   const user = useSelector(state => state.user);
   const {userInfo, loading, error} = user;


    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(signin(email,password));
    }

    useEffect(() => {

        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);

    return (

        <>
            {/*{loading && <LoddingBox/>}*/}
            {/*{error && <MessageBox variant="danger">{error}</MessageBox>}*/}
            <div>
                <form className="loginForm form" onSubmit={submitHandler}>

                    <div>
                        <h1>Sign In</h1>
                    </div>
                    <div>
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" placeholder={"Enter Email"} required
                            onChange={event => setEmail(event.target.value)}
                               value={email}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder={"Enter Password"} required
                            onChange={event => setPassword(event.target.value)}
                               value={password}
                        />
                    </div>

                    <div>
                        <label />
                        <button type="submit" className="primary">Sign In</button>
                    </div>
                    <div>
                        <label />
                        <p>New customer? {' '}
                            <Link to={"/register"} >Create New Account</Link>
                        </p>
                    </div>

                </form>
            </div>
        </>
    );
};

export default Signin;
