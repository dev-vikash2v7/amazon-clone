import './styles/Header.css'
import {Search, ShoppingBasket} from '@material-ui/icons'
import {IconButton} from '@material-ui/core'
import {Link} from 'react-router-dom';
import useStateValue from '../StateProvider'
import { auth } from '../firebase-auth';

function Header() {


    const [{  basket , user   },  ] = useStateValue();

    function handleAuth(){
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className='header'>

            <Link to="/">
                <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' className='header__logo'/>
            </Link>

            <div className='header__search'>
                <input className='header__searchInput' placeholder='search...'/>
                <Search className="header__searchIcon"/>
            </div>

            <div className='header__nav'>

                    <div className='header__option'>
                        <span>Hello { user ? user.email: "Guest"}</span>


                {/* <Link to={ user ? "/": "/login"}> */}
                <Link to={ !user && "/login"}>
                        <span className='header__option_link' onClick={handleAuth}>  { user ? "Sign Out": "Sign In"}</span>
                </Link>
                    </div>

                <div className='header__option'>
                    <span>Returs</span>
                    <span className='header__option_link'>
                        &amp; Orders</span>
                </div>

                <div className='header__option'>
                    <span>Your</span>
                    <span className='header__option_link'>
                        Prime</span>
                </div>

                <div className='header__option_basket'>

                    <IconButton component={Link}
                        to="/checkout">
                        <ShoppingBasket color='primary'/>
                    </IconButton>

                    <span className='header__option_basketCount'>
                        {
                        basket.length
                    }</span>

                </div>

            </div>

        </div>
    )
}

export default Header
