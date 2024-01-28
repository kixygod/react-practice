import "../styles/FullUser.scss";
import ToDoList from "../components/ToDoList";
import AlbumList from "./AlbumList";
import { Link } from "react-router-dom";

const FullUser = ({ user }) => {
  return (
    <div>
      <div className="full-user-row">
        <div className="full-user-child">
          <div>
            <strong>First name: </strong>
            {user.name}
          </div>
          <div>
            <strong>Nickname: </strong>
            {user.username}
          </div>
          <div>
            <strong>Email: </strong>
            {user.email}
          </div>
          <div>
            <strong>Phone: </strong>
            {user.phone}
          </div>
          <div>
            <strong>Adress: </strong>
            {user.address.suite}, {user.address.street}, {user.address.city},{" "}
            {user.address.zipcode}
          </div>
          <div>
            <strong>Website: </strong>
            {user.website}
          </div>
          <div>
            <strong>Company: </strong>
            {user.company.name}
            <div>
              <i>"{user.company.catchPhrase}"</i>
            </div>
            <hr />
            <div>{user.company.bs}</div>
          </div>
          <Link key={user.id} to={{ pathname: `/users/${user.id}/todos` }}>
            <div className="todo-button">
              <p>All ToDo</p>
            </div>
          </Link>
          <Link key={user.id} to={{ pathname: `/users/${user.id}/todos` }}>
            <div className="todo-button">
              <p>All Albums</p>
            </div>
          </Link>
        </div>
        <div className="full-user-child-second">
          <div className="full-user-column">
            <div className="second">
              <ToDoList userId={user.id} />
            </div>
            <div className="second">
              <AlbumList userId={user.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullUser;
