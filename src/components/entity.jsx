import React, { useState, useEffect } from "react";

const Entity = ({ name, entityEvidences, currentEvidencesValues, testOuais }) => {
  const [etat, setEtat] = useState("opaque-0");


  const createArray = (values) => {
    let res = [];
    for (let i = 0; i < 7; i++) {
      if (!values.includes(i)) {
        res.push(i);
      }
    }
    return res;
  };

  useEffect(() => {
    // Calculer l'état basé sur les props
    let values = etat.split("-");
    let modified = false;

    for (let elt of entityEvidences) {
      if (currentEvidencesValues[elt] == "2") {
        setEtat(`transparent-${values[1]}`);
        modified = true;
      }
    }

    for (let elt of entityEvidences) {
      if (currentEvidencesValues[elt] == "0" && !modified) {
        setEtat(`opaque-${values[1]}`);
        modified = true;
      }
    }
    let notEntityEvidences = createArray(entityEvidences);
    for (let elt of notEntityEvidences) {
      if (currentEvidencesValues[elt] == "1" && modified) {
        setEtat(`transparent-${values[1]}`);
        modified = true;
      }
    }
  }, [entityEvidences, currentEvidencesValues]); // Dépendances

  useEffect(() => {
    let cptCircled = 0
    let values = etat.split('-');

    for (let elt of entityEvidences){
      if (currentEvidencesValues[elt] && values[0] === 'opaque'){
        cptCircled++
      }
    }

    if (cptCircled >= 1){
      setEtat(`${values[0]}-2`)
    }
  }, [testOuais]) 

  const changeState = () => {
    let values = etat.split("-");
    let tmp = (parseInt(etat.split("-")[1]) + 1) % 3;

    setEtat((prevEtat) => `${values[0]}-${tmp}`);
    // Cette fonction changera l'état plus tard
    // Pour l'instant, elle peut être laissée vide ou avec un comportement de test
  };

  
  return (
    <div className="divEntity" onClick={changeState}>
      <p className={etat}>{name}</p>
    </div>
  );
};

export default Entity;
