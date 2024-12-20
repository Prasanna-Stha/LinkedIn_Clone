import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserFriends, faBriefcase, faCommentDots, faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from "/src/assets/images/LinkedIn_Logo.png";
import "/src/assets/CSS/Navbar.css";

function Navbar({ profileSrc }) {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { name: "Home", icon: faHome },
    { name: "My Network", icon: faUserFriends },
    { name: "Jobs", icon: faBriefcase },
    { name: "Messaging", icon: faCommentDots },
    { name: "Notifications", icon: faBell },
  ];

  const users = ["Prasanna", "Dipun", "Nimesh", "Dipesh", "Sanij", "Saphal", "Abinash", "Ajju"];

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (query.length > 0) {
      const results = users.filter((user) => user.toLowerCase().startsWith(query));
      setSearchResults(results);
    }
    else {
      setSearchResults([]);
    }
  };

  return (
    <nav className="navbar">
      <div className="navBox">
        <div className="logoBox">
          <img src={Logo} alt="LinkedIn Logo" style={{ height: "40px" }} />
        </div>

        <div className="searchBox">
          <form>
            <FontAwesomeIcon icon={faSearch} className="searchIcon" />
            <input type="text" placeholder="Search for something..." id="searchBar" value={searchQuery} onChange={handleSearch} />
          </form>
          {searchResults.length > 0 && (
            <div className="searchResults">
              <ul>
                {searchResults.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="navigationBoxes">
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a href="#" className="nav-link">
                  <FontAwesomeIcon icon={item.icon} className="navIcon" />
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <img src={profileSrc} alt="Profile" style={{
                  width: "30px", height: "30px", borderRadius: "50%",
                  objectFit: "cover",
                }} />
                <span>Me</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
