import { createContext, useState, useEffect } from "react";

export const API_URL = import.meta.env.VITE_API_URL;

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

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

    return (
        <GlobalContext.Provider value={{ tasks, setTasks }}>
            {children}
        </GlobalContext.Provider>
    );
};
