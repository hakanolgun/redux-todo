import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeActiveFilter, clearCompleted } from "../redux/todos/todosSlice";

function ContentFooter() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todos.items);
  const itemsLeft = items.filter((item) => !item.completed).length;

  const activeFilter = useSelector((state) => state.todos.activeFilter);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong>
        &#8203; item{itemsLeft > 1 && "s"} left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#"
            onClick={() => dispatch(changeActiveFilter("all"))}
            className={activeFilter === "all" ? "selected" : ""}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => dispatch(changeActiveFilter("active"))}
            className={activeFilter === "active" ? "selected" : ""}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => dispatch(changeActiveFilter("completed"))}
            className={activeFilter === "completed" ? "selected" : ""}
          >
            Completed
          </a>
        </li>
      </ul>

      <button
        onClick={() => dispatch(clearCompleted())}
        className="clear-completed"
      >
        Clear completed
      </button>
    </footer>
  );
}

export default ContentFooter;
