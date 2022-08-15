import React from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { tasks as data } from "../data/Tasks";
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskID) {
    setTasks(tasks.filter((task) => task.id !== taskID));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
