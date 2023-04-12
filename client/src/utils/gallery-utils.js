// // import axios from 'axios';
 import axios from '../axiosConfig';
//import axios from "axios";

export const getCategoryArtworks = (artworks, category) => {
  return artworks[category];
};

export const getCategoryPreview = (artworks, category) => {
  return artworks[category].slice(0, 1)[0];
};

// export const fetchGallery = async () => {
//   const galleryData = await axios.get(`/api/artwork`);
//   const convertedData = convertGallery(galleryData.data);
//   return convertedData;
// };

// export const fetchCategory = async (category) => {
//   const galleryData = await axios.get(`/api/artwork/${category}`);
//   const convertedData = convertGallery(galleryData.data);
//   return convertedData;
// };

// export const fetchArtwork = async (artwork) => {
//   const galleryData = await axios.get(`/api/artwork/${artwork.category}/${artwork.id}`);
//   const convertedData = convertGallery(galleryData.data);
//   return convertedData;
// };



export const convertGallery = (artworks) => {
  const newGallery = {};
  const categories = [...new Set(artworks.map((artwork) => artwork.category))];
  categories.forEach((category) => (newGallery[category] = {}));
  for (let category in newGallery) {
    const categoryArtworks = artworks.filter(function (artwork) {
      return artwork.category === category;
    });
    newGallery[category] = categoryArtworks;
  }
  return newGallery;
};
