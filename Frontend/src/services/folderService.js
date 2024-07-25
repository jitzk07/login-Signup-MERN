// src/services/folderService.js
import axios from 'axios';

const API_URL = '/api/folders/';

const createFolder = async (folderData) => {
  const response = await axios.post(API_URL, folderData, {
    headers: {
      'x-auth-token': JSON.parse(localStorage.getItem('user')).token,
    },
  });
  return response.data;
};

const getFolders = async () => {
  const response = await axios.get(API_URL, {
    headers: {
      'x-auth-token': JSON.parse(localStorage.getItem('user')).token,
    },
  });
  return response.data;
};

const folderService = {
  createFolder,
  getFolders,
};

export default folderService;
