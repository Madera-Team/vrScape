import { useReducer } from 'react'
import { RankingContext, rankingReducer } from '.'
import { getRankings } from '../../api/rankings/getRankings'

const RANKING_INITIAL_STATE = {
  ranking: ([] = []),
 
}

export const CONTEXT_TYPES = {
  GET_RANKING: '[LIST] - GET_RANKING',

}

export const RankingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    rankingReducer,
    RANKING_INITIAL_STATE,
  )

  /*****get all info from ranking**************/
  const getRankingInfo = async () => {

    let sortedRankings = [
      {
        gameRanking : '',
        rankings : [
        ]
      }
    ]

    let game1Rankings = []
    let game2Rankings = []
    let game3Rankings = []

    //const rankingInfo = await getRankings()
    //console.log('en el contexto: ', rankingInfo)

    const rankingInfo = [
      {
        id: 1,
        time: '10:28',
        username: 'Abiii',
        gameId: 1
      },
      {
        id: 2,
        time: '39:34',
        username: 'Netflis',
        gameId: 2
      },
      {
        id: 3,
        time: '43:12',
        username: 'Pepe',
        gameId: 3
      },
      {
        id: 4,
        time: '10:15',
        username: 'InuTheCat',
        gameId: 1
      },
      {
        id: 5,
        time: '22:02',
        username: 'Rubberduckymax',
        gameId: 3
      },
      {
        id: 6,
        time: '12:49',
        username: 'Lauuu',
        gameId: 3
      },
      {
        id: 7,
        time: '23:55',
        username: 'Iree',
        gameId: 1
      },
      {
        id: 8,
        time: '18:15',
        username: 'Juana',
        gameId: 2
      },
      {
        id: 9,
        time: '41:11',
        username: 'Maricarmen',
        gameId: 1
      },
      {
        id: 10,
        time: '21:05',
        username: 'Rigoberty',
        gameId: 1
      },
      {
        id: 11,
        time: '21:33',
        username: 'Idyyy',
        gameId: 1
      },
      {
        id: 12,
        time: '02:33',
        username: 'BestoCato',
        gameId: 1
      },
      {
        id: 13,
        time: '04:51',
        username: 'Duckie',
        gameId: 2
      },
      {
        id: 14,
        time: '17:33',
        username: 'Supergamer',
        gameId: 2
      },
      {
        id: 15,
        time: '11:32',
        username: 'Allen',
        gameId: 2
      },
      {
        id: 16,
        time: '31:32',
        username: 'Alligator',
        gameId: 3
      },
      {
        id: 17,
        time: '21:32',
        username: 'Marmoto',
        gameId: 3
      },
      {
        id: 18,
        time: '11:02',
        username: 'Samujito',
        gameId: 2
      },
      {
        id: 19,
        time: '01:32',
        username: 'Crayones93',
        gameId: 3
      },
      {
        id: 20,
        time: '14:07',
        username: 'MrD',
        gameId: 3
      },
      {
        id: 21,
        time: '14:53',
        username: 'Adri',
        gameId: 2
      }
    ]

    rankingInfo.map((ranking)=>{
      
      switch(ranking.gameId){
        case 1:
          game1Rankings.push(ranking)
          //console.log(ranking.time + ' / ' + ranking.time.split(':').join(''))
    
          break;
        case 2:
            game2Rankings.push(ranking)
    
          break;
        case 3:
            game3Rankings.push(ranking)

          break;
      }
      
        
    })

    sortedRankings = [
      {
        gameRanking : {
          gameId: 1,
          gameName: 'The School'
        },
        rankings: game1Rankings.sort((a, b)=> a.time.split(':').join('') - b.time.split(':').join(''))
      },
      {
        gameRanking : {
          gameId: 2,
          gameName: 'The maths'
        } ,
        rankings: game2Rankings.sort((a, b)=> a.time.split(':').join('') - b.time.split(':').join(''))
      },
      {
        gameRanking :{
          gameId: 3,
          gameName: 'The tale'
        } ,
        rankings: game3Rankings.sort((a, b)=> a.time.split(':').join('') - b.time.split(':').join(''))
      }
    ]

   console.log('en el contexto TUUUUTOO: ', sortedRankings)

    dispatch({ type: CONTEXT_TYPES.GET_RANKING, payload: sortedRankings })

  }


  return (
    <RankingContext.Provider
      value={{
        ...state,
        getRankingInfo
      }}
    >
      {children}
    </RankingContext.Provider>
  )
}
