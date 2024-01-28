import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
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
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        {albumPhotos.map((photo) => (
          <Grid item xs={2} sm={4} md={4} key={photo.id}>
            <div className="modal-item">
              <img src={photo.thumbnailUrl} alt={photo.title} />
            </div>
          </Grid>
        ))}
      </Grid>
    </Modal>
  );
};

export default AlbumModal;
