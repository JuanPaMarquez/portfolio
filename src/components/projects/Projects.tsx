import { proyectos } from "../../lib/proyectos";

function Projects() {
  
  return (
    <>
      <section id="projects">
        <div className="espacio"></div>
        <h2>PROYECTOS:</h2>
        <div className="contenedor">
          {
            proyectos.map(proyecto => {
              return (
                <div className="proyect" key={proyecto.link}>
                  <div className="img-info">
                    <img src={proyecto.img} alt={proyecto.titulo} />
                    <div className="info-project">
                      <h3>{proyecto.titulo}</h3>
                      <div className="tecnologias">
                        {proyecto.info.map((icon, index) => {
                          return (
                            <div key={index}>
                              {icon}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="barra-botones">
                    <a href={proyecto.github} className="github" target="_blank">GitHub</a>
                    <a href={proyecto.link} className="project-tile" target="_blank">Ver Proyecto</a>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Projects;