import React from 'react'

export const RankingItem = ({ranking}) => {
  return (
    <div  className='rankig-item'>
        <section className="ranking-item-header" style={{backgroundImage : `url(/public/assets/img/${ranking.gameId}.png)`}}></section>
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
