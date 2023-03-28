
import React, { useState } from "react";


const AddSongs = () => {

  const [artist, setArtist] = useState("");
  const [songName, setSongName] = useState("");
  const [lyrics, setLyrics] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Artist: ${artist}, Song Name: ${songName}, Lyrics: ${lyrics}`);
    // You can use this information to send a request to a server or update state in your parent component
   
   
    // Clear the input values after submitting the form
   setArtist("");
   setSongName("");
   setLyrics("");
  
  };

  return (

    <form onSubmit={handleSubmit}>
      <label htmlFor="artist">Artist:</label>
      <input
        type="text"
        id="artist"
        value={artist}
        onChange={(event) => setArtist(event.target.value)}
      />

      <label htmlFor="songName">Song Name:</label>
      <input
        type="text"
        id="songName"
        value={songName}
        onChange={(event) => setSongName(event.target.value)}
      />

      <label htmlFor="lyrics">Lyrics:</label>
      <textarea
        id="lyrics"
        value={lyrics}
        onChange={(event) => setLyrics(event.target.value)}
      />

      <button type="submit">Add Song</button>
    </form>
  );








  
};

export default AddSongs;
