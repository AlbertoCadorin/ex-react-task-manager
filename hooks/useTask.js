import { useState, useEffect } from "react";
export const API_URL = import.meta.env.VITE_API_URL;

export default function useTask() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch(`${API_URL}/tasks`);
            const data = await response.json();
            console.log(data);
            setTasks(data);
        };
        fetchTasks();
    }, []);

    // aggiungi una task
    const addTask = async ({ title, description, status }) => {
        try {
            const response = await fetch(`${API_URL}/tasks`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, description, status })
            });

            const result = await response.json();
            if (result.succes) {
                setTasks(prev => [...prev, result.tasks]);
                alert("Task aggiunto con successo!");
            } else {
                throw new Error(result.message || "Errore creazione task");
            }
        } catch (error) {
            console.error("Failed to add task:", error);
            alert(`Errore nella creazione della task: ${error}`);
        }
    }

    // eliimiina task
    const removeTask = (remove) => {

    }

    // aggiorna task
    const updateTask = (update) => {

    }

    return { tasks, addTask, removeTask, updateTask }
}