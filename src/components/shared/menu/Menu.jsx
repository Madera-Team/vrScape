import { NavLink } from 'react-router-dom';
import './menu.scss'


export const Menu = () => {

    return(
        <>
        <section className="menu-cont">
            <div className="menu-left">
            <div className="menu-link">
                <NavLink to="/home">
                    <p>Home</p>
                </NavLink>
            </div>
            </div>
            <div className="menu-right">
            <div className="menu-link">
                <NavLink to="/games">
                    <p>GAMES</p>
                </NavLink>
            </div>
        
            <div className="menu-link">
                <NavLink to="/documentation">
                    <p>FAQ</p>
                </NavLink>
            </div>
        
            <div className="menu-link">
                <NavLink to="/home">
                    <p>TRY IT!</p>
                </NavLink>
            </div>
            </div>
        </section>
        </>
    )
}