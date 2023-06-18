import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Link } from "react-router-dom";
import { Navbar, NavItem, Icon } from "react-materialize";
import {Detail} from '../pages/detail'
import Contact from '../pages/contact';

const Navigation = () => {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
      <Navbar className="menu"
        alignLinks="right"
        brand={<span className="brand-logo">Player Cards</span>}
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        style={{background:"blue"}}
      >

        <ul>
          <li> <Link to='/'> <Icon left> </Icon> Home </Link></li>
          <li to='/about'> <Link to='/about'> <Icon left></Icon> About </Link></li>
          <li to='/news'> <Link to='/news'> <Icon left></Icon> News </Link></li>
          <li to='/contact'> <Link to='/Contact'> <Icon left></Icon> Contacts </Link></li>
        </ul> 
      </Navbar>
  );
};

export default Navigation;