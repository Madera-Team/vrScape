import React from 'react'
import { GameIllustration } from '../illustrations/gameIllustration/GameIllustration';
import "./about-game.scss";

export const AboutGame = () => {
  return (
    <div className='about-game-cont'>
     <section className="about-game-content">
     {/* <h1>a trilogy of VR educational games developed with unity</h1> */}
     {/* <img src="/public/assets/img/2.png" alt="" /> */}
     <img src="./public/assets/img/gameIllustration.svg" alt="" />
     {/* <GameIllustration/> */}
     <h1>a trilogy of VR educational games</h1>
     <button>TRY IT</button>
     </section>
    </div>
  )
}
