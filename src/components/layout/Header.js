import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      Tigers Player Management |
      <Link style={linkStyle} to='/'> home</Link> |
      <Link style={linkStyle} to='/availability'> availability</Link> |
      <Link style={linkStyle} to='/subs'> subs</Link> |
      <Link style={linkStyle} to='/about'> about</Link>
    </header>
  )
}

const headerStyle = {
  background: '#223A78',
  color: '#FFCC33',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header
