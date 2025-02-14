import { useState } from "react";

interface Props {
  children: React.ReactNode;
  index: number;
  filterProjects: (tech: React.JSX.Element) => void;
  element: React.JSX.Element;
}

export default function Tecnologia({ children, index, filterProjects, element }: Props ) {
  const [isSelect, setIsSelect] = useState(false);

  const handleClick = () => {
    setIsSelect(!isSelect);
    filterProjects(element);
  }
  
  return (
    <div key={index} onClick={handleClick} className={isSelect ? "select" : ""}>
      {children}
    </div>
  )
}
