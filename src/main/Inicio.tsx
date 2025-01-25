import './styles/inicio.css'
import Projects from '../components/projects/Projects'
import Social from '../components/socials/Social'
import Navegation from '../components/navegation/Navegation'
import About from '../components/about/About'

function Inicio() {
  return (
    <>
      <Navegation />
      <main>
        <About />
        <Projects />
        <Social />
      </main>
    </>
  )
}

export default Inicio