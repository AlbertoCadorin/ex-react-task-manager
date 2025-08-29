import { useContext } from "react";
import { GlobalContext } from "../contextet/GlobalContext";
import { useParams, useNavigate } from "react-router-dom";

export default function TaskDetail() {

    const { id } = useParams();
    const { tasks } = useContext(GlobalContext);
    const task = tasks.find(task => task.id === parseInt(id));
    const { removeTask } = useContext(GlobalContext);

    const navigate = useNavigate();

    if (!task) {
        return <p>Task non trovata</p>;
    }

    const handleDelete = async e => {
        e.preventDefault();
        console.log(`Elimina la task con id: ${task.id}`);

        try {
            await removeTask(task.id);
            alert("Task eliminata con successo!");
        } catch (error) {
            alert("Errore durante l'eliminazione della task: " + error.message);
        }

        navigate("/");
    };

    return (
        <div>
            <h2>Dettagli Task</h2>
            <section>
                <p>Title: {task.title}</p>
                <p>Description: {task.description}</p>
                <p>Status: {task.status}</p>
                <p>Created At: {new Date(task.createdAt).toLocaleString()}</p>
            </section>
            <button onClick={handleDelete}>Elimina la Task </button>
        </div>
    );
}
