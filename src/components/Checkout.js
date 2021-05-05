import React from 'react';
import './Header.css';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className="checkout">
        
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

                {basket?.length === 0 ? (
                    <div>
                        <h1>Your Shopping Cart is empty</h1>
                        <p>You have no items in your basket. 
                        To buy one or more items, click "Add to Basket" next to the item.</p>
                    </div>
                ): (
                    <div>
                        <h2 className="checkout__title">Your Shopping Cart</h2>
                        {basket?.map((item) => {
                            return (
                                <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                />
                            );
                        })}
                        
                    </div>
                )}
            </div>
            {/* Show if and only if Cart has items */}
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    );
}

export default Checkout
