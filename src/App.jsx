import React ,{ useState,useRef,useEffect,useContext} from 'react';
import Project from './components/Project';
import video from './assets/x3.mp4';

export const AppContext = React.createContext();

function App() 
{
  const iconLeftContainer = useRef();
  const iconRiteContainer = useRef();
  const projectBannerLink = useRef();

  const contextValues =
  {
    projectBannerLink,
  }

  useEffect(()=>
  {
    iconRiteContainer.current
    .style=`width:${iconLeftContainer.current.offsetWidth}px`;
  })

  return (
    <>
      <header className="hero-banner">
        <div className="hero-banner__layer"></div>
        <h1 className="hero-banner__name">Isaac Castro</h1>
        <p className="hero-banner__subtitle">front-end developer</p>
      </header>
      <div className="hero-video">
        <video autoPlay muted loop>
          <source src={video} />
        </video>
      </div>
      <div className="hero-about">
        <section className="hero-about__section">
          <h1 className="hero-about__title">sobre mi:</h1>
          <p className="hero-about__text">
            Soy un estudiante de ingenieria de sistemas en la universidad UPN a
            fines, actualmente busco experiencia como desarrollador Front-End.
          </p>
        </section>
        <section className="hero-about__section">
          <div ref={iconLeftContainer} className="hero-about__icon-container">
            <i class="fa-brands fa-react" title="React.js"></i>
            <i class="fa-brands fa-js" title="Javascript"></i>
            <i class="fa-brands fa-css3-alt" title="CSS"></i>
            <i class="fa-brands fa-sass" title="SASS"></i>
            <i class="fa-brands fa-node-js" title="Node.js"></i>
          </div>
          <div className="hero-about__icon-container">
            <a href="https://github.com/IsaacCastroCisneros" target="blank">
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/isaac-castro-cisneros-52714416a/"
              target="blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="mailto:isaaccastrocisneros@gmail.com">
              <i class="fa-solid fa-envelope" target="blank"></i>
              <span className="hero-about__icon-container-span">
                isaaccastrocisneros@gmail.com
              </span>
            </a>
          </div>
          <div ref={iconRiteContainer} className="hero-about__icon-container">
            <a href="">
              <i class="fa-solid fa-file-pdf"></i>
              <span>CV</span>
            </a>
          </div>
        </section>
      </div>
      <div className="projects-banner">
        <h1>Projects:</h1>
      </div>
      <div className="projects-container">
        <AppContext.Provider value={contextValues}>
           <Project/>
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App
