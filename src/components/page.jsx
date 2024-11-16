import React, { useEffect, useState } from "react";
import Evidences from "./evidences";
import Entities from "./entities";
import "../styles/page.css";

const Page = () => {
  const [evidencesState, useEvidencesState] = useState([]);
  const [testOuais, useTestOuais] = useState(false);
  const [evidenceClicked, setEvidenceClicked] = useState(false);

  useEffect(() => {
    useEvidencesState([0, 0, 0, 0, 0, 0, 0]);
  }, []);

  const eliminateButton = () => {
    useTestOuais(!testOuais);
  };

  useEffect(() => {
    getEvidencesStates();
  }, [evidenceClicked]);

  const getEvidencesStates = () => {
    let tmp = [];
    let divs = document.getElementsByClassName("divEvidence");
    for (let i = 0; i < divs.length; i++) {
      let classe = divs[i].childNodes[0].attributes.class.value;
      let elt = classe.split("-")[1];
      tmp.push(parseInt(elt));
    }
    useEvidencesState(tmp);
  };

  const clickedEvidence = () => {
    setEvidenceClicked(!evidenceClicked);
  }
  const evidences = [
    "EMF 5",
    "D.O.T.S Projector",
    "Ultraviolets",
    "Orbes",
    "Ecriture",
    "Spirit Box",
    "Températures",
  ];

  /**
   * EMF 0
   * DOTS 1
   * UV 2
   * Orbes 3
   * Ecriture 4
   * Spirit 5
   * Temperature 6
   */
  const entities = [
    ["Esprit", [0, 5, 4]],
    ["Spectre", [0, 5, 1]],
    ["Fantôme", [5, 2, 1]],
    ["Poltergeist", [5, 2, 4]],
    ["Banshee", [3, 2, 1]],
    ["Djinn", [0, 6, 2]],
    ["Cauchemar", [3, 5, 4]],
    ["Revenant", [3, 6, 4]],
    ["Ombre", [0, 6, 4]],
    ["Demon", [6, 2, 4]],
    ["Yurei", [3, 6, 1]],
    ["Oni", [0, 6, 1]],
    ["Yookai", [3, 5, 1]],
    ["Hantu", [3, 6, 2]],
    ["Goryo", [0, 2, 1]],
    ["Myling", [0, 2, 4]],
    ["Onryo", [3, 5, 6]],
    ["Jumeaux", [0, 5, 6]],
    ["Raiju", [0, 3, 1]],
    ["Obake", [0, 3, 2]],
    ["Le Mimic", [5, 6, 2]],
    ["Moroi", [5, 6, 4]],
    ["Deogen", [5, 4, 1]],
    ["Thaye", [3, 4, 1]],
  ];
  return (
    <>
      <div id="titre">
        <p>Preuves</p>
      </div>

      <Evidences
        evidences={evidences}
        evidencesState={evidencesState}
        eliminateButton={eliminateButton}
        clickOnEvidence={clickedEvidence}
      />

      <Entities
        entities={entities}
        evidencesState={evidencesState}
        testOuais={testOuais}
      />
    </>
  );
};

export default Page;
