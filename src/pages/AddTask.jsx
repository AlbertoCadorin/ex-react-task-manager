import { useState, useRef } from "react";
import useTask from "../../hooks/useTask";

export default function AddTask() {
    const [title, setTitle] = useState("");
    const descriptionRef = useRef();
    const statusRef = useRef();
    const [errTitle, setErrTitle] = useState('');
    const { addTask } = useTask();

    const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";

    // validazione titolo 
    const validateTitle = (e) => {
        const value = e.target.value;
        setTitle(value);

        if (!value.trim()) {
            setErrTitle("Il titolo non può essere vuoto");
            return;
        }

        const hasSymbols = symbols.split("").some((symbol) => value.includes(symbol));
        if (hasSymbols) {
            setErrTitle("Il titolo non può contenere caratteri speciali");
        } else {
            setErrTitle("");
        }
    };

    // submit form
    const submitForm = (e) => {
        e.preventDefault();

        // Validazione finale prima di inviare
        if (!title.trim()) {
            setErrTitle("Il titolo non può essere vuoto");
            return;
        }
        const hasSymbols = symbols.split("").some((symbol) => title.includes(symbol));
        if (hasSymbols) {
            setErrTitle("Il titolo non può contenere caratteri speciali");
            return;
        }

        setErrTitle(""); // resetta errore se tutto ok

        console.log(`
            Titolo: ${title}
            Descrizione: ${descriptionRef.current.value}
            Stato: ${statusRef.current.value}
        `);

        addTask({
            title,
            description: descriptionRef.current.value,
            status: statusRef.current.value
        });


        // resetta i campi 
        setTitle("");
        descriptionRef.current.value = "";
        statusRef.current.value = "";

    };

    return (
        <div className="container">
            <h2>Aggiungi Task</h2>
            <form onSubmit={submitForm}>
                <input
                    type="text"
                    placeholder="Titolo"
                    value={title}
                    onChange={validateTitle}
                />
                {errTitle && <p className="error">{errTitle}</p>}

                <textarea
                    placeholder="Descrizione"
                    ref={descriptionRef}
                ></textarea>

                <select
                    name="status"
                    id="status"
                    ref={statusRef}
                >
                    <option value="">Seleziona uno stato</option>
                    <option value="To do">To Do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>

                <button type="submit">Aggiungi</button>
            </form>
        </div>
    );
}