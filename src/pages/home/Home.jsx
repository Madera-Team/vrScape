
import { AboutGame } from "../../components/about/AboutGame"
import { AboutUs } from "../../components/about/AboutUs"
import { RankingList } from "../../components/ranking/RankingList"
import { Header } from "../../components/shared/header/Header"

export const Home = () => {

    return(
        <>
        <Header/>
        <AboutGame/>
        <RankingList/>
        <AboutUs/>
        </>
    )
}