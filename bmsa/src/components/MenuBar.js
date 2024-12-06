import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles.css';

const MenuBar = () => {
  const [activeMenu, setActiveMenu] = useState("movies");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <nav className="menu-bar">
      <div className="menu-left">
        <Link
          to="/movies"
          className={activeMenu === "movies" ? "active" : ""}
          onClick={() => handleMenuClick("movies")}
        >
          Movies
        </Link>
        <Link
          to="/streams"
          className={activeMenu === "streams" ? "active" : ""}
          onClick={() => handleMenuClick("streams")}
        >
          Streams
        </Link>
        <Link
          to="/events"
          className={activeMenu === "events" ? "active" : ""}
          onClick={() => handleMenuClick("events")}
        >
          Events
        </Link>
        <Link
          to="/plays"
          className={activeMenu === "plays" ? "active" : ""}
          onClick={() => handleMenuClick("plays")}
        >
          Plays
        </Link>
        <Link
          to="/sports"
          className={activeMenu === "sports" ? "active" : ""}
          onClick={() => handleMenuClick("sports")}
        >
          Sports
        </Link>
        <Link
          to="/activities"
          className={activeMenu === "activities" ? "active" : ""}
          onClick={() => handleMenuClick("activities")}
        >
          Activities
        </Link>
      </div>
      <div className="menu-right">
        <Link
          to="/listYourShows"
          className={activeMenu === "listYourShows" ? "active" : ""}
          onClick={() => handleMenuClick("listYourShows")}
        >
          ListYourShows
        </Link>
        <Link
          to="/corporates"
          className={activeMenu === "corporates" ? "active" : ""}
          onClick={() => handleMenuClick("corporates")}
        >
          Corporates
        </Link>
        <Link
          to="/offers"
          className={activeMenu === "offers" ? "active" : ""}
          onClick={() => handleMenuClick("offers")}
        >
          Offers
        </Link>
        <Link
          to="/giftCards"
          className={activeMenu === "giftCards" ? "active" : ""}
          onClick={() => handleMenuClick("giftCards")}
        >
          Gift Cards
        </Link>
      </div>
    </nav>
  );
};

export default MenuBar;
