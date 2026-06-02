import { useEffect, useState } from "react";
import "../styles/confetti.css";

function Confetti() {
    const [confettiPieces,setConfettiPieces]= useState([]);
    
    useEffect (() => {
        const pieces = [];
        const colors = ['#ff6b9d', '#c44569', '#f7b731', '#5352ed', '#3498db', '#2ecc71'];
    
        //for para poder crear los confettis yeiiiii
        for (let i = 0; i<50; i++){
            pieces.push({
                id: i,
                left: Math.random() * 100, //Posicion horizontal
                animationDelay: Math.random() * 3, //Retraso en la animacion
                backgroundColor: colors[Math.floor(Math.random() * colors.length)], //Color aleatorio
                animationDuration: 3 + Math.random() * 2, //Duracion de la animacion
            });
        }
            setConfettiPieces(pieces);
    },[])

    return (
        <div className="confetti-container">
        {confettiPieces.map((pieces) => (
            <div
                key={pieces.id}
                className="confetti-piece"
                style={{
                    left: `${pieces.left}%`,
                    backgroundColor: pieces.backgroundColor,
                    animationDelay: `${pieces.animationDelay}s`,
                    animationDuration: `${pieces.animationDuration}s`,
                }}
            />
        ))}

        </div>
    );
}
export default Confetti;
