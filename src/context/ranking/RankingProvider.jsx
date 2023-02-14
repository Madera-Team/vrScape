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

    const rankingInfo = await getRankings()
    //console.log('en el contexto: ', rankingInfo)

    rankingInfo.map((ranking)=>{
      
      switch(ranking.gameId){
        case 1:
          game1Rankings.push(ranking)
          console.log(ranking.time + ' / ' + ranking.time.split(':').join(''))
    
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
