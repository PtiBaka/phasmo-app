import React, { useEffect } from "react";
import Entity from "./entity";
import '../styles/entities.css'

const Entities = ({ entities, evidencesState, testOuais}) => {
  
  return (
    <div id="entities_parent">
      <p id="entities_parent_p">
      D'après les preuves que nous avons rassemblées, nous pensons que l'entité est de type :
      </p>
      <div id="entities">
      {entities.map(([name, entityEvidences], index) => (
        <Entity key={index} name={name} entityEvidences={entityEvidences} currentEvidencesValues={evidencesState} testOuais={testOuais}/>
      ))}
    </div>
    </div>
  );
};

export default Entities;
