import { useContext } from "react";
import { TaskContext } from "./TaskProvider";

function TaskItem({ task }) {
  const { title, priority, deadline, id, completed } = task;

  const { handleCompleteTask, handleDeleteTask } = useContext(TaskContext);

  return (
    <li className={`task-item ${priority.toLowerCase()}`}>
      <div className="task-info">
        <p>
          {title} <strong>{priority}</strong>
        </p>

        <div className="task-deadline">
          Due: {new Date(deadline).toLocaleString()}
        </div>
      </div>

      <div className="task-buttons">
        {!completed && (
          <button
            className="complete-button"
            onClick={() => handleCompleteTask(id)}
          >
            Complete
          </button>
        )}

        <button className="delete-button" onClick={() => handleDeleteTask(id)}>
          Delete
        </button>
      </div>
    </li>
  );
}
export default TaskItem;
