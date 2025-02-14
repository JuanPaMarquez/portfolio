import { useEffect, useState } from "react";
import { proyectos as projects } from "../../lib/proyectos";
import { tech } from "../../utils/techIcons"


export default function useProjects() {
  const [proyectos, setProyects] = useState(projects);
  const [tecnologias] = useState(Object.entries(tech));
  const [techSelect, setTechSelect] = useState<Array<React.JSX.Element>>([]);

  const filterProjects = (tech: React.JSX.Element) => {
    if (techSelect.includes(tech)) {
      setTechSelect(techSelect.filter((el) => el !== tech));
    } else {
      setTechSelect([...techSelect, tech]);
    }
  }

  useEffect(() => {
    if (techSelect.length === 0) {
      setProyects(projects);
    } else {
      setProyects(projects.filter(proyecto => {
        return techSelect.every(tecnologia => proyecto.info.includes(tecnologia))
      }))
    }

  }, [techSelect]);

  return { proyectos, tecnologias, filterProjects };
}