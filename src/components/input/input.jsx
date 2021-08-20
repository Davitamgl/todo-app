import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { saveTodo } from '../../redux/todoSlice'

import "./input.styles.scss";

const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  
  const addToDo = () => {
    dispatch(saveTodo({
      item: input,
      done: false,
      id: Date.now()
    }))
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addToDo}>Add</button>
    </div>
  );
};

export default Input;
//rafce
//rxslice
