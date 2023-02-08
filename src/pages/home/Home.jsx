
import { AboutGame } from "../../components/about/AboutGame"
import { AboutUs } from "../../components/about/AboutUs"
import { GamesInfoList } from "../../components/gamesInfo/GamesInfoList"
import { RankingList } from "../../components/ranking/RankingList"
import { Greetings } from "../../components/shared/footer/Greetings"
import { Header } from "../../components/shared/header/Header"

export const Home = () => {

    return(
        <>
        <Header/>
        <AboutGame/>
        <RankingList/>
        {/* <GamesInfoList/> */}
        <AboutUs/>
        <Greetings/>
        </>
    )
}