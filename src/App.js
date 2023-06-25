import "./styles.css";
import React, { useState } from "react";
import { useRef } from "react";

export default function App() {
  // initialiser les variables à vide
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const container = useRef(null);
  const validation = useRef(null);
  const [nb, setNb] = useState(0);

  // ajouter un élément à la liste
  function addItem() {
    //affichage de la chaine de caractère entrée sur la console

    if (!newItem) {
      alert("Entrez un élément..");
      return;
    }

    // élément et ses caractéristiques
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    // ajout d'élément à la suite de la liste actuelle
    setItems((oldList) => [...oldList, item]);

    // vide le champ de saisie à la fin (pour la nettoyer)
    setNewItem("");
  }

  // ajouter un élément à la liste
  function removeItem(id) {
    //affichage de la chaine de caractère entrée sur la console
    //console.log(id);

    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  function valider(id) {
    // changement de couleur du container
    // container.current.style.background = "green";

    // incrémentation
    setNb((nb) => nb + 1);

    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App">
      {/* Zone de titre */}
      <h1>To Do List</h1>
      <h2>Start to be productive!</h2>

      <div className="div-saisir">
        {/* Champs de saisie */}
        <input
          type="text"
          value={newItem}
          placeholder="Ajoute à la liste.."
          onChange={(elem) => setNewItem(elem.target.value)}
        />

        {/* Bouton ajouter */}
        <button className="btn btn-ajouter" onClick={() => addItem()}>
          Ajouter
        </button>
      </div>

      {/* Liste */}
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <div ref={container} className="container">
                {/* élément de la liste */}
                {item.value}

                {/* bouton : supprimer */}
                <button
                  className="btn btn-rm shaking"
                  onClick={() => removeItem(item.id)}
                >
                  <img src="/img/icon/icon-close.png" alt="" />
                </button>

                {/* bouton : valider */}
                <button
                  className="btn btn-valider shaking"
                  ref={validation}
                  onClick={() => valider(item.id)}
                >
                  <img src="/img/icon/icon-valide.png" alt="" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="footer-count">
        Nombre de tâches effectuées : <span>{nb}</span>
      </div>
    </div>
  );
}
