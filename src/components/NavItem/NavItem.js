import './NavItem.css';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={className ? `${className} page__nav__link` : 'page__nav__link'}
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
