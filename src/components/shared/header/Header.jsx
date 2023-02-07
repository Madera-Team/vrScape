import { Link, NavLink, useNavigate } from 'react-router-dom';

import './header.scss';

export const Header = () => {
  return (
    <>
    <section className="header-cont">
   

<div className="header-content">

    <h1>VR Escape</h1>
    <div className="btn-cont">
        <button>TRAILER</button>
         
        <button>
          {/* <Link to="#about">
            ABOUT US
          </Link> */}
          <a href="#about">ABOUT US</a>
        </button>
       
        
    </div>
</div>

    </section>
    </>
  )
}
