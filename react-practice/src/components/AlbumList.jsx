import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getAlbums } from "../services/AlbumService";
import "../styles/Albums.scss";
import AlbumItem from "./AlbumItem";

const AlbumList = ({ userId }) => {
  const { id } = useParams();
  const [albums, setAlbums] = useState([]);

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

  return (
    <div className="album-body">
      {albums.map((album) => (
        <Link key={album.id} to={{ pathname: `/albums/${album.id}/photos` }}>
          <AlbumItem albumInfo={album} />
        </Link>
      ))}
    </div>
  );
};

export default AlbumList;
