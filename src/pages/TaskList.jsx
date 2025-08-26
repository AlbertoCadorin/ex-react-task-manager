import { GlobalContext } from "../contextet/GlobalContext";
import { useContext } from "react";
import TaskRow from "../componets/TaskRow";



export default function TaskList() {

    const { tasks } = useContext(GlobalContext);

    return (
        <div className="container">
            <h1>Task List</h1>
            <table>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>state</th>
                        <th>date</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <TaskRow key={task.id} task={task} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
