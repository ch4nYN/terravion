import React from 'react';

 const Navbar = () => {
  const navbarStyle = {
    width: '100%',
    height: '70px',
    display: 'table'
  }
  const contentStyle = {
    listStyle: 'none',
    display: 'table-cell',
    verticalAlign: 'middle'
  }
  return(
    <div style={navbarStyle}>
      <ul style={contentStyle}>
        <li ><a href="/" style={{fontSize:'32px', textDecoration: 'none'}}><span style={{color:'#50C878'}}>T E R R</span> <span style={{color:'#73C2FB'}}>A V I O N</span></a></li>
      </ul>
    </div>
  )
}

export default Navbar;
