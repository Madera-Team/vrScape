import React from 'react'
import { Medal } from './medalSvg/Medal'

export const RankingItem = ({ranking,index}) => {
  return (
    <div  className='rankig-item'>
       {/* <div className='rankig-item-section'>
        <b>Game:</b>
        <span> {ranking.gameId}</span>
       </div> */}

       {/* <div className='rankig-item-section'>
        <b>User:</b>
        <span> {ranking.username}</span>
       </div> */}

       <div className='rankig-item-section'>
        {/* <b>Time:</b> */}
        <div className="medal">
         {
          index <3 &&  <Medal position = {index}/>
         }
        </div>
        <span> {ranking.username}</span>
        <span> {ranking.time} min</span>
       </div>
    </div>
  )
}
