import React from 'react'
import { GameInfoItem } from './GameInfoItem'

import "./games-info-list.scss";


export const GamesInfoList = () => {

    const gamesInfo = [
        {
            gameName : "The School",
            gameDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo repellendus reiciendis nihil corporis quo quidem, excepturi, doloremque, ipsum deserunt id voluptate nostrum? Quae tempora totam, ipsam officiis, quasi quam quod alias voluptatibus minus voluptas quas. Veritatis numquam est enim neque aperiam fugiat? Expedita beatae iste quidem minima debitis! Autem, dicta!",
            gameImage : "the_school_01.png"

        },
        {
            gameName : "The Maths",
            gameDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo repellendus reiciendis nihil corporis quo quidem, excepturi, doloremque, ipsum deserunt id voluptate nostrum? Quae tempora totam, ipsam officiis, quasi quam quod alias voluptatibus minus voluptas quas. Veritatis numquam est enim neque aperiam fugiat? Expedita beatae iste quidem minima debitis! Autem, dicta!",
            gameImage : "the_maths_01.png"

        },
        {
            gameName : "The Tale",
            gameDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo repellendus reiciendis nihil corporis quo quidem, excepturi, doloremque, ipsum deserunt id voluptate nostrum? Quae tempora totam, ipsam officiis, quasi quam quod alias voluptatibus minus voluptas quas. Veritatis numquam est enim neque aperiam fugiat? Expedita beatae iste quidem minima debitis! Autem, dicta!",
            gameImage : "the_school_01.png"

        }
    ]
  return (
    <div className='games-info-cont'>
        {gamesInfo.map((game, index)=>(
           <>
           <GameInfoItem key={index} game= {game}/>
           </>
        ))}
    </div>
  )
}
