import { tech } from "./tech"

interface Proyecto {
  id: number,
  titulo: string,
  img: string,
  link: string,
  info: Array<React.JSX.Element>,
  github: string
}

export const proyectos: Array<Proyecto> = [
  {
    id: 2,
    titulo: "Modelo de Prediccion Academica",
    img: "./imgProjects/mpa.webp",
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
    id: 3,
    titulo: "App-Security",
    img: "./imgProjects/security.webp",
    link: "https://juanpamarquez.github.io/app-segurity/",
    info: [
      tech.electron,
      tech.nodeJS,
      tech.secure
    ],
    github: "https://github.com/JuanPaMarquez/app-segurity/"
  },
  {
    id: 1,
    titulo: "Buscar Peliculas",
    img: "./imgProjects/movies.webp",
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
    id: 4,
    titulo: "Genlist Desktop App",
    img: "./imgProjects/genlist.webp",
    link: "https://juanpamarquez.github.io/genlist-website/",
    info: [
      tech.python,
      tech.pyqt,
      tech.sqlite
    ],
    github: "https://github.com/JuanPaMarquez/genlist-website/"
  },
  {
    id: 5,
    titulo: "Documentacion",
    img: "./imgProjects/docu.webp",
    link: "https://juanpamarquez.github.io/-13--Cuestionario-3/",
    info: [
      tech.html,
      tech.css,
      tech.js,
    ],
    github: "https://github.com/JuanPaMarquez/-13--Cuestionario-3/"
  },
  {
    id: 7,
    titulo: "Learn CSS",
    img: "./imgProjects/learn.webp",
    link: "https://juanpamarquez.github.io/-16--Cuestionario-4/",
    info: [
      tech.html,
      tech.css,
      tech.js,
    ],
    github: "https://github.com/JuanPaMarquez/-16--Cuestionario-4/"
  },
  {
    id: 8,
    titulo: "En Memoria",
    img: "./imgProjects/martin.webp",
    link: "https://juanpamarquez.github.io/-9--Cuestionario-2/",
    info: [
      tech.html,
      tech.css,
    ],
    github: "https://github.com/JuanPaMarquez/-9--Cuestionario-2/"
  },
  {
    id: 9,
    titulo: "Gato creado con solo CSS",
    img: "./imgProjects/gato.webp",
    link: "https://juanpamarquez.github.io/-11--Gato/",
    info: [
      tech.html,
      tech.css,
    ],
    github: "https://github.com/JuanPaMarquez/-11--Gato/"
  },
  {
    id: 10,
    titulo: "Pinguino creado con solo CSS",
    img: "./imgProjects/pingu.webp",
    link: "https://juanpamarquez.github.io/-18--Pinguino/",
    info: [
      tech.html,
      tech.css,
    ],
    github: "https://github.com/JuanPaMarquez/-18--Pinguino/"
  }
]