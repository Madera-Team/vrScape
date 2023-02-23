import { Link, NavLink, useNavigate } from 'react-router-dom';

import './header.scss';

export const Header = () => {
  return (
    <>
    <section className="header-cont"
    style={{
      backgroundImage: "linear-gradient(to bottom, rgba(115, 171, 171, 0.33) 0%, rgba(152, 124, 186, 0.74) 100%),url(assets/img/header/1.png)"
    }}
    >
   

<div className="header-content">

    {/* <h1>VR Escape</h1> */}
    <img className='logo' src="assets/logo_white.svg" alt="" />
    <div className="btn-cont">
        <a href="https://youtu.be/iN0fYMNy55o" target="_blank">
            <button>TRAILER</button>
        </a>
      
        
        <a href="#about">
        <button>
          {/* <Link to="#about">
            ABOUT US
          </Link> */}
          ABOUT US
        </button>
        </a>
        
    </div>
</div>

    </section>
    </>
  )
}
