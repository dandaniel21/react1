import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from 'react-use-cart';

function MenuItem({name, image, desc, price, item}) {
    const { addItem } = useCart();

    return (
        <div className='menuItem'>
            <div style={{backgroundImage:`url(${image})`}}> </div>
            <h1>{name}</h1>
            <h3>{desc}</h3>
            <div className='price'>
                <p>${price}</p>
                <button onClick={()=>addItem(item)}>Add to <ShoppingCartIcon/></button>
            </div>                       
        </div>
    )
}

export default MenuItem
