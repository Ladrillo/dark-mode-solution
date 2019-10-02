import React, { useState } from 'react';
import { useDarkMode } from '../hooks'
const Navbar = () => {
  // const [darkMode, setDarkMode] = useState(false);
  // const toggleMode = e => {
  //   e.preventDefault();
  //   setDarkMode(!darkMode);
  // };
  const [isDark, toggleDark] = useDarkMode(false);
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          // onClick={toggleMode}
          // className={darkMode ? 'toggle toggled' : 'toggle'}
          onClick={toggleDark}
          className={isDark ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
