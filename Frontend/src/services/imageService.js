// src/services/imageService.js
import axios from 'axios';

const API_URL = '/api/images/';

const uploadImage = async (imageData) => {
  const response = await axios.post(API_URL, imageData, {
    headers: {
      'x-auth-token': JSON.parse(localStorage.getItem('user')).token,
    },
  });
  return response.data;
};

const getImages = async () => {
  const response = await axios.get(API_URL, {
    headers: {
      'x-auth-token': JSON.parse(localStorage.getItem('user')).token,
    },
  });
  return response.data;
};

const searchImages = async (query) => {
  const response = await axios.get(`/api/search?query=${query}`, {
    headers: {
      'x-auth-token': JSON.parse(localStorage.getItem('user')).token,
    },
  });
  return response.data;
};

const imageService = {
  uploadImage,
  getImages,
  searchImages,
};

export default imageService;
