const mongoose = require('mongoose')


const SongsSchema = mongoose.Schema({
    title:String,
    artist:String,
    lyrics:String
})


module.exports = mongoose.model('Songs' ,SongsSchema)