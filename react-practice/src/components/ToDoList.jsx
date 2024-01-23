import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTodos } from "../services/ToDoService";
import "../styles/ToDos.scss";
import ToDo from "./ToDo";

const ToDoList = ({ userId }) => {
  const { id } = useParams();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const data = await getTodos(userId);
          setTodos(data);
        } catch (error) {
          console.error("Error fetching todos:", error);
        }
      }
    };

    fetchData();
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
