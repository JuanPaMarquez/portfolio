import { tech } from "../utils/techIcons"
interface Proyecto {
  titulo: string,
  img: string,
  link: string,
  info: Array<React.JSX.Element>,
  github: string
}

export const proyectos: Array<Proyecto> = [
  {
    titulo: "Modelo de Prediccion Academica",
    img: "./images-projects/mpa.webp",
    link: "https://juanpamarquez.github.io/mpa-proyect/",
    info: [
      tech.react,
      tech.ts,
      tech.springBoot,
      tech.fastAPI,
      tech.mySQL
    ],
    github: "https://github.com/JuanPaMarquez/mpa-proyect/"
  },
  {
    titulo: "Links de Ayuda",
    img: "./images-projects/links.webp",
    link: "https://juanpamarquez.github.io/links/",
    info: [
      tech.react,
      tech.ts,
      tech.tailwindcss
    ],
    github: "https://github.com/JuanPaMarquez/links/"
  },
  {
    titulo: "App-Security",
    img: "./images-projects/security.webp",
    link: "https://juanpamarquez.github.io/app-segurity/",
    info: [
      tech.electron,
      tech.nodeJS,
      tech.secure
    ],
    github: "https://github.com/JuanPaMarquez/app-segurity/"
  },
  {
    titulo: "Buscar Peliculas",
    img: "./images-projects/movies.webp",
    link: "https://juanpamarquez.github.io/buscador-peliculas/",
    info: [
      tech.react,
      tech.ts,
      tech.apiQueries,
      tech.css,
    ],
    github: "https://github.com/JuanPaMarquez/buscador-peliculas/"
  },
  {
    titulo: "Genlist Desktop App",
    img: "./images-projects/genlist.webp",
    link: "https://juanpamarquez.github.io/genlist-website/",
    info: [
      tech.python,
      tech.pyqt,
      tech.sqlite
    ],
    github: "https://github.com/JuanPaMarquez/genlist-website/"
  },
  {
    titulo: "Tier Maker",
    img: "./images-projects/tierMaker.webp",
    link: "https://juanpamarquez.github.io/-07--tier-maker/",
    info: [
      tech.html,
      tech.css,
      tech.js,
    ],
    github: "https://github.com/JuanPaMarquez/-07--tier-maker/"
  },
  {
    titulo: "Documentacion",
    img: "./images-projects/docu.webp",
    link: "https://juanpamarquez.github.io/-13--Cuestionario-3/",
    info: [
      tech.html,
      tech.css,
      tech.js,
    ],
    github: "https://github.com/JuanPaMarquez/-13--Cuestionario-3/"
  },
  {
    titulo: "Learn CSS",
    img: "./images-projects/learn.webp",
    link: "https://juanpamarquez.github.io/-16--Cuestionario-4/",
    info: [
      tech.html,
      tech.css,
      tech.js,
    ],
    github: "https://github.com/JuanPaMarquez/-16--Cuestionario-4/"
  },
  {
    titulo: "En Memoria",
    img: "./images-projects/martin.webp",
    link: "https://juanpamarquez.github.io/-9--Cuestionario-2/",
    info: [
      tech.html,
      tech.css,
    ],
    github: "https://github.com/JuanPaMarquez/-9--Cuestionario-2/"
  },
  {
    titulo: "Gato creado con solo CSS",
    img: "./images-projects/gato.webp",
    link: "https://juanpamarquez.github.io/-11--Gato/",
    info: [
      tech.html,
      tech.css,
    ],
    github: "https://github.com/JuanPaMarquez/-11--Gato/"
  },
  {
    titulo: "Pinguino creado con solo CSS",
    img: "./images-projects/pingu.webp",
    link: "https://juanpamarquez.github.io/-18--Pinguino/",
    info: [
      tech.html,
      tech.css,
    ],
    github: "https://github.com/JuanPaMarquez/-18--Pinguino/"
  }
]