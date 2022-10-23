import React, { useState, useEffect } from 'react'
import PlayerCard from './PlayerCard'
import SkeletonPlayerCard from './SkeletonPlayerCard';

const PlayerList = () => {
  const [active, setActive] = useState("allplayers");
  const [isLoading, setIsLoading] = useState(true);
  const [details, setDetails] = useState([])
  const [temp, setTemp] = useState([])  // temp because the details array will be modified when setDetails() is called and old fetched data is modified.

  const fetchData = async () => {
    const res = await fetch("https://cric-db.herokuapp.com/api/players");
    const json = await res.json();
    setDetails(json.result);
    setTemp(json.result);
    setIsLoading(false);
  }

  const checkRole = (info) => {
    return info.role === active;
  }

  const filterData = () => {
    active === "allplayers" ? setDetails(temp) : setDetails(temp.filter(checkRole));
  }

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    filterData();
  }, [active])

  return (
    <>
      <div className='w-[95%] md:w-[85%] m-auto'>
        <div className="options font-medium">
          <button onClick={() => setActive('allplayers')} className={`${active === 'allplayers' ? 'active': ''} p-1 mx-2`}>All players</button>
          <button onClick={() => setActive('batsman')} className={`${active === 'batsman' ? 'active' : ''} p-1 mx-2`}>Batsmen</button>
          <button onClick={() => setActive('wicketkeeper')} className={`${active === 'wicketkeeper' ? 'active' : ''} p-1 mx-2`}>Wicket-keepers</button>
          <button onClick={() => setActive('allrounder')} className={`${active === 'allrounder' ? 'active' : ''} p-1 mx-2`}>All-rounders</button>
          <button onClick={() => setActive('bowler')} className={`${active === 'bowler' ? 'active' : ''} p-1 mx-2`}>Bowlers</button>
        </div>
        {/* Players List goes here */}
        {isLoading && <SkeletonPlayerCard /> }
        <div className='flex mt-8 flex-wrap justify-center'>
          {details.map((element, key) => {
            return <PlayerCard key={key} details={element} />
          })}

        </div>
      </div>
    </>
  )
}

export default PlayerList