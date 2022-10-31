import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <NavLink to="/">Take me Home</NavLink>
            <NavLink to="/counter">Take me to counter page</NavLink>
        </div>
    )
}

export default Home;