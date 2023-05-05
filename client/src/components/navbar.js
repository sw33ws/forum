import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import '../styles/navbar.css';

const Navbar = (props) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const token = localStorage.getItem('id_token')

    useEffect(() => {
        if(token){
            setLoggedIn(true)
        } else if(!token) {
            return
        }
    }, [ loggedIn, token ])

    const signout = () => {
        localStorage.clear()
        setLoggedIn(false)
    }

    return(
        <nav>
            <Link to="/" style={{ textDecoration: 'none' }}><h1 id='NavTitle'>Home</h1></Link>

            <ul>
                {
                    loggedIn ?
                    <li><Link to="/Post" style={{ textDecoration: 'none' }}><span id='navtext'>Post</span></Link></li>:
                    <></>
                }
                {
                loggedIn ?
                <li onClick={signout}><span id='navtext'>Sign Out</span></li>
                :
                <>
                <li><Link to="/login" style={{ textDecoration: 'none'}}><span id='navtext'>Login</span></Link></li>
                <li><Link to="/signup" style={{ textDecoration: 'none' }}><span id='navtext'>Signup</span></Link></li>
                </>
                }
            </ul>
        </nav>
    )
}

export default Navbar;