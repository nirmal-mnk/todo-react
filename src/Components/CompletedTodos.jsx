export default function CompletedTodos(props) {
  const completedTodos = props.completedtodo;
  const restoreTodo = (todo) => {
    props.getRestore(todo);
  };
  return (
    <div className="completed-todos-main">
      <h2>Completed </h2>
      <div className="completed-todos-sub">
        {completedTodos.map((todo) => (
          <div className="card-main" key={todo.id}>
            <div className="card-sub">
              <div className="card-left">
                <button
                  type="button"
                  className="iconbtn checkbtn"
                  onClick={() => restoreTodo(todo)}
                >
                  <img src={require("../Images/tick.png")} alt="Tick Icon" />
                </button>
                <p>
                  <s>{todo.name}</s>
                </p>
              </div>
              <div className="card-right"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
