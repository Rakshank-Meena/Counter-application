import React, { useState } from "react";
import './App.css';
import Mainapp from './components/Mainapp';
import Navbar from './components/Navbar';

function App() {
  const [theme,setTheme]=useState('light-theme')
  const themeSwitch=()=>{
      if(theme==='dark-theme'){
          setTheme('light-theme')
      }
      else{setTheme('dark-theme')}
  }
 
  return (
    <div className={theme}>
    <Navbar themeSwitch={themeSwitch}/>
    <Mainapp/> 
    </div>
  );
}

export default App;
