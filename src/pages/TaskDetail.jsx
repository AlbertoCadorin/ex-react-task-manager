import { useContext } from "react";
import { GlobalContext } from "../contextet/GlobalContext";
import { useParams } from "react-router-dom";

export default function TaskDetail() {

    const { id } = useParams();
    const { tasks } = useContext(GlobalContext);
    const task = tasks.find(task => task.id === parseInt(id));

    if (!task) {
        return <p>Task non trovata</p>;
    }

    const handleDelete = () => {
        console.log(`task eliminata: ${task.id}`);
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
