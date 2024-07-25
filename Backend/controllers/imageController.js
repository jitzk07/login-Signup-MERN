
const Image = require('../models/Image');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

exports.uploadImage = upload.single('image');

exports.createImage = async (req, res) => {
  const { name, folder } = req.body;
  const imageUrl = req.file.path;

  try {
    const image = new Image({
      name,
      imageUrl,
      folder,
      user: req.user.id,
    });

    await image.save();
    res.json(image);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getImages = async (req, res) => {
  try {
    const images = await Image.find({ user: req.user.id }).populate('folder');
    res.json(images);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
