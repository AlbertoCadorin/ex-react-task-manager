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

    const addTask = (newTasks) => {

    }

    const removeTask = (remove) => {

    }

    const updateTask = (update) => {

    }

    return { tasks, addTask, removeTask, updateTask }
}