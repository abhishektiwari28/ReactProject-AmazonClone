import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
        <div className="home_container">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
        
            <div className="home_row">
                <Product
                id="12321341"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.SX325_BO1,204,203,200.jpg"
                />

                <Product
                id="49538094"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                price={239.0}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL.AC_SX450.jpg"
                />
            </div>

            <div className="home_row">
                <Product
                id="4903850"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                price={199.99}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL.AC_SX466.jpg"
                />

                <Product
                id="23445930"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={98.99}
                rating={5}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />

                <Product
                id="3254354345"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={598.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385.jpg"
                />
            </div>

            <div className="home_row">
                <Product
                id="90829332"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                price={1094.98}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L.AC_SX355.jpg"
                />

                <Product 
                id="90354423"
                title="LG 242 L 3 Star Smart Inverter Frost-Free Double Door Refrigerator (GL-I292RPZX, Shiny Steel, Door Cooling+)"
                price={25990}
                rating={4}
                image="https://m.media-amazon.com/images/I/61+pdg8CfmL._AC_UL480_FMwebp_QL65_.jpg"
                />
            </div>

            <div className="home_row">
                <Product 
                id="90354985"
                title="LG 8 Kg 5 Star Inverter Direct Drive Touch Panel Fully Automatic Front Load Washing Machine"
                price={34990}
                rating={4}
                image="https://m.media-amazon.com/images/I/71cDdw7Vk7L._AC_UL480_FMwebp_QL65_.jpg"
                />

                <Product 
                id="90354326"
                title="Comforto Hybrid Mattress | Single Size Mattress | Pocket Spring with Orthopedic Memory"
                price={10832}
                rating={4}
                image="https://m.media-amazon.com/images/I/81ratqQtFfL._SY450_.jpg"
                />

                <Product 
                id="90354875"
                title="OnePlus 11R 5G (Sonic Black, 8GB RAM, 128GB Storage)"
                price={35999}
                rating={4}
                image="https://m.media-amazon.com/images/I/41PMrVjsowL._SX300_SY300_QL70_FMwebp_.jpg"
                />
            </div>
        </div>
    </div>
  )
}

export default Home