import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/ToDos.scss";
import ToDo from "./ToDo";

const ToDoList = ({ userId }) => {
  const { id } = useParams();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        .then((res) => res.json()) // Parse the response as JSON
        .then((data) => setTodos(data))
        .catch((error) => {
          console.error("Error fetching todos:", error);
        });
    }
  }, [id, userId]);

  if (todos.length === 0) return <div>Loading...</div>;
  return (
    <div className="todo-body">
      {todos.map((todo) => (
        <div key={todo.id}>
          <ToDo todoInfo={todo} />
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
