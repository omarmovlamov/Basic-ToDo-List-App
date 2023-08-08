import { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { todoType } from "./types";
import TodoItem from "./TodoItem";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>();
  const [todoList, setTodoList] = useState<todoType[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setWorkDay(Number(event.target.value));
    }
  };
  const addNewTask = (): void => {
    const newTask = { taskName: task, workDay: workDay };
    setTodoList([...todoList, newTask]);
    setTask("");
    setWorkDay(1);
  };

  const deleteTask = (toDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== toDelete;
      })
    );
  };
  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={task}
          name="task"
          onChange={handleChange}
          placeholder="Enter your task"
        />
        <input
          type="number"
          onChange={handleChange}
          name="workDay"
          value={workDay}
          min="1"
          placeholder="How long to complete it?"
        />
        <button id="add" onClick={addNewTask}>
          Add New Task
        </button>
      </div>
      <div className="card-container">
        {todoList.map((task: todoType, index: number) => {
          return <TodoItem key={index} task={task} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
