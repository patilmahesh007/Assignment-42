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
        <NavLink className="navlink" to="/" style={linkStyle}>
          Home
        </NavLink>
        <NavLink className="navlink" to="/about" style={linkStyle}>
          About Us
        </NavLink>
        <NavLink className="navlink" to="/contact" style={linkStyle}>
          Contact Us
        </NavLink>
       
      </div>
    </header>
  );
}

export default Navbar;
