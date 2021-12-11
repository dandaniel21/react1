import React from 'react'
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
    return (
        <div className='menu'>
            <h1 className='menuTitle'>Our Pizza</h1>
            <div className='menuList' id="fade">{MenuList.map((menuItem, key) => {
                return (
                <MenuItem 
                key={key}
                image={menuItem.image} 
                name={menuItem.name} 
                desc={menuItem.desc}
                price={menuItem.price}
                />
                );
            })}
            </div>
        </div>
    )
}
export default Menu;
