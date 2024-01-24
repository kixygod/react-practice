import { useState, useEffect } from "react";
import Modal from "react-modal";
import { useParams } from "react-router-dom";
import { getAlbumPhotos } from "../services/AlbumService";
import "../styles/Modals.scss";

const AlbumModal = ({ albumId, isOpen, onRequestClose }) => {
  const { id } = useParams();
  const [photos, setAlbum] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const data = await getAlbumPhotos(id, albumId);
          setAlbum(data);
        } catch (error) {
          console.error("Error fetching album:", error);
        }
      }
    };

    fetchData();
  }, [id, albumId]);

  const albumPhotos = [];
  let offset = 0;
  if (albumId === null) {
    offset = albumId * 10;
  } else {
    offset = (albumId - 1) * 10;
  }
  console.log("albumId", albumId);
  console.log("OFFSET", offset);

  if (photos.length === 0) {
    return <div>Loading...</div>;
  } else {
    for (let i = 0; i < 10; i++) {
      albumPhotos[i] = photos[i + offset];
    }
  }

  console.log("DATA:", albumPhotos);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="modal-overlay"
    >
      {albumPhotos.map((photo) => (
        <div className="modal-column">
          <div className="modal-item">
            <h2>{photo.title}</h2>
            <img src={photo.url} alt={photo.title} />
          </div>
        </div>
      ))}
    </Modal>
  );
};

export default AlbumModal;
