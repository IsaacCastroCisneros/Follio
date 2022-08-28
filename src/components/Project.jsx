import React,{useRef} from 'react';
import { AppContext } from '../App';
import projects from "/assets/json/projects.json";

export default function Project() 
{
  const projectIconContainer = useRef();
  const{projectBannerLink}=AppContext;
  
  return (
    <>
      {
        projects.map(project=>
        {
            return (
              <div className="projects-block">
                <span className="projects-block__banner">{project.name}</span>
                <div
                  className="project"
                  target="blank"
                  onMouseEnter={(e) => {
                    e.target.closest(".projects-block").classList.add("active");
                  }}
                  onMouseLeave={(e) => {
                    e.target
                      .closest(".projects-block")
                      .classList.remove("active");
                  }}
                >
                  <a
                    className="project__link"
                    target="blank"
                    href={project.siteLink}
                    ref={projectBannerLink}
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></a>
                  <div
                    className="project__icon-container project__icon-container--desktop"
                    ref={projectIconContainer}
                  >
                    {
                       project.icons.map(icon=>
                        {
                            return <i className={icon.class} title={icon.title}></i>
                        })
                    }
                  </div>
                  <div className="project__description-container project__description-container--mob">
                    <div className="project__description">
                      <div className="project__icon-container project__icon-container--mob">
                      {
                        project.icons.map(icon=>
                         {
                            return <i className={icon.class} title={icon.title}></i>
                         })
                      }
                      </div>
                      <ul className="project__list">
                        {project.description.map((li) => {
                          return <li>{li}</li>;
                        })}
                      </ul>
                      <div className="project__button-container">
                        <a
                          href={project.siteLink}
                          className="project__button"
                          target="blank"
                        >
                          <i class="fa-solid fa-rocket"></i>
                          <span>Ir al sitio</span>
                        </a>
                        <a
                          href={project.repoLink}
                          className="project__button project__button--blue"
                          target="blank"
                        >
                          <i class="fa-brands fa-github"></i>
                          <span>Repositorio</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
        })
      }
    </>
    
  );
}
