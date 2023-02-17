import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Hamburguer } from "./hamburguerIcon/Hamburguer";
import "./menu.scss";

export const Menu = () => {
  const isMobile = window.matchMedia("(max-width: 500px)").matches;

  const [menuVisible, setMenuVisible] = useState(false);

  
  const handleMenuVisible = () =>{
    setMenuVisible(!menuVisible)
  }
  return (



    <>
      {!isMobile ? (
        <>
          {/* pc */}
          <section className="menu-cont">
            <div className="menu-left">
              <div className="menu-link">
                <NavLink to="/home">
                  <p>
                    <img src="assets/small_white_lineal.svg" alt="" />
                  </p>
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

              {/* <div className="menu-link">
            <NavLink to="/home">
                <p>TRY IT!</p>
            </NavLink>
        </div> */}
            </div>
          </section>
        </>
      ) : (
        <>
          {/* mobile */}
          <div className="hamburguer-cont">
            <button className={menuVisible && 'close' }
            onClick={handleMenuVisible}>
                <Hamburguer open={menuVisible}/>
            </button>
          </div>
          {menuVisible && (
            <section className="menu-cont">
              <div className="menu-left">
                <div className="menu-link">
                  <NavLink to="/home" onClick={handleMenuVisible}>
                    <p>
                      <img src="assets/small_white_lineal.svg" alt="" />
                    </p>
                  </NavLink>
                </div>
              </div>
              <div className="menu-right">
                <div className="menu-link">
                  <NavLink to="/games" onClick={handleMenuVisible}>
                    <p>GAMES</p>
                  </NavLink>
                </div>

                <div className="menu-link">
                  <NavLink to="/documentation" onClick={handleMenuVisible}>
                    <p>FAQ</p>
                  </NavLink>
                </div>

                {/* <div className="menu-link">
                <NavLink to="/home">
                    <p>TRY IT!</p>
                </NavLink>
            </div> */}
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};
