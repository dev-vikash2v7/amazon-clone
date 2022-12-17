import {Link} from 'react-router-dom'
import Subtotal from './Subtotal.js'
import './styles/Checkout.css'
import CheckOutProduct from './CheckOutProduct.js'

import useStateValue from '../StateProvider'
// import {auth} from '../firebase-auth'

function Checkout() {

    const [{   basket , user}, ] = useStateValue();

    // console.log(user.email)



    return (
        <div className='checkout'>

            <div className='checkout__leftside'>

                <Link to='/'>
                    <img className='checkout__ad' src='images/ad.jpg' alt='ad'/>
                </Link>

<h3 style={{color : 'blue'}}>Hello {user?.email}</h3>

                <h1 className='checkout__title'>Your Shoppig Basket
                </h1>

                <div className='checkout__items'>

                    {
                    basket.map(product => (
                        <CheckOutProduct  product = {product}/>
                    ))
                } 
                </div>


            </div>

            <div className='checkout__rightside'>
                <Subtotal/>
            </div>


        </div>
    )
}

export default Checkout
