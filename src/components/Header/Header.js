import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css';
import logo from '../../logo.png'
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';

const Header = () => {
    const auth=useAuth();
    console.log(auth)
    return (
        <nav style={{marginTop:'20px'}} className="nav-container" >
            <ul>
                <li  >
                    <Link to="/" ><img style={{width:'100px'}} src={logo} alt=""/></Link>
                </li>
                <li style={{position:'relative'}} >
                  
                 <FontAwesomeIcon style={{position:'absolute',left:'85px',top:'20px',color:'#fff'}} icon={faSearch} />
                   <input placeholder="             . . . . . . . Search Your Destination" type="text"/>
                </li>
                <li className="link">Blog</li>
                <li className="link">Destination</li>
                <li className="link">Contact</li>
                <li className='login-btn' >
                {
                            auth.user ? 
                            <Link to="/login" >
                                <button onClick={() => {auth.signOut()}} className="main-btn sign-up">Sign Out</button>
                            </Link>
                            :
                            <Link to="/details" className="nav-link">
                                <button className="main-btn sign-up">Sign Up</button>
                            </Link>
                        }
                    
                </li>
                <li className="userName" >
                {
                      auth.user && <span style={{color:"rgb(93, 238, 93)",fontWeight:'700'}} >{auth.user.name} </span>  
                    }
                </li>
            </ul>
        </nav>
    );
};

export default Header;
