import { Route, Routes } from 'react-router-dom';
import { GamesInfoList } from '../components/gamesInfo/GamesInfoList';
import { Footer } from '../components/shared/footer/Footer';
import { Header } from '../components/shared/header/Header';
import { Menu } from '../components/shared/menu/Menu';
import { Documentation } from '../pages/documentation/Documentation';
import { Home } from '../pages/home/Home';

export const AppRouter = () => {
  return (
    <>
  <Menu/>
        <Routes>
            
            <Route path="documentation" element={<Documentation />} />

            <Route path="games" element={<GamesInfoList />} />
            
            <Route path="/*" element={ <Home />} />
            
            

        </Routes>
    <Footer/>
    </>
  )
}