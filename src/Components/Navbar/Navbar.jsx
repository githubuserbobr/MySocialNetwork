import React from 'react';
import c from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to='/profile' activeClassName={c.activeLink}> Profile </NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/dialogs' activeClassName={c.activeLink}> Messages </NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/news' activeClassName={c.activeLink}> News </NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/music' activeClassName={c.activeLink}> Music </NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/settings' activeClassName={c.activeLink}> Settings </NavLink>
            </div>
            <div className={`${c.item} ${c.friends}`}>
                <NavLink to='/friends' activeClassName={c.activeLink}> Friends </NavLink>
            </div>
            <div className={`${c.item} `}>
                <NavLink to='/users' activeClassName={c.activeLink}> Users  </NavLink>
            </div>
        </nav>
    )
}
export default Navbar;
