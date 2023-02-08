import React from 'react'

export const GameInfoItem = ({game}) => {
  return (
    <>
   <div className="game-info-content">
   <h2>{game?.gameName}</h2>
    <img src={`./public/assets/img/screenshoots/${game?.gameImage}`} alt="" />
    <p>{game?.gameDescription}</p>
   </div>
    </>
  )
}
