import { Route, Routes } from 'react-router-dom';
import { Menu } from '../components/shared/menu/Menu';
import { Documentation } from '../pages/documentation/Documentation';
import { Home } from '../pages/home/Home';

export const AppRouter = () => {
  return (
    <>
    <Menu/>
        <Routes>
            
            <Route path="documentation" element={<Documentation />} />
            
            
            <Route path="/*" element={ <Home />} />
            
            

        </Routes>
    
    </>
  )
}