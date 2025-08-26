import { memo } from "react";

const TaskRow = memo(({ task }) => {

    return (
        <tr key={task.id}>
            <td>{task.title}</td>
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
