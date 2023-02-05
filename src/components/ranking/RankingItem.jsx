import React from 'react'

export const RankingItem = ({ranking}) => {
  return (
    <div  className='rankig-item'>
       <div className='rankig-item-section'>
        <b>Game:</b>
        <span> {ranking.gameId}</span>
       </div>
       <div className='rankig-item-section'>
        <b>User:</b>
        <span> {ranking.username}</span>
       </div>
       <div className='rankig-item-section'>
        <b>Time:</b>
        <span> {ranking.time} min</span>
       </div>
    </div>
  )
}
