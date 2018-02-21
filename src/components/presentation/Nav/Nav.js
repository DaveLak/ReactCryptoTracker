import React from 'react';
import './Nav.css'

const Nav = props => {
  return (
    <nav className={"Nav"}>
      {props.children}
    </nav>
  )
};

export default Nav;