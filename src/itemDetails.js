import React, { useState, useEffect } from 'react';

function ItemDetail({ match }) {
    useEffect(() => {
        // console.log(match)
        fetchItem();
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`);
        const item = await fetchItem.json();

        // console.log(item);
        setItem(item);
    }

    const itemStyle = {
        marginTop: '35px',
        width: '50%',
        paddingLeft: '25%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        textDecoration: 'none',
    };

    return (
        <div style={itemStyle}>
            <p><i>It might take some time for API to fetch the details, please wait for a while</i></p>
            <h1>Title: {item.title}</h1>
            <h2>ID: {item.id}</h2>
            <h2>UserID: {item.userId}</h2>
            <h3>Body: {item.body}</h3>
        </div>
    );
}

export default ItemDetail;
