import { useState, useEffect } from "react";
import Confetti from "./Confetti.jsx";
import "../styles/YesPage.css";

function YesPage({ onContinue }) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 500);
    // Show continue button after a moment
    const btnTimer = setTimeout(() => {
      setShowButton(true);
    }, 1200);
    return () => { clearTimeout(timer); clearTimeout(btnTimer); };
  }, []);

  return (
    <div className="yes-page">
      {showConfetti && <Confetti />}
      <div className="yes-content">
        <h1 className="yes-title">JJAJAJ tkm panquesito </h1>
        <p className="yes-subtitle">Ahora dime ¿a dónde vamos? </p>
        <div className="gif-container">
          <img
            src="https://media.giphy.com/media/VM1fcpu2bKs1e2Kdbj/giphy.gif"
            alt="Celebración gatitoooo"
          />
        </div>
        {showButton && (
          <button className="continue-button" onClick={onContinue}>
            Elegir lugar 
          </button>
        )}
      </div>
    </div>
  );
}

export default YesPage;
