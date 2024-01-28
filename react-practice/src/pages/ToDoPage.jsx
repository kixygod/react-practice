import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import ToDoList from "../components/ToDoList";
import '../styles/ToDos.scss';

const ToDoPage = () => {
  const { id } = useParams();
  return (
    <div>
      <NavBar />
      <div className="todopage-row">
        <ToDoList userId={id} className="todopage-todo-list"/>
      </div>
    </div>
  );
};

export default ToDoPage;
