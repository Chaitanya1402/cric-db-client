import React from 'react'
import batsman from '../images/batcolored.png';
import bowler from '../images/ball.png';
import wicketkeeper from '../images/gloves.png';
import allrounder from '../images/batball.png';
import { Link } from 'react-router-dom';

const PlayerCard = (props) => {
  let role = props.details.role
  let img;
  if (role === 'batsman') {
    img = batsman;
  }
  else if (role === 'wicketkeeper') {
    img = wicketkeeper;
  }
  else if (role === 'allrounder') {
    img = allrounder;
  }
  else {
    img = bowler
  }

  let url = props.details._id + "/" + props.details.name.toLowerCase().replaceAll(" ", "-");

  return (
    <>
      <Link to={url} className='card w-[45%] md:w-[23%] my-4 py-1 mx-2 max-w-xs border-2 rounded-md hover:my-shadow shadow-md'>
        <img className='player-image m-auto w-[100%] h-48 md:h-72 object-top max-w-xs object-cover opacity-90' src={props.details.img} alt="Player" />
        <div className='main-info relative flex my-4 px-2 pb-1 justify-between items-center'>
          <p className='text-base md:text-lg font-merriweather font-semibold'>{props.details.name}</p>
          <img className='w-[30px] h-[20px] md:w-[40px] md:h-[30px]' src={`https://countryflagsapi.com/png/${props.details.countryCode}`} alt="Player country" />
        </div>
        <div className='md:extra-player-details hidden md:flex'>
          <div className="age-box w-[100%] text-center">
            <p className='font-medium'>Age</p>
            <p>{props.details.age}</p>
          </div>
          <div className="role-box border-l border-l-slate-600 w-[100%] text-center">
            <p className='font-medium'>Role</p>
            <img src={img} alt={props.details.role} width={20} className='block m-auto'/>
          </div>
          <div className="caps-box border-l border-l-slate-600 w-[100%] text-center">
            <p className='font-medium'>Intl. caps</p>
            <p>{props.details.caps}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default PlayerCard