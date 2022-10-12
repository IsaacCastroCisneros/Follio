import React, { useState, useRef, useEffect, useContext } from "react";
import Project from "./components/Project";
import video from "/assets/x3.mp4";

export const AppContext = React.createContext();

function App() 
{
  /* const projectBannerLink = useRef();

  const contextValues = {
    projectBannerLink,
  }; */


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
            fines, actualmente busco experiencia como desarrollador web.
          </p>
        </section>
        <section className="hero-about__section">
          <div className="hero-about__icon-container">
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
          <div className="hero-about__icon-container">
            <a href="/assets/cv/Isaac_castro_CV-2.0.pdf" target="blank">
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
          <Project/>
      </div>
      <div className="hero-video">
        <video autoPlay muted loop>
          <source src={video} />
        </video>
      </div>
      <footer className="hero-about hero-about--footer">
        <section className="hero-about__section">
          <div className="hero-about__icon-container">
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
          <div className="hero-about__icon-container">
            <a href="/assets/cv/Isaac_castro_CV-2.0.pdf" target="blank">
              <i class="fa-solid fa-file-pdf"></i>
              <span>CV</span>
            </a>
          </div>
        </section>
      </footer>
    </>
  );
}

export default App;
