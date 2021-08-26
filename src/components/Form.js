import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todosSlice";

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      return;
    }
    dispatch(
      addTodo({
        title: title,
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
