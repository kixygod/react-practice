import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAlbums } from "../services/AlbumService";
import "../styles/Albums.scss";
import AlbumModal from "./AlbumModal";
import AlbumItem from "./AlbumItem";

const AlbumList = ({ userId }) => {
  const { id } = useParams();
  const [albums, setAlbums] = useState([]);
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const data = await getAlbums(userId);
          setAlbums(data);
        } catch (error) {
          console.error("Error fetching albums:", error);
        }
      }
    };

    fetchData();
  }, [id, userId]);

  if (albums.length === 0) return <div>Loading...</div>;

  const openModal = (albumId) => {
    setSelectedAlbumId(albumId);
  };

  const closeModal = () => {
    setSelectedAlbumId(null);
  };

  return (
    <div className="album-body">
      {albums.map((album) => (
        <div key={album.id} onClick={() => openModal(album.id)}>
          <AlbumItem albumInfo={album} />
        </div>
      ))}

      {/* Модальное окно */}
      <AlbumModal
        albumId={selectedAlbumId}
        isOpen={selectedAlbumId !== null}
        onRequestClose={closeModal}
      />
    </div>
  );
};

export default AlbumList;
