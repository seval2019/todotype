import React, { ChangeEvent, FC } from "react";
import "./App.css";
import { useState } from "react";
import { todoType } from "./apptypes";
import TodoItem from "./TodoItem";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<todoType[]>([]);

  console.log(todoList);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else if (event.target.name === "workDay") {
      setWorkDay(Number(event.target.value));
    }
    console.log(task, workDay);
  };

  const addNewTask = (): void => {
    const newTask = { taskName: task, workDay: workDay };
    setTodoList([...todoList, newTask]);
    setTask("");
    setWorkDay(0);
  };

  const deleteTask = (nameToDelete: string) => {
    setTodoList(todoList.filter((task)=>{
      return task.taskName !== nameToDelete
    }))
  };

  return (
    <div className="App">
      <div className="maincard">
        <input
          className="maincardinput"
          type="text"
          value={task}
          name="task"
          placeholder="Taskınızı Giriniz..."
          onChange={handleChange}
        />
        <input
          className="maincardinput"
          type="number"
          value={workDay}
          name="workDay"
          placeholder="Kaç günde tamamlanmalı"
          onChange={handleChange}
        />
        <button className="maincardbutton" onClick={addNewTask}>
          Yeni task ekle
        </button>
      </div>
      <div className="todocard">
        {todoList.map((task: todoType, index: number) => {
          return <TodoItem key={index} task={task} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
