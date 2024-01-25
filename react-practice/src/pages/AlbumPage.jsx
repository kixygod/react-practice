import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAlbumPhotos } from "../services/AlbumService";
import { RingLoader } from "react-spinners";

import ImageGallery from "react-image-gallery";
import NavBar from "../components/NavBar";
import "../styles/Albums.scss";

const AlbumPage = () => {
  const { id } = useParams();
  const [photos, setAlbum] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const data = await getAlbumPhotos(id);
          setAlbum(data);
        } catch (error) {
          console.error("Error fetching album:", error);
        }
      }
    };

    fetchData();
  }, [id]);

  const images = [];
  if (photos.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <RingLoader color="#99BC85" size={50} />
      </div>
    );
  } else {
    for (let i = 0; i < photos.length; i++) {
      images[i] = {
        original: photos[i]["url"],
        thumbnail: photos[i]["thumbnailUrl"],
      };
    }
  }

  return (
    <div>
      <NavBar />
      <ImageGallery items={images} />
    </div>
  );
};

export default AlbumPage;
