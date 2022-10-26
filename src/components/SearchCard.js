import React from 'react'
import { Link } from 'react-router-dom';

const SearchCard = (props) => {
  let url = props.detail._id + "/" + props.detail.name.toLowerCase().replaceAll(" ", "-");
  return (
    <Link to={url} className='search-card flex items-center md:w-[22rem] p-2 my-2 m-auto rounded-lg'>
        <img className='avatar mr-4 w-24 h-24 object-top rounded-full object-cover' src={props.detail.img} alt="" />
        <div className="content">
          <p className='text-lg'>{props.detail.name}</p>
          <p className=''>{props.detail.role[0].toUpperCase() + props.detail.role.slice(1)} | {props.detail.country}</p>
        </div>
    </Link>
  )
}

export default SearchCard