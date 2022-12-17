import Product from './Product'

import './styles/Home.css'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>


                <img src='images/home.jpg' alt='home' className='home__image'/>

                <div className='home__row'>

                    <Product 
                    id = {1}
                    title="Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED"
                        price={999.99}
                        rating={5}
                        imgUrl='samsung-led.webp'/>

                    <Product 
                    id = {2}
                    title="Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin"
                        price={599}
                        rating={4}
                        imgUrl='acer-led.webp'/>
                </div>

                <div className='home__row'>

                    <Product 
                    id = {3}
                    title="Mens Cotton Jacket"
                        price={55.99}
                        rating={4}
                        imgUrl='mens-jacket.webp'/>

                    <Product 
                    id = {4}
                    title="Mens Casual Premium Slim Fit T-Shirts"
                        price={22.3}
                        rating={3}
                        imgUrl='mens-tshirt.webp'/>

                    <Product 
                    id = {5}
                    title="Mens Casual Slim Fit"
                        price={30}
                        rating={4}
                        imgUrl='casual.webp'/>
                </div>

                <div className='home__row'>


                    <Product 
                    id = {6}
                    title="WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive"
                        price={114}
                        rating={5}
                        imgUrl='power-bank.webp'/>
                </div>

            </div>
        </div>
    )
}

export default Home
