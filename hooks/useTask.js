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
    const addTask = async newTask => {
        const response = await fetch(`${API_URL}/tasks`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTask)
        });

        const { success, message, task } = await response.json()
        if (!success) throw new Error(message);

        setTasks(prev => [...prev, task])

    }

    // eliimiina task

    const removeTask = async taskId => {
        const response = await fetch(`${API_URL}/tasks/${taskId}`, {
            method: "DELETE"
        });

        const { success, message } = await response.json()
        if (!success) throw new Error(message)

        setTasks(prev => prev.filter(task => task.id != taskId))

    }

    // aggiorna task
    const updateTask = (update) => {

    }

    return { tasks, addTask, removeTask, updateTask }
}