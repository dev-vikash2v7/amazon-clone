import Header from './Sections/Header.js';
import Home from './Sections/Home.js';
import Checkout from './Sections/Checkout.js'
import Footer from './Sections/Footer.js'
import Login from './Sections/Login.js';

import {Fragment} from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useEffect} from 'react';
import {auth} from './firebase-auth.js';

import useStateValue from './StateProvider.js';

import './App.css'

function App() {

    const [ , dispatch] = useStateValue()

    useEffect( () => { 
        // will only run once when app loads
            auth.onAuthStateChanged(authUser => {
                console.log('the user is >>>> ', authUser)

                dispatch({
                    type : 'SET_USER' ,
                    user : authUser  ? authUser : null
                })
            })



        },[])


    return (
        <Router>
            <div className='app'>

                <Routes>

                    <Route path='/'
                        element={
                            <Fragment><Header/><Home/><Footer/></Fragment>
                        }/>


                    <Route path='/checkout'
                        element={
                            <Fragment><Header/><Checkout/><Footer/></Fragment>
                        }/>


                    <Route exact path='/login'
                        element={<Login/>}/>

                </Routes>

            </div>
        </Router>

    )
}

export default App;


/*
<Router>: The router that keeps the UI in sync with the URL
<Link>: Renders a navigation link
<Route>: Renders a UI component depending on the URL











*/
