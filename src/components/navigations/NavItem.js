const NavItem = ({icon, text}) => {
  return (
    <div className="secondary-nav-item">
      <span className="nav-icon">
        <img src={`./icons/${icon}`} alt="nav-icon" />
      </span>
      <p className="nav-text">{text}</p>
    </div>
  );
};

export default NavItem;
