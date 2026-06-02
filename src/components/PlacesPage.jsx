import { useState } from "react";
import "../styles/QuestionPage.css";

const PLACES = [
  { id: 1, name: "Maru Cafe  ☕", emoji: "☕", desc: "Este no esta en la roma (como todo) esta en la cuauhtemoc " },
  { id: 2, name: "Comida Tailandesa ", emoji: "🥭", desc: "Gran comida y buenos postres " },
  { id: 3, name: "Un bundak y ya  🌳", emoji: "🌳", desc: "Gran opcion, nunca falla" },
  { id: 4, name: "Comida coreana ", emoji: "🍜", desc: "Unicamente para llevar pero se ve rico" },
  { id: 5, name: "Te cocino yo ", emoji: "🍦", desc: "Nomameestanoporfavor ntc  , si jalo a cocinarte algo" },
  { id: 6, name: "Sorpresa 🎁", emoji: "🎁", desc: "Yo elijo, tú confías en mí" },
];

function PlacesPage({ onSelect }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="places-page">
      <h1 className="places-title">¿A dónde vamos? 🗺️</h1>
      <p className="places-subtitle">Elige el lugar perfecto </p>
      <div className="places-grid">
        {PLACES.map((place) => (
          <div
            key={place.id}
            className={`place-card ${selected === place.id ? 'selected' : ''}`}
            onClick={() => setSelected(place.id)}
          >
             <h3 className="place-name">{place.name}</h3>
            <p className="place-desc">{place.desc}</p>
          </div>
        ))}
      </div>
      {selected && (
        <button
          className="continue-button"
          onClick={() => onSelect(PLACES.find(p => p.id === selected).name)}
        >
          Siguiente (si fue que yo te cocine ctm)
        </button>
      )}
    </div>
  );
}

export default PlacesPage;
