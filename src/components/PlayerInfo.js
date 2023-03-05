import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SkeletonPlayerInfo from './SkeletonPlayerInfo';

const PlayerInfo = () => {
  const [wiki, setWiki] = useState("");
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let params = useParams();

  const fetchPlayerData = async () => {
    var url = new URL("http://localhost:5000/api/playersbyid");
    // var url = new URL("http://cricdb-env.eba-pqkkiaav.ap-northeast-1.elasticbeanstalk.com/api/playersbyid");
    // var url = new URL("https://cric-db.herokuapp.com/api/playersbyid");
    url.search = new URLSearchParams({ _id: params.id }).toString();

    const res = await fetch(url);
    const json = await res.json();
    setDetails(json.result);
    setIsLoading(false);
  }

  const wikiPlayer = async () => {
    let url = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=5&explaintext=1&format=json&titles=${details.name}&origin=*`
    const res = await fetch(url);
    const json = await res.json();
    setWiki(json.query.pages[Object.keys(json.query.pages)[0]].extract)
  }

  useEffect(() => {
    fetchPlayerData();
  }, [])

  useEffect(() => {
    wikiPlayer();
  }, [details])

  return (
    <>
      {details && <div className='w-[90%] md:w-[75%] m-auto mt-4 md:mt-8 pb-4 player-info'>
    {isLoading ? <SkeletonPlayerInfo /> : <>
    <div className='flex flex-col-reverse md:flex-row'>
          <div className='details md:w-[65%]'>
            <p className='text-2xl md:text-4xl font-semibold'>{details.name}</p>
            <p className='text-lg md:text-xl font-medium'>{details.country}</p>
            <p className='text-lg mt-5'>Personal Information</p>
            <div className='my-2 md:w-[60%] table-bg'>
              {details.personalInfo && details.personalInfo.map((element, key) => {
                return (
                  <div className='flex justify-between' key={key}>
                    <p className='w-[100%] px-2 py-1 border table-border font-medium'>{Object.keys(element)[0]}</p>
                    <p className='w-[100%] px-2 py-1 border table-border'>{element[Object.keys(element)[0]]}</p>
                  </div>
                )
              })}
            </div>

            <p className='text-lg mt-5'>ICC Rankings</p>
            <div className='my-2 md:w-[60%] grid grid-cols-4 table-bg'>
              <p className='px-2 py-1 border table-border'></p>
              <p className='px-2 py-1 border table-border font-medium'>Test</p>
              <p className='px-2 py-1 border table-border font-medium'>ODI</p>
              <p className='px-2 py-1 border table-border font-medium'>T20</p>
              <p className='px-2 py-1 border table-border font-medium'>Batting</p>
              <p className='px-2 py-1 border table-border'>{details.rankings && details.rankings[0].batting[0].Test}</p>
              <p className='px-2 py-1 border table-border'>{details.rankings && details.rankings[0].batting[1].ODI}</p>
              <p className='px-2 py-1 border table-border'>{details.rankings && details.rankings[0].batting[2].T20}</p>
              <p className='px-2 py-1 border table-border font-medium'>Bowling</p>
              <p className='px-2 py-1 border table-border'>{details.rankings && details.rankings[1].bowling[0].Test}</p>
              <p className='px-2 py-1 border table-border'>{details.rankings && details.rankings[1].bowling[1].ODI}</p>
              <p className='px-2 py-1 border table-border'>{details.rankings && details.rankings[1].bowling[2].T20}</p>
            </div>

            <p className='text-lg mt-5'>Teams played for:</p>

            <div className='my-2 md:w-[60%] py-1 px-2 table-bg border table-border'>
              {details.teamsPlayedFor}
            </div>
          </div>
          <div className="img mb-4 md:mb-0">
            <img className='h-80 m-auto md:h-[30rem] object-cover' src={details.img} alt="Player" />
          </div>
        </div>

        <div className='my-5 text-justify'>
          {wiki !== "Undefined may refer to:" && wiki}
        </div>
    </> }
      </div>}
    </>
  )
}

export default PlayerInfo