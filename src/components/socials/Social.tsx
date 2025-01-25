import { redes } from "../../utils/redes";

function Social() {

  function copyToClipboard() {
    navigator.clipboard.writeText("juan013sanchez@gmail.com");
  }


  return (
    <>
      <section id="contacts">
        <div className="espacio-con"></div>
        <h2>CONTACTAME:</h2>
        <p>Desarrollador apasionado con un fuerte compromiso con la adquisición de conocimientos.</p>
        <div id="emailContainer">
          <p id="email">Juan013sanchez@gmail.com</p>
          <button id="copy" onClick={copyToClipboard}>COPY</button>
        </div>
        <div className="links">
          {
            redes.map(red => {
              return (
                <a 
                  key={red.id} 
                  href={red.link} 
                  id="profile-link" 
                  target="_blank">
                  <i>
                    {red.icon}  
                    {red.nombre}
                  </i>  
                </a>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Social;