const express = require("express");
const router = express.Router();
const Songs = require("../models/Songs");

// Define a route
router.get("/", async (req, res) => {
  const data = await Songs.find();
  res.json(data);
});

router.post("/", (req, res) => {
  const post = new Songs({
    title: req.body.title,
    artist: req.body.artist,
    lyrics: req.body.lyrics,
  });

  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({
        message: err,
      });
    });
});

module.exports = router;
