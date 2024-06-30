import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import FontAwesomeIcon;
function Header() {
  return (
    <div className="header">
      <img
        className="header-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVWcDYxF5XVMpTObpy4qD_anAaxxZe4X3ZiQ&s"
      ></img>
      <div className="header_search">
        <input className="header_searchInput" type="Text" />
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      </div>
      <div className="Header_nav">
        <div className="header__option">
          <span className="header__option1"> Orders& Sign In</span>
          <span className="header__option2"></span>
        </div>
        <div className="header__option"></div>
        <div className="header__option"></div>
      </div>
    </div>
  );
}

export default Header;
