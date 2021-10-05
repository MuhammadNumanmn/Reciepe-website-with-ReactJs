import React from 'react';
import {Link} from 'react-router-dom';
import { MenuList } from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css';

function Menu() {
    return (
        <div className="menu">
            <h1>Menu List</h1>
            <div className="menuList">
            {
                MenuList.map((item, key)=>{
                     return <MenuItem image={item.img} price={item.price} itemName={item.name} key={key}/>
                })
            }
            </div>
        </div>
    )
}

export default Menu
