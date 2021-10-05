import React from 'react';
import '../styles/MenuItems.css';

function MenuItem(props) {
    return (
        <div className="menuItem">
            <img src={props.image} />
            <div className="info">

            <h3>{props.itemName}</h3>
            <b>${props.price}</b>
            </div>
        </div>
    )
}

export default MenuItem
