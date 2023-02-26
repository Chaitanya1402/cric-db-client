import React from 'react'
import { useState } from 'react';
import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../contexts/ThemeContext';

const Navbar = (props) => {
  const themeInfo = useContext(ThemeContext);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleNavbarToggle = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      document.getElementById('navbar').style.display = "block";
    }
    else {
      setIsExpanded(false);
      document.getElementById('navbar').style.display = "none";
    }
  }

  useEffect(() => {
    let slider = document.getElementById('slider');
    themeInfo.theme === 'dark' ? slider.checked = true : slider.checked = false;
  }, [])
  
  return (
    <div className='bg-purple-300 text-black'>
      <div className='w-[85%] h-16 flex m-auto justify-between items-center relative'>
        <div>
          <h2 className='text-2xl font-medium font-anton text-black'>CricDB</h2>
        </div>
        <div className='block md:hidden absolute right-0 text-2xl' onClick={handleNavbarToggle}>{isExpanded === false ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>}</div>
        <div className='hidden md:block' id='navbar'> 
          <ul className='navbar-ul flex justify-center items-center font-lato flex-col md:flex-row absolute md:static top-[64px] right-0 md:bg-transparent py-3 w-[70%] md:w-auto z-30'>
            <li className='md:mx-3 p-1 md:py-0 w-[100%]'><Link className='p-1 my-1 md:px-2 md:py-1 text-lg rounded-md md:rounded-xl border border-purple-300 md:hover:bg-purple-200 md:bg-transparent link-transition w-[90%] block m-auto md:inline text-center' to={'/'}>Home</Link></li>
            <li className='md:mx-3 p-1 md:py-0 w-[100%]'><Link className='p-1 my-1 md:px-2 md:py-1 text-lg rounded-md md:rounded-xl border border-purple-300 md:hover:bg-purple-200 md:bg-transparent link-transition w-[90%] block m-auto md:inline text-center' to={'/about'}>About</Link></li>
            <li className='md:mx-3 p-1 md:py-0 w-[100%]'><Link className='p-1 my-1 md:px-2 md:py-1 text-lg rounded-md md:rounded-xl border border-purple-300 md:hover:bg-purple-200 md:bg-transparent link-transition w-[90%] block m-auto md:inline text-center' to={'/contact'}>Contact</Link></li>
            {/* <button onClick={() => {props.toggleTheme()}}>Switch to {props.theme === "light" ? "Dark" : "Light"} mode</button> */}
            <li className='mt-8 md:mt-2 md:mx-3 p-1 py-2 md:py-0 my-1'>
            <label id="switch" className="switch">
            <input type="checkbox" onChange={() => {
              props.toggleTheme();
              themeInfo.toggleTheme()
            }} 
              id="slider" />
            <span className="slider round"></span>
            </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
