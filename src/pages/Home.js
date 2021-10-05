import React from 'react'
import {Link} from 'react-router-dom';
import BannerImage from '../assets/pizza.jpeg'
import '../styles/Home.css'

const Home = () =>{
    return (
        <div className="home">
            <h2>Pedora's Pizzaira</h2>
            <p>somhfjsahdjf ajfhdjhsa sdfhjds bfdhs</p>
            <button>
                <Link to="/menu">Order Now</Link>
            </button>
        </div>
    )
}

export default Home;
