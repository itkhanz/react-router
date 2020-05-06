import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    return (
        <nav>
            <Link to="/" style={navStyle}>
                <h3>Home</h3>
            </Link>
            <ul className="nav-links">
                <Link to="/about" style={navStyle}>
                    <li>About</li>
                </Link>
                <Link to="/shop" style={navStyle}>
                    <li>Posts</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
