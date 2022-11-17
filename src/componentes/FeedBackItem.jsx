import { useState } from "react";

const FeedbackItem = () => {

    //Estados: presisten información a traves del ciclo de vida de un UNICO componente
    
    const [rating, setRating ] = useState(2) 
    const [text, setText] = useState("Mejorar Curso, Mejores Recursos")
    
    const addNota= () =>{
        //Cambiar estado a rating
        //Parametro para el valor anterior

        setRating((prev) => {
            return prev + 1
        })
    }
    const restNota= () =>{
        //Cambiar estado a rating
        //Parametro para el valor anterior

        setRating((prev) => {
            return prev - 1
        })
    }

    return(
        <div className="card">
            <div className="num-display">
                {rating }
            </div>
            <div className="text-display">
                {text}
            </div>
        <button onClick={addNota }>
            Sumar Nota
        </button>

        <button onClick={restNota }>
            Restar Nota
        </button>
        </div>
    )
}

export default FeedbackItem;