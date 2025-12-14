import { useContext } from "react";
import { TaskContext } from "./components/TaskProvider";
import TaskForm from "./components/TaskForm";
import CompletedTaskList from "./components/CompletedTaskList";
import TaskList from "./components/TaskList";

function App() {
  const { openSection, toggleSection, addTask } = useContext(TaskContext);

  return (
    <div className="app">
      <div className="task-container">
        <h1>Task List with Priority</h1>
        <button
          className={`close-button ${openSection.taskList ? "open" : ""}`}
          onClick={() => toggleSection("taskList")}
        >
          +
        </button>
        {openSection.taskList && <TaskForm addTask={addTask} />}
      </div>

      <div className="task-container">
        <h2>Tasks</h2>
        <button
          className={`close-button ${openSection.tasks ? "open" : ""}`}
          onClick={() => toggleSection("tasks")}
        >
          +
        </button>

        {openSection.tasks && <TaskList />}
      </div>

      <div className="completed-task-container">
        <h2>Completed tasks</h2>
        <button
          className={`close-button ${openSection.completedTasks ? "open" : ""}`}
          onClick={() => toggleSection("completedTasks")}
        >
          +
        </button>
        {openSection.completedTasks && <CompletedTaskList />}
      </div>
    </div>
  );
}

export default App;
