import { useState } from "react";
import classes from "./TodoItem.module.scss";
const TodoItem = ({
  id,
  title,
  completed,
  handleCheckTodo,
  handleDeletetodo,
}) => {
  return (
    <>
      <div className={classes.todo}>
        <div className={classes.todo__item}>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => handleCheckTodo(e.target.checked, id)}
          />
          {title}
        </div>
        <div className={classes.button__wrap}>
          <button
            className={classes.button}
            onClick={() => handleDeletetodo(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
