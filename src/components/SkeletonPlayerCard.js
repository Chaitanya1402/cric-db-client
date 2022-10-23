import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonPlayerCard = (props) => {
  return (
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
  )
}

export default SkeletonPlayerCard;