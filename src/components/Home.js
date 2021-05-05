import React from 'react';
import './Header.css';
import Product from './Product'

const Home = () => {
    return (
        <div className="home">
            <img className="home__image" src="/images/banner.jpg" alt="" />

            <div className="home__row">
                <Product id="12323792379" 
                title="This is an example of my long and very lenghty product description" 
                price={11.98} 
                rating={3}
                image="/images/product-01.png" />

                <Product id="1234123123" 
                title="This is an example of my long and very lenghty product description" 
                price={11.98} 
                rating={3}
                image="/images/product-02.png" />
            </div>

            {/* {Three row columns} */}
            <div className="home__row">
                <Product id="1234512379" 
                title="This is an example of my long and very lenghty product description" 
                price={11.98} 
                rating={3}
                image="/images/product-03.png" />

                <Product id="123456" 
                title="This is an example of my long and very lenghty product description" 
                price={11.98} 
                rating={3}
                image="/images/product-04.png" />

                <Product id="12345671" 
                title="This is an example of my long and very lenghty product description" 
                price={11.98} 
                rating={3}
                image="/images/product-05.png" />
            </div>

            {/* {Four row columns} */}
            <div className="home__row">
                <Product id="123456783" 
                title="This is an example of my long and very lenghty product description" 
                price={11.98} 
                rating={3}
                image="/images/product-06.png" />

                <Product id="2345678123" 
                title="This is an example of my long and very lenghty product description" 
                price={11.98} 
                rating={3}
                image="/images/product-07.png" />

                <Product id="345678123" 
                title="This is an example of my long and very lenghty product description" 
                price={11.98} 
                rating={3}
                image="/images/product-08.png" />

                <Product id="45678123" 
                title="This is an example of my long and very lenghty product description" 
                price={11.98} 
                rating={3}
                image="/images/product-09.png" />
            </div>

        </div>
    )
}

export default Home
