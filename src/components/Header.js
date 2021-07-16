import React from 'react'
import './Header.css'
import logo from './logo.png';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className='header'>
            <a className='home__link' href="."><img className='header__icon' src={logo} alt="logo"></img></a>
            
            <form action="/" method="get">
            <div className='header__search'>
                <input type="text" placeholder="Search a topic"/>
                <button type="submit"><SearchIcon /></button>

            </div>
            </form>
        </div>

    )
}

export default Header


