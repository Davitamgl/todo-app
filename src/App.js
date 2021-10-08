import React from "react";
import "./App.scss";
import Input from "./components/input/input";
import ToDoItem from "./components/todo-item/todoItem";

import { useSelector } from "react-redux";
import { selectTodoList } from "./redux/todoSlice";

const App = () => {
  const toDoList = useSelector(selectTodoList);

  return (
    <div className="app-container">
      <div>
        <h1>Todo App</h1>
      </div>
      <div className="app">
        <div className="todo-container">
          {toDoList.map((item) => (
            <ToDoItem
              name={item.item}
              done={item.done}
              id={item.id}
              key={item.id}
            />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
};

export default App;
