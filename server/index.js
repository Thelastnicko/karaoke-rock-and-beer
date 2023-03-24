const express = require('express')

const app = express();

//routes



// Define a route
app.get('/', (req, res) => {
    res.send('Hello World!');
  });


// Start the server
app.listen(8080, () => {
    console.log('Server listening on port 8080');
  });