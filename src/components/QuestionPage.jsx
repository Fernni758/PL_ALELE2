import { useState,useEffect, use } from "react";
import "../styles/questionPage.css";    


function QuestionPage({onYesClick}) {
    const mensajes =[
        "seguraaaa que no???",
        "estas segurisimaaa???",
        "no me dejes asi :(",
        "porfis dime que si :)",
        "no me hagas esto :(",
        "okey ya entendi vete con el otr@ :)",
        "pero sabes que te voy a extrañar mucho :(",
        "aceptalo :(",
        "andale di que si <3" ,
    ];

    //Estado para cambiar mensjae del texto de no a la lista de mensajes
    const [noMessage, setNoMessage]=useState("no");

    //Estado para manejar el indice de los mensajes 
    const [messageIndex, setMessageIndex]= useState(0);

    //Estado para cambiar el tamñao de la leta del boton si
    const [yesBtnSize, setYesBtnSize]= useState(2);

    useEffect (()=> {
        console.log("Tamaño de la letra del boton si es de: ", yesBtnSize);

    },[yesBtnSize]);

    //Funcnion para manejar el click en el boton de no 
    const handleNoClick = () => {
        setNoMessage (mensajes[messageIndex])
        setMessageIndex (messageIndex + 1);
        setYesBtnSize ((tamañoActual) => tamañoActual *1.5);

    }

    return (

        <div className="question-container">
            <h1 className="question-title">¿Quieres salir o q corazón?</h1>
            <div className="buttons-container">
                <button 
                    className= "yes-button"
                    onClick={onYesClick}
                    style = {{fontSize: `${yesBtnSize}rem`}}>
                    Si
                </button>
                <button 
                    className="no-button"
                    onClick={handleNoClick}>
                    {noMessage}
                </button>
            </div>
            <div className="image-container">
                <img
                    src="https://media.giphy.com/media/xT39CQIcoWQXQ5peco/giphy.gif" 
                            alt="Gatito enamorado"
                />
            </div>
        </div>
    );

}

export default QuestionPage;