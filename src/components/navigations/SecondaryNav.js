import "./SecondaryNav.css";
import NavItem from "./NavItem";

const SecondaryNav = () => {
  return (
    <div className="secondary-nav">
      <NavItem icon="home-icon.png" text="home" />
      <NavItem icon="weather-icon.png" text="weather" />
      <div className="new-post-icon">
        <img src="./icons/plus-icon.png" alt="plus-icon" />
      </div>
      <NavItem icon="chat-icon.png" text="chat" />
      <NavItem icon="user-icon.png" text="profile" />
    </div>
  );
};

export default SecondaryNav;
