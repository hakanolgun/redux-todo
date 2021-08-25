import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todosSlice";
import { nanoid } from "@reduxjs/toolkit";

function Form() {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: nanoid(), title: inputValue, completed: false }));
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeHolder="What needs to be done?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        autoFocus
      />
    </form>
  );
}

export default Form;
