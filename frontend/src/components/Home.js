import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to Awesome Auth System</h1>
            <div className="home-buttons">
                <Link to="/register" className="home-button">Register</Link>
                <Link to="/login" className="home-button">Login</Link>
            </div>
        </div>
    );
};

export default Home;
