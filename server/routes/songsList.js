const express = require('express');
const router = express.Router();
const Songs = require("../models/Songs");

router.get('/artist/:artistName', (req, res) => {
  const artistName = req.params.artistName;

  Song.find({ artist: artistName })
    .then((songs) => {
      res.send(`Songs by ${artistName}`);
    })
    .catch((error) => {
      console.log(error);
    })
});

module.exports = router