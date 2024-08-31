import './nav.css';
import { NavLink } from 'react-router-dom';
import { logo } from '../../config/logo';

function Navbar() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? 'red' : 'black',
  });

  return (
    <header>
      <img src={logo.logo}  className='logo' /> 
      <div className="container">
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>
        <NavLink to="/about" style={linkStyle}>
          About Us
        </NavLink>
        <NavLink to="/contact" style={linkStyle}>
          Contact Us
        </NavLink>
        <NavLink to="/notes" style={linkStyle}> 
          Notes
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
