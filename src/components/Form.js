import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todosSlice";
import { nanoid } from "@reduxjs/toolkit"


function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title === ""){
      return
    }
    dispatch(
      addTodo({
        id: nanoid(),
        title: title,
        completed: false,
      })
    );
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeHolder="What needs to be done?"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}

export default Form;
