import { Link, NavLink, useNavigate } from 'react-router-dom';
import './menu.scss'


export const Menu = () => {

    return(
        <>
        <section className="menu-cont">
            <div className="menu-link">
                <NavLink to="/home">
                    <p>Home</p>
                </NavLink>
            </div>
            <div className="menu-link">
                <NavLink to="/documentation">
                    <p>Documentation</p>
                </NavLink>
            </div>
        </section>
        </>
    )
}