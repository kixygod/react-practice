import "../styles/ToDos.scss";
import "../styles/Main.scss";

const ToDo = ({ todoInfo }) => {
  return (
    <div>
      {todoInfo.completed ? (
        <div>
          <input type="checkbox" checked />
          {todoInfo.title}
        </div>
      ) : (
        <div>
          <input type="checkbox" disabled />
          <s>{todoInfo.title}</s>
        </div>
      )}
    </div>
  );
};

export default ToDo;
