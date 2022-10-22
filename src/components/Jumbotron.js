import React from 'react'
import { Link } from 'react-router-dom';
import stadium from "../images/stadium.jpg";

const Jumbotron = () => {
  return (
    <div className='relative'>
      <div className='bg-black'>
        <img className='w-[100%] max-h-[1248px] rem-height opacity-50 object-cover' src={stadium} alt="Stadium" />
      </div>
      <div className='absolute top-0 rem-height pl-[7.5%] w-[75%] md:w-[55%] flex flex-col justify-center items-start max-h-[1248px]'>
        <h2 className='block pb-10 lg:text-6xl md:text-4xl text-2xl lg:leading-[5rem] text-white font-anton'>Your one stop destination for cricket related information</h2>
        <Link to={'players'} className='text-sm md:text-base text-white bg-purple-600 py-2 px-4 rounded-lg hover:bg-purple-700 more-button'>Explore More <span className='more-button-arrows pl-1'>
          <span className='opacity-50'>&#10095;</span>
          <span className='opacity-70'>&#10095;</span>
          <span className='opacity-90'>&#10095;</span>
        </span>
        </Link>
      </div>
    </div>
  )
}

export default Jumbotron