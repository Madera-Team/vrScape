import { Link } from 'react-router-dom';

// import { GameIllustration } from '../illustrations/gameIllustration/GameIllustration';
import "./about-game.scss";

export const AboutGame = () => {
  return (
    <div className='about-game-cont'>
     <section className="about-game-content">
     {/* <h1>a trilogy of VR educational games developed with unity</h1> */}
     {/* <img src="/public/assets/img/2.png" alt="" /> */}
     <img src="assets/img/gameIllustration.svg" alt="" />
     {/* <GameIllustration/> */}
     <h1>a trilogy of VR educational games</h1>
     
     <Link to="/games">
     <button>
      SEE MORE
      </button>
      </Link>
     </section>
    </div>
  )
}
