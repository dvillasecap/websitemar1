const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const movieRoutes = require('./routes/movies');
const reviewRoutes = require('./routes/reviews');

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/movies', movieRoutes);
app.use('/api/reviews', reviewRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

module.exports = app;