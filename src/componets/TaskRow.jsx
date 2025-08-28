import { memo } from "react";
import { Link } from "react-router-dom";

const TaskRow = memo(({ task }) => {

    return (
        <tr key={task.id}>
            <td><Link to={`/task/${task.id}`}>{task.title}</Link></td>
            <td className={
                task.status === "To do" ? "status-todo" :
                    task.status === "Doing" ? "status-doing" :
                        "status-done"
            }>
                {task.status}
            </td>
            <td>{new Date(task.createdAt).toLocaleString()}</td>
        </tr>
    );
});

export default TaskRow;
