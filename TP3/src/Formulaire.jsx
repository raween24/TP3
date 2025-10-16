import React, { useState } from "react";

function Formulaire() {
 
  const [nom, setNom] = useState("");

  const handleClick = () => {
    if (nom.trim() !== "") {
      alert(`Bonjour, ${nom} !`);
    } else {
      alert("Veuillez saisir un nom.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Entrez votre nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)} 
      />
      <button onClick={handleClick}>Dire Bonjour</button>
    </div>
  );
}

export default Formulaire;
