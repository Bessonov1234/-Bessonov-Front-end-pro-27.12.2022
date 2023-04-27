import { useState } from "react";
import classes from "./CreateTodo.module.scss";
const CreateTodo = ({ handleCreateTodoItem }) => {
  const [value, setValue] = useState("");

  const handleGetValue = () => {
    if (!value) return;
    handleCreateTodoItem(value);
    setValue("");
  };
  return (
    <>
      <div className={classes.input_create_todo}>
        <div className={classes.input_create_todo}></div>
        <input
          type="text"
          value={value}
          className={classes.input_create_todo__input}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className={classes.input_create_todo__button}
          onClick={() => handleGetValue(value)}
        >
          Create Todo
        </button>
      </div>
    </>
  );
};

export default CreateTodo;
