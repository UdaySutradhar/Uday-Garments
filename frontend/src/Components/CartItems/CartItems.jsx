import React, { useContext } from 'react'
import'./CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
const CartItems = () => {
    const {all_product,cartitems,removefromcart} = useContext(ShopContext)
    return(
        <div className='cartitems'>
            <div className="cartitemformat-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
        </div>
    )
}

export default CartItems