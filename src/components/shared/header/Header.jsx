import { Link, NavLink, useNavigate } from 'react-router-dom';

import './header.scss';

export const Header = () => {
  return (
    <>
    <section className="header-cont"
    style={{
      backgroundImage: "linear-gradient(to bottom, rgba(115, 171, 171, 0.33) 0%, rgba(152, 124, 186, 0.74) 100%),url(assets/img/1.png)"
    }}
    >
   

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
