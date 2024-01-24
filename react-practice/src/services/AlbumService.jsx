const getAlbum = async (userId, albumId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums?id=${albumId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching album:', error);
    throw error;
  }
}

const getAlbums = async (userId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching albums:', error);
    throw error;
  }
}

export { getAlbum, getAlbums };
