import React from 'react'
import './CheckoutNext.css'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from '../reducer';
import { Link } from 'react-router-dom';

function CheckoutNext() {

    const [{ basket }, dispath] = useStateValue();

  return (
    <div className='check'>
        <div className='check_left'>
            <div>
                <div className="check_top">
                    <h2 className='check_title'>
                        Checkout ({basket.length} items)
                    </h2>
                </div>

                <div className="check_items">
                    <div className="check_itemsleft">
                        <h5>Review items and delivery</h5>
                    </div>
                    <div className="check_itemsright">
                        {basket.map( item => (
                            <CheckoutProduct 
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className="check_payment">
                    <div className="check_itemsleft">
                        <h5>Payment Method</h5>
                    </div>
                    <div className="check_paymentright">
                        <div className="checkpayment_top">
                            <CurrencyFormat 
                                renderText={(value) => (
                                    <>
                                        <p>
                                            <strong>Order total: {value}</strong>
                                        </p>
                                     </>
                                 )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'₹'}
                            />
                        </div>
                        
                        <Link to='/orders'>
                            <div className="checkpayment_bottom">
                                <button className='checkpayment_btn'>Buy now</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckoutNext