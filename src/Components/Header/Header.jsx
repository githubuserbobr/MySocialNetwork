import React, { Component } from 'react';
import c from './Header.module.css';
const Header = () => {
    return (
        <header className={c.header}>
            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/05_NHL_Shield.svg/190px-05_NHL_Shield.svg.png' />
        </header>)
}
export default Header;