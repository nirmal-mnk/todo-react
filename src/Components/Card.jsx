import { useState } from "react";
import { useEffect } from "react";
import circleIcon from "../Images/circle.png";
import TickIcon from "../Images/tick.png";
import { useRef } from "react";

export default function Card(props) {
  const [toggleicon, setToggleicon] = useState(circleIcon);
  const [inputedit, setInputEdit] = useState(true);
  const inputRef = useRef(null);
  const todo = props.todo;
  const handleComplete = (todo) => {
    props.getCompletedTodo(todo);
  };
  const handleDelete = (todo) => {
    props.getDelete(todo);
  };
  const handleEdit = (todo) => {
    setInputEdit(false);
    inputRef.current.focus();
  };
  const editTodo = (e, todo) => {
    e.preventDefault();
    props.getEditTodo(e.target.value, todo);
  };
  return (
    <div className="card-main card-hover">
      <div className="card-sub">
        <div className="card-left">
          <button
            type="button"
            className="iconbtn checkbtn"
            onMouseEnter={() => setToggleicon(TickIcon)}
            onMouseLeave={() => setToggleicon(circleIcon)}
            onClick={() => handleComplete(todo)}
          >
            <img src={toggleicon} alt="Circle Icon" />
          </button>
          <form>
            <input
              type="text"
              className="todo-name"
              value={props.todo.name}
              name="todo"
              onChange={(e) => editTodo(e, todo)}
              ref={inputRef}
              readOnly={inputedit}
              onBlur={() => setInputEdit(true)}
            />
          </form>
        </div>
        <div className="card-right">
          <button
            type="button"
            className="iconbtn"
            onClick={() => handleEdit(todo)}
          >
            <img src={require("../Images/edit.png")} alt="Edit Icon" />
          </button>
          <button
            type="button"
            className="iconbtn"
            onClick={() => handleDelete(todo)}
          >
            <img src={require("../Images/delete.png")} alt="Delete Icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
