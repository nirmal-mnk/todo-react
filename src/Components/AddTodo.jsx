import { useState, useRef } from "react";

export default function AddTodo({ getAddedTodo }) {
  const [todoname, setName] = useState("");
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoname !== "") {
      getAddedTodo(todoname);
      setName("");
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="card-main">
        <div className="card-sub">
          <div className="card-left">
            <button type="button" className="iconbtn checkbtn">
              <img src={require("../Images/plus-blue.png")} alt="" />
            </button>
            <input
              type="text"
              className="entertodo"
              name="todo"
              value={todoname}
              onChange={(e) => setName(e.target.value)}
              ref={inputRef}
              placeholder="What Needs to be Done?"
            />
          </div>
          <div className="card-right">
            <button type="submit" className="addbtn">
              Add Todo
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
