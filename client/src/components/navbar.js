import { Link } from 'react-router-dom';
import jwtdecode from 'jwt-decode';
import { useState, useEffect } from 'react';

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
        <div>
            <Link to="/"><h1>Home</h1></Link>

            <ul>
                {
                loggedIn ?
                <li onClick={signout}>Sign Out</li>
                :
                <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                </>
                }
                {
                    loggedIn ?
                    <li><Link to="/Post">Post</Link></li>:
                    <></>
                }
            </ul>
        </div>
    )
}

export default Navbar;