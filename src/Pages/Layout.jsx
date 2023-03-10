import GradientElements from "../Components/GradientElements";
import Header from "../Components/Header";
import Card from "../Components/Card";
import { useState, useRef, useEffect } from "react";
import AddTodo from "../Components/AddTodo";
import CompletedTodos from "../Components/CompletedTodos";

export default function Layout() {
  const [todos, setTodos] = useState([]);
  const [completedtodo, setCompletedTodo] = useState([]);
  const messagesRef = useRef(null);
  const getAddedTodo = (data) => {
    setTodos([...todos, newTodo(data)]);
  };
  const newTodo = (data) => {
    return { id: Date.now(), name: data, completed: false };
  };
  const getCompletedTodo = (data) => {
    setCompletedTodo([...completedtodo, data]);
    deleteTodo(data);
  };
  const getDelete = (data) => {
    deleteTodo(data);
  };
  const deleteTodo = (data) => {
    const removeCompleted = todos.filter((todo) => todo.id !== data.id);
    setTodos(removeCompleted);
  };

  const getEditTodo = (data, todo) => {
    const editedTodo = todos.map((mytodo) => {
      if (mytodo.id === todo.id) {
        return { ...mytodo, name: data };
      } else {
        return mytodo;
      }
    });
    setTodos(editedTodo);
  };
  const getRestore = (data) => {
    setTodos([...todos, data]);
    const checkCompleted = completedtodo.filter((todo) => todo.id !== data.id);
    setCompletedTodo(checkCompleted);
  };
  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [todos]);
  return (
    <div className="main-layout">
      <div className="inner-layout">
        <GradientElements />
        <Header />
        <div className="cards-group">
          <div className="cardsgroup-sub" ref={messagesRef}>
            {todos.map((todo) => (
              <Card
                key={todo.id}
                todo={todo}
                getCompletedTodo={getCompletedTodo}
                getDelete={getDelete}
                getEditTodo={getEditTodo}
              />
            ))}
          </div>
          <AddTodo getAddedTodo={getAddedTodo} />
        </div>
        <div className="completed-todos">
          {completedtodo.length > 0 && (
            <CompletedTodos
              key={completedtodo.id}
              completedtodo={completedtodo}
              getRestore={getRestore}
            />
          )}
        </div>
      </div>
    </div>
  );
}
