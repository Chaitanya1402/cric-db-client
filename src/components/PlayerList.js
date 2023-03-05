import React, { useState, useEffect } from 'react'
import PlayerCard from './PlayerCard'
import Search from './Search';
import SkeletonPlayerCard from './SkeletonPlayerCard';

const PlayerList = () => {
  const [active, setActive] = useState("allplayers");
  const [isLoading, setIsLoading] = useState(true);
  const [filterToggle, setFilterToggle] = useState("Show")
  const [details, setDetails] = useState([])
  const [temp, setTemp] = useState([])  // temp because the details array will be modified when setDetails() is called and old fetched data is modified.

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/api/players");
    // const res = await fetch("http://cricdb-env.eba-pqkkiaav.ap-northeast-1.elasticbeanstalk.com/api/players");
    // const res = await fetch("https://cric-db.herokuapp.com/api/players");
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

  const handleFilterToggle = () => {
    filterToggle === "Show" ? setFilterToggle("Hide") : setFilterToggle("Show");
    
    if (filterToggle === "Show") {
      setFilterToggle("Hide");
      document.getElementById("filter-list").style.display = "block";
    }
    else {
      setFilterToggle("Show");
      document.getElementById("filter-list").style.display = "none";
    }
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
        <div className="options font-medium flex justify-between pt-4 items-center">
          <div className='block md:hidden' onClick={handleFilterToggle}>{filterToggle} Filters</div>
          <div className='hidden md:block py-1 md:p-0 absolute md:static top-[120px] left-[20px] z-10 w-[50%]' id='filter-list'>
            <div className='flex flex-col md:block'>
              <button onClick={() => setActive('allplayers')} className={`${active === 'allplayers' ? 'active': ''} p-1 my-1 md:my-0 mx-2 rounded-md md:rounded-none`}>All players</button>
              <button onClick={() => setActive('batsman')} className={`${active === 'batsman' ? 'active' : ''} p-1 my-1 md:my-0 mx-2 rounded-md md:rounded-none`}>Batsmen</button>
              <button onClick={() => setActive('wicketkeeper')} className={`${active === 'wicketkeeper' ? 'active' : ''} p-1 my-1 md:my-0 mx-2 rounded-md md:rounded-none`}>Wicket-keepers</button>
              <button onClick={() => setActive('allrounder')} className={`${active === 'allrounder' ? 'active' : ''} p-1 my-1 md:my-0 mx-2 rounded-md md:rounded-none`}>All-rounders</button>
              <button onClick={() => setActive('bowler')} className={`${active === 'bowler' ? 'active' : ''} p-1 my-1 md:my-0 mx-2 rounded-md md:rounded-none`}>Bowlers</button>
            </div>
          </div>
        {temp.length > 0 && <Search details={temp} />}
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