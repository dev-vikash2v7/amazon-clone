import Product from './Product'

import './styles/Home.css'

import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const SlidShow = () => {
    const slideImages = [
        {
            url: 'images/home.jpg',
        }, {
            url: 'images/ad.jpg',
        }, {
            url: 'images/amazon_logo.png',
        },
    ];


    return (
        <Slide> {
            slideImages.map((slideImage, index) => (
                <div className="each-slide"
                    key={index}>
                    <img
                    className='home__image'
                     src={
                            slideImage.url
                        }
                        alt={
                            slideImage.url
                        }/>
                   
                </div>
            ))
        } </Slide>
    );
};


function Home() {


    return (
        <div className='home'>

            <div className="slide-container">
                <SlidShow/>
            </div>


          <div className='home__container'> 

                <div className='home__row'>

                    <Product 
                    id = {1}
                    title="Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED"
                        price={9999}
                        rating={5}
                        imgUrl='samsung-led.webp'/>

                    <Product 
                    id = {2}
                    title="Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin"
                        price={5999}
                        rating={4}
                        imgUrl='acer-led.webp'/>
                </div>

                <div className='home__row'>

                    <Product 
                    id = {3}
                    title="Mens Cotton Jacket"
                        price={559}
                        rating={4}
                        imgUrl='mens-jacket.webp'/>

                    <Product 
                    id = {4}
                    title="Mens Casual Premium Slim Fit T-Shirts"
                        price={223}
                        rating={3}
                        imgUrl='mens-tshirt.webp'/>

                    <Product 
                    id = {5}
                    title="Mens Casual Slim Fit"
                        price={300}
                        rating={4}
                        imgUrl='casual.webp'/>
                </div>

                <div className='home__row'>


                    <Product 
                    id = {6}
                    title="WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive"
                        price={1144}
                        rating={5}
                        imgUrl='power-bank.webp'/>
                </div>

            </div> 
            </div> 
    )
}

export default Home
