import React, { useEffect } from 'react'
import { useState } from 'react'
import { getRankings } from '../../api/rankings/getRankings'

import './ranking.scss'
import { RankingItem } from './RankingItem'


export const RankingList = () => {
    const url = "https://vrescapeback-production.up.railway.app/api/ranking"
    const [rankingItems, setRankingItems] = useState([])
    const [isLoading, setisLoading] = useState([])

    // const getResults = async() =>{
    //     const rankinens = await getRankings(url);

    //     console.log('ahi: ', rankinens)
    //     if(rankinens){
    //       setRankingItems(rankinens);
    //     }
    //     console.log('ahi3: ', rankingItems)
    // }
    // useEffect( () => {
    //   try{
    //     getResults();
    //     console.log('ahi2: ', rankingItems)
    //   }catch{
    //     console.log('ups')
    //   }
    // }, []);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((ranking) => {
                console.log(ranking)
                setisLoading(false);
                setRankingItems(ranking)
            });
    }, []);
    return (
        <>

            <section className='ranking-cont'>


                <div>
                    {
                        isLoading ?
                            <h1>Loading</h1>
                            :
                            rankingItems.map((ranking, index) => (

                                ranking.gameId === 1 &&

                                <RankingItem key={index} ranking={ranking}/>

                            ))

                    }
                </div>

                <div>
                    {
                        isLoading ?
                            <h1>Loading</h1>
                            :
                            rankingItems.map((ranking, index) => (

                                ranking.gameId === 2 &&

                                <RankingItem key={index} ranking={ranking}/>

                            ))

                    }
                </div>

                <div>
                    {
                        isLoading ?
                            <h1>Loading</h1>
                            :
                            rankingItems.map((ranking, index) => (

                                ranking.gameId === 3 &&

                                <RankingItem key={index} ranking={ranking}/>

                            ))

                    }
                </div>

            </section>
        </>
    )
}
