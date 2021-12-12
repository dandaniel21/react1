import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import "../styles/Cart.css";
import { useCart } from "react-use-cart";

function Cart() {
    const [openCart, setOpenCart] = useState(false);

    const toggleCart = () => {
        setOpenCart(!openCart);
    }

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
     } = useCart();

    return (
        <div className='cart' id={openCart?"open":"close"}>
            <button 
            className='cartToggle' 
            onClick={toggleCart}
            >
                <CloseIcon className='iconClose'/>
                <div>
                    <ShoppingCartIcon className='iconCart'/><div className='count'>{totalItems}</div>
                </div>
                
            </button>
            <div className='cartBox'>
                <h1 className='cartHeader'><ShoppingCartIcon/></h1>
                <p className='cartTitle'>Cart ({totalUniqueItems}) total Items: ({totalItems})</p>
                <div className='countItem' id={isEmpty?"empty":"notEmpty"}>
                    <p className='emptyCart'>Your Cart is Empty</p>
                    <div className='notEmptyCart'>                   
                        {items.map((item, key) => {
                            return (
                            <div className='itemCartContainer' key={key}>
                                <ul className='listCart'>
                                    <li>{item.name}</li>
                                    <li>Item : {item.quantity} x ${item.price}</li>
                                    <li>Total : ${item.itemTotal}</li>
                                </ul>
                                <ul className='btnCart'>
                                    <button onClick={()=>updateItemQuantity(item.id, item.quantity - 1)}><RemoveIcon/></button>
                                    <button onClick={()=>updateItemQuantity(item.id, item.quantity + 1)}><AddIcon/></button>
                                    <button onClick={()=>removeItem(item.id)}><DeleteIcon/></button>
                                </ul>                                
                            </div>                      
                            )
                        })}
                    </div>                    
                    <div className='totalCartContainer'>
                        <div className='line'></div>
                        <div className='grandTotal'>
                            <p className='totalText'>Grand Total : </p>
                            <p className='totalNum'>${cartTotal}</p>
                        </div>
                        <div className='btnGrandTotal'>
                            <button className='btnRemove' onClick={()=>emptyCart()}>Remove All</button>
                            <button className='btnBuy'>Buy Now</button>
                        </div>                                              
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;
