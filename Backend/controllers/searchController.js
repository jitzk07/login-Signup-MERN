
const Image = require('../models/Image');

exports.searchImages = async (req, res) => {
  const { query } = req.query;

  try {
    const images = await Image.find({
      user: req.user.id,
      name: { $regex: query, $options: 'i' },
    });
    res.json(images);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
