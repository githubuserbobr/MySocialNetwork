import React from "react";
import { NavLink } from "react-router-dom";
import c from "./Header.module.css";
const Header = (props) => {
  return (
    <header className={c.header}>
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/05_NHL_Shield.svg/190px-05_NHL_Shield.svg.png" />
      <div className={c.link}>
        {props.isAuth ? props.login : <NavLink to="/Login"> Login</NavLink>}
      </div>
    </header>
  );
};
export default Header;
