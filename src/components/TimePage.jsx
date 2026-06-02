import { useState } from "react";
import "../styles/TimePage.css";

function TimePage({ onConfirm }) {
  const [time, setTime] = useState("");
  const [touched, setTouched] = useState(false);

  const handleChange = (e) => {
    setTime(e.target.value);
    setTouched(true);
  };

  // Format time nicely e.g. "3:30 PM"
  const formatTime = (t) => {
    if (!t) return "";
    const [h, m] = t.split(":").map(Number);
    const ampm = h >= 12 ? "PM" : "AM";
    const hour = h % 12 || 12;
    return `${hour}:${String(m).padStart(2, "0")} ${ampm}`;
  };

  return (
    <div className="time-page">
      <div className="time-content">
        <h1 className="time-title">¿A qué hora? ⏰</h1>
        <p className="time-subtitle">Ponle hora a nuestro plan</p>

        <div className="time-picker-wrapper">
          <input
            type="time"
            className="time-input"
            value={time}
            onChange={handleChange}
          />
          {touched && time && (
            <p className="time-preview">Te veo a las <strong>{formatTime(time)}</strong> 💗</p>
          )}
        </div>

        {time && (
          <button className="continue-button" onClick={() => onConfirm(formatTime(time))}>
            ¡Perfecto! Ver resumen ✨
          </button>
        )}
      </div>
    </div>
  );
}

export default TimePage;
