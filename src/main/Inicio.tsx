import './styles/inicio.css'

function Inicio() {
  return (
    <>
      <nav id="navbar">
        <h2>PORTFOLIO</h2>
        <ul>
          <li><a href="#welcome-section">ABOUT</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contacts">CONTACTS</a></li>
        </ul>
      </nav>
      <main>
        <section id="welcome-section">
          <img id="perfil" src="https://avatars.githubusercontent.com/u/143953366?v=4" alt="" />
          <h1>Hola, Soy Juan Pablo Marquez Sanchez</h1>
          <p>Un desarrollador de software</p>
        </section>
        <section id="projects">
          <div className="espacio"></div>
          <h2>PROYECTOS:</h2>
          <div className="contenedor"></div> {/* Aqui se cargan los proyectos */}
        </section>
        <section id="contacts">
          <div className="espacio-con"></div>
          <h2>CONTACTAME:</h2>
          <p>Desarrollador apasionado con un fuerte compromiso con la adquisición de conocimientos.</p>
          <div id="emailContainer">
            <p id="email">Juan013sanchez@gmail.com</p>
            <button id="copy">COPY</button>
          </div>
          <div className="links"></div> {/* Aqui se cargan las redes sociales */}
        </section>
      </main>
    </>
  )
}

export default Inicio