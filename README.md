# Task List App

A simple and intuitive task management application built with React and Vite. Organize your tasks by priority and deadline, track completed items, and manage your productivity efficiently.

## Features

- **Add Tasks**: Create new tasks with a title, priority level (Low, Medium, High), and deadline.
- **Task Management**: View active tasks, mark them as completed, or delete them.
- **Priority Visualization**: Tasks are color-coded based on priority for quick identification.
- **Completed Tasks**: Separate section to view and manage completed tasks.
- **Collapsible Sections**: Toggle visibility of task form, active tasks, and completed tasks.
- **Responsive Design**: Clean, modern UI that works on various screen sizes.

## Technologies Used

- **React**: For building the user interface with components and state management.
- **Vite**: Fast build tool and development server.
- **CSS**: Custom styles for a polished look and feel.
- **Context API**: For global state management of tasks and UI sections.

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd task-list
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

## Usage

- **Adding a Task**: Click the "+" button in the "Task List with Priority" section to expand the form. Fill in the title, select priority, set a deadline, and click "Add task".
- **Viewing Tasks**: Active tasks are displayed in the "Tasks" section with priority-based styling.
- **Completing a Task**: Click the "Complete" button on a task to move it to the completed list.
- **Deleting a Task**: Click the "Delete" button to remove a task permanently.
- **Toggling Sections**: Use the "+" buttons to show or hide sections as needed.

## Project Structure

```
src/
├── components/
│   ├── TaskForm.jsx          # Form for adding new tasks
│   ├── TaskList.jsx          # List of active tasks
│   ├── TaskItem.jsx          # Individual task component
│   ├── CompletedTaskList.jsx # List of completed tasks
│   └── TaskProvider.jsx      # Context provider for state management
├── App.jsx                   # Main app component
├── main.jsx                  # Entry point
└── index.css                 # Global styles
```

## Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run preview`: Preview the production build
- `npm run lint`: Run ESLint for code quality checks

## Contributing

Feel free to fork the repository and submit pull requests for improvements or bug fixes.

## License

This project is open source and available under the [MIT License](LICENSE).
