import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Shop() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://jsonplaceholder.typicode.com/posts'
        );
        const items = await data.json();
        // console.log(items);
        setItems(items)
    };

    return (
        <div>
            <h1>Here You can see all the different posts made by users</h1>
            <h2>Click on the post to see more details!</h2>
            {items.map(item => (
                <h3 key={item.id}>
                    <Link to={`/shop/${item.id}`}>{item.title}</Link>
                </h3>
            ))}
        </div>
    );
}

export default Shop;
