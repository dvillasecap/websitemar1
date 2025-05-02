const express = require('express');
const router = express.Router();
const axios = require('axios');

// Get popular movies
router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`);
    res.json(response.data.results);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});

module.exports = router;