import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'violet',
    textDecoration: 'none',
    color: 'white',
  }

const Navigation = () =>
  <div>
    <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: 'purple'
      }}
    >Home</NavLink>

    <NavLink
      to="/Hosts"
      exact
      style={link}
      activeStyle={{
        background: 'purple'
      }}
    >Hosts</NavLink>

  </div>;

  export default Navigation;