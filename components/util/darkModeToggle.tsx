import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from 'use-dark-mode';

const  MyDarkModeToggle = () => {
  const darkModeConfig = {
    classNameDark: "dark-mode"
  }
  const darkMode = useDarkMode(false, darkModeConfig);

  return ( 
             <div>
      <DarkModeToggle
            onChange={darkMode.toggle}
            checked={darkMode.value}
            size={80}
            />
    </div>   
  );
};

export default MyDarkModeToggle;

