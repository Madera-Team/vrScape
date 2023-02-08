import React, { useEffect } from "react";
import { useContext } from "react";
import { RankingContext } from "../../context/ranking";

import "./ranking.scss";
import { RankingItem } from "./RankingItem";

export const RankingList = () => {
  const url = "https://vrescapeback-production.up.railway.app/api/ranking";
  // const [rankingItems, setRankingItems] = useState([])
  // const [isLoading, setisLoading] = useState(false)
  const { getRankingInfo, ranking } = useContext(RankingContext);

  useEffect(() => {
    getRankingInfo();
    // fetch(url)
    //     .then((response) => response.json())
    //     .then((ranking) => {
    //         console.log(ranking)
    //         setisLoading(false);
    //         setRankingItems(ranking)
    //     });
  }, []);
  return (
    <>
   
      <section id="ranking" className="ranking-cont">
        {ranking.map((ranking, index) => (
          <div className="ranking-content" key={index}>
            <section
              className="ranking-item-header"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(115, 171, 171, 0.33) 0%, rgba(152, 124, 186, 0.54) 100%),url(assets/img/${ranking.gameRanking.gameId}.png)`,
              }}
            >
              <h2>{ranking.gameRanking.gameName}</h2>
            </section>
            {ranking.rankings.map((item, index) => (
              <RankingItem key={index} index={index} ranking={item} />
            ))}
          </div>
        ))}
      </section>
      <h1 className="ranking-title">Are you among the fastest?</h1>
    </>
  );
};
