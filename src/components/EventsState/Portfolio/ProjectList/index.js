import React from "react";

const ProjectList = ({projects}) => {
  return (
    <div>
      {projects.map((p, i) => {
        return <img key={i} alt={p.category} src={p.img}/>
      })}
    </div>
  );
}

export default ProjectList;
