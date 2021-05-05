import React from 'react';
import "./Header.css";
import { useStateValue } from '../StateProvider';

const Product = ({id, title, image, price, rating}) => {
    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }
    return (
        <div className="product">
            
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_) => <p>★</p>)
                    }
                </div>
            </div>
            
            <img src={image} alt="product item" />
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
