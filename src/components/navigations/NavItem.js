import { NavLink } from "react-router-dom";

const NavItem = ({ icon, text, link }) => {
  const style = {
    background: `url(./icons/${icon}.svg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const activeStyle = {
    background: `url(./icons/${icon}-active.svg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="secondary-nav-item">
      <NavLink
        to={link}
        className="nav-icon"
        style={({ isActive }) => (isActive ? activeStyle : style)}
      ></NavLink>
      <NavLink to={link} className="nav-text">
        {text}
      </NavLink>
    </div>
  );
};

export default NavItem;
