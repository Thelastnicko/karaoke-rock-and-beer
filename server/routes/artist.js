const express = require("express");
const router = express.Router();
const Songs = require("../models/Songs");

router.get('/:artist/:title', async (req, res) => {
    try {
        const artist = req.params.artist;
        const songName = req.params.title;
        const song = await Songs.findOne({ artist: artist, name: songName });
        if (song) {
            res.send(song);
        } else {
            res.status(404).send('Song not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;