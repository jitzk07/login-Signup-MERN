const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const folderRoutes = require('./routes/folderRoutes');
const imageRoutes = require('./routes/imageRoutes');
const searchRoutes = require('./routes/searchRoutes');
const path = require('path');
const cors = require('cors');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/folders', folderRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/search', searchRoutes);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

module.exports = app;
