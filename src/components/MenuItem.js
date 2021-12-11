import React from 'react'

function MenuItem({name, image, desc, price}) {
    return (
        <div className='menuItem'>
            <div style={{backgroundImage:`url(${image})`}}> </div>
            <h1> {name} </h1>
            <h3>{desc}</h3>
            <p> ${price} </p>
            
        </div>
    )
}

export default MenuItem
