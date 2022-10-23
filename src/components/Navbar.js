import React from 'react'
import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../contexts/ThemeContext';

const Navbar = (props) => {
  const themeInfo = useContext(ThemeContext);

  useEffect(() => {
    let slider = document.getElementById('slider');
    themeInfo.theme === 'dark' ? slider.checked = true : slider.checked = false;
  }, [])
  
  return (
    <div className='bg-purple-300 text-black'>
      <div className='w-[85%] h-16 flex m-auto justify-between items-center'>
        <div>
          <h2 className='text-2xl font-medium font-anton text-black'>CricDB</h2>
        </div>
        <div> 
          <ul className='flex justify-center items-center font-lato'>
            <li className='mx-3'><Link className='px-2 py-1 text-lg rounded-xl border-2 border-purple-300 hover:bg-purple-200 link-transition' to={'/'}>Home</Link></li>
            <li className='mx-3'><Link className='px-2 py-1 text-lg rounded-xl border-2 border-purple-300 hover:bg-purple-200 link-transition' to={'/about'}>About</Link></li>
            <li className='mx-3'><Link className='px-2 py-1 text-lg rounded-xl border-2 border-purple-300 hover:bg-purple-200 link-transition' to={'/contact'}>Contact</Link></li>
            {/* <button onClick={() => {props.toggleTheme()}}>Switch to {props.theme === "light" ? "Dark" : "Light"} mode</button> */}
            <label id="switch" className="switch">
            <input type="checkbox" onChange={props.toggleTheme} id="slider" />
            <span className="slider round"></span>
        </label>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
