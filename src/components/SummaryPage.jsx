import { useState, useEffect } from "react";
import Confetti from "./Confetti.jsx";
import "../styles/SummaryPage.css";

function SummaryPage({ place, time }) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowConfetti(true), 300);
    setTimeout(() => setVisible(true), 500);
  }, []);

  return (
    <div className="summary-page">
      {showConfetti && <Confetti />}
      <div className={`summary-content ${visible ? 'visible' : ''}`}>
        <h1 className="summary-title">¡Ya tenemos plan! </h1>

        <div className="summary-card">
          <div className="summary-row">
            <span className="summary-icon">📍</span>
            <div>
              <p className="summary-label">Lugar</p>
              <p className="summary-value">{place}</p>
            </div>
          </div>
          <div className="summary-divider" />
          <div className="summary-row">
            <span className="summary-icon">⏰</span>
            <div>
              <p className="summary-label">Hora</p>
              <p className="summary-value">{time}</p>
            </div>
          </div>
          <div className="summary-divider" />
          <div className="summary-row">
            <span className="summary-icon">🗓️</span>
            <div>
              <p className="summary-label">Fecha</p>
              <p className="summary-value">Pues mañana xd (o alrato depende del contexto)
              </p>
            </div>
          </div>
        </div>

        <div className="gif-container">
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmJscXk2amMzdjBsZjV0MDUyamo0dG13dDZ0cGM2bDJhcHptYmR5bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sIV0wFDrsKNxe/giphy.gif"
            alt="Emocionado"
          />
        </div>
      </div>
    </div>
  );
}

export default SummaryPage;
