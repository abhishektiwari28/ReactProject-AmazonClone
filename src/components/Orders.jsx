import React from 'react'
import { useStateValue } from '../StateProvider'
import './Orders.css'
import CheckoutProduct from './CheckoutProduct';

function Orders() {

    const [{ basket }, dispath] = useStateValue();

  return (
    <div className='order'>
        <div>
            <h2 className='order_title'>
                Your Orders ({basket.length} items)
            </h2>
        </div>

        <div className="order_bucket">
            <div className="order_info">
                <h2>Orders</h2>
            </div>

            <div className="order_items">
            {basket.map( item => (
                <div className='checkoutProduct'>
                    <img className='checkoutProduct_image' src={item.image} alt="" />
        
                    <div className="checkoutProduct_info">
                        <p className='checkoutProduct_title'>{item.title}</p>
                        <p className='checkoutProduct_price'>
                            <small>₹</small>
                            <strong>{item.price}</strong>
                        </p>
                        <div className="checkoutProduct_rating">
                            {Array(item.rating).fill().map((_, i) => (
                            <p>★</p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Orders