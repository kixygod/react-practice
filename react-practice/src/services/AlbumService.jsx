const getAlbum = async (userId, albumId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/albums?id=${albumId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching album:", error);
    throw error;
  }
};

const getAlbums = async (userId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/albums`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching albums:", error);
    throw error;
  }
};

const getAlbumPhoto = async (userId, photoId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${userId}/photos?id=${photoId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching album photo:", error);
    throw error;
  }
};

const getAlbumPhotos = async (userId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${userId}/photos`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching album photos:", error);
    throw error;
  }
};

export { getAlbum, getAlbums, getAlbumPhoto, getAlbumPhotos };
