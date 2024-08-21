import React, { useEffect } from "react";
import Evidence from "./evidence";
import "../styles/evidences.css";
const Evidences = ({
  evidences,
  evidencesState,
  eliminateButton,
  clickOnEvidence,
}) => {
  return (
    <div id="evidences">
      {evidences.map((nom, index) => (
        <Evidence
          key={index}
          index={index}
          name={nom}
          clickOnEvidence={clickOnEvidence}
        />
      ))}

      <div id="ze_button">
        <button onClick={eliminateButton}>Barrer entités<br />(Mode cauchemar)
        </button>
      </div>
    </div>
  );
};

export default Evidences;
