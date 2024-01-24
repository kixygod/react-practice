import "../styles/Albums.scss";

const AlbumItem = ({ albumInfo }) => {
  return (
    <div className="album-item">
      <p>{albumInfo.title}</p>
    </div>
  );
};

export default AlbumItem;
