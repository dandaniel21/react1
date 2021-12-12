import React from 'react'
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import Cart from '../components/Cart';

function Menu() {
    return (
        <div className='menu'>
            <div className='cartContainer'>
                <Cart/>
            </div>
            <h1 className='menuTitle'>Our Pizza</h1>
            <div className='menuList' id="fade">{MenuList.map((menuItem, key) => {
                return (
                <MenuItem 
                key={key}
                image={menuItem.image} 
                name={menuItem.name} 
                desc={menuItem.desc}
                price={menuItem.price}
                item={menuItem}
                />
                );
            })}
            </div>
        </div>
    )
}
export default Menu;
