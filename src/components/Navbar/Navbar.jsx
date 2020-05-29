import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>

            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Dialogs</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>

        </nav>
    );
}

export default Navbar;