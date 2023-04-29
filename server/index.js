const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv/config')



//Import routes
const songsRoute = require('./routes/songs')
const songsList = require('./routes/songsList')
const artist = require('./routes/artist')


//middlewares
app.use(cors({ origin: "*" }));
app.use(bodyParser.json())


//routes
app.use('/', songsRoute)
app.use('/songsList', songsList)
app.use('/songs', artist)




//Connect database
mongoose.connect(process.env.DB_CONNECTION)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});



//Start the server
app.listen(5000, () => {
    console.log('Server listening on port 5000');
  });