import { useState } from "react";
import { todoList } from "../mockData";
import classes from "./Todo.module.scss";
import TodoItem from "./components/TodoItem/TodoItem";
import { v4 as uuidv4 } from "uuid";
import CreateTodo from "./components/createTodo/CreateTodo";
const TodoWrap = () => {
  const [todoListData, setTodoData] = useState(todoList);
  const handleCheckTodo = (completed, id) => {
    const copyList = [...todoListData];
    copyList.forEach((todo) => {
      if (todo.id == id) {
        return (todo.completed = completed);
      }
    });
    setTodoData(copyList);
  };

  const handleDeletetodo = (id) => {
    const copyList = [...todoListData];
    setTodoData(todoListData.filter((el) => el.id !== id));
  };

  const handleCreateTodoItem = (title) => {
    const copyList = [...todoListData];
    const todo = {
      userId: 1,
      id: Math.random(),
      title: title,
      completed: false,
    };
    copyList.push(todo);
    setTodoData(copyList);
  };
  return (
    <>
      <div className={classes.background}>
        <div className={classes.conteiner}>
          <div className={classes.display}>
            {todoListData.map((el) => {
              return (
                <TodoItem
                  key={uuidv4()}
                  title={el.title}
                  completed={el.completed}
                  id={el.id}
                  handleCheckTodo={handleCheckTodo}
                  handleDeletetodo={handleDeletetodo}
                />
              );
            })}
          </div>
          <CreateTodo handleCreateTodoItem={handleCreateTodoItem} />
        </div>
      </div>
    </>
  );
};

export default TodoWrap;
