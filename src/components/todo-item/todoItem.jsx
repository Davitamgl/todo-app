import React from "react";
import "./todoItem.styles.scss";

import Checkbox from "@material-ui/core/Checkbox";

import { useDispatch } from "react-redux";
import { setCheck } from "../../redux/todoSlice";

const ToDoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(setCheck(id));
  };
  return (
    <div className="todo-item">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <p className={done ? "checked" : null}>{name}</p>
    </div>
  );
};

export default ToDoItem;
