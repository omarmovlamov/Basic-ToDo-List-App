import React from "react";
import { todoType } from "./types";

type PropsType = {
  task: todoType;
  deleteTask(toDelete: string): void;
};

function TodoItem({ task, deleteTask }: PropsType) {
  return (
    <div>
      <div className="card animate__animated animate__backInUp">
        <p>
          <span>Your Mission : </span>
          {task.taskName === "" ? "I will waste my time" : task.taskName}
        </p>
        <p>
          <span>Remaining Day : </span>
          {task.workDay === undefined ? 1 : task.workDay}
        </p>
        <button id="delete" onClick={() => deleteTask(task.taskName)}>
          Delete
        </button>
      </div>
    </div>
  );
}


export default TodoItem;
