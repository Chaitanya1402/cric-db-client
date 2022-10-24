import React, { useContext } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ThemeContext from '../contexts/ThemeContext'

const SkeletonPlayerCard = () => {
    const themeInfo = useContext(ThemeContext);
  let theme = {
    baseColor: "#ebebeb",
    highlightColor: "#f5f5f5"
  }

  if (themeInfo.theme === "dark") {
    theme.baseColor = "#27272a";
    theme.highlightColor = "#333336";
  }
  return (
    <SkeletonTheme baseColor={theme.baseColor} highlightColor={theme.highlightColor}>
        <div className='flex mt-8 flex-wrap justify-center'>
        <div className='w-[45%] md:w-[23%] h-[300px] my-4 mx-2 max-w-xs border-1 rounded-md shadow-md'>
            <Skeleton height={300} />            
        </div>
        <div className='w-[45%] md:w-[23%] h-[300px] my-4 mx-2 max-w-xs border-1 rounded-md shadow-md'>
            <Skeleton height={300} />            
        </div>
        <div className='w-[45%] md:w-[23%] h-[300px] my-4 mx-2 max-w-xs border-1 rounded-md shadow-md'>
            <Skeleton height={300} />            
        </div>
        <div className='w-[45%] md:w-[23%] h-[300px] my-4 mx-2 max-w-xs border-1 rounded-md shadow-md'>
            <Skeleton height={300} />            
        </div>
    </div>
    </SkeletonTheme>
  )
}

export default SkeletonPlayerCard;