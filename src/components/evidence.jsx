import React, { useState } from "react";

const Evidence = ({ index, name, clickOnEvidence }) => {
  const [etat, setEtat] = useState(0);

  const changeState = () => {
      setEtat((prevEtat) => (prevEtat + 1) %3);
      clickOnEvidence();
      // Passez la nouvelle valeur à updateEvidencesState
  };

  /**
   * opaque-0 : Opaque Normal
   * opaque-1 : Opaque Entouré
   * opaque-2 : Opaque Barré
   * transparent-3 : Transparent Normal
   * transparent-4 : Transparent Entouré
   * transparent-5 : Transparent Barré
   */

  return (
    <div className="divEvidence" onClick={changeState}>
      <p className={`opaque-${etat}`}>{name}</p>
    </div>
  );
};

export default Evidence;
