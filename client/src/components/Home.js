import React from "react";
import pic1 from './1.jpg';
import pic2 from './2.jpg';
import pic3 from './3.jpg';
import pic4 from './4.jpg';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Mullen Group LLC</h1>
           
                <div className='picBox'>
                    <img src={pic1}/>
                    <img src={pic2}/>
                    <img src={pic3}/>
                    <img src={pic4}/>
                </div>
                <div className='loginBox'>
                    <Link to='/signup'>
                        Sign Up
                    </Link>
                    <Link to='/login'>
                        Login
                    </Link>
                </div>
        </div>
    )
}

export default Home;