import { useEffect, useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import './index.css';

const App = () => {
  // Retrieve the current theme from localStorage
  const current_theme = localStorage.getItem('current_theme');
  // Initialize theme state: either from localStorage or default to 'light'
  const [theme, setTheme]  =useState(current_theme?current_theme:'light');
   // Update localStorage when the theme changes
  useEffect(() => {
     localStorage.setItem('current_theme',theme);
  },[theme]);
  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <div className="content">
        
        
      </div>
    </div>
    
  )
}

export default App
