import React, { useState } from "react";
import axios from "axios";

const AddSongs = () => {

  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [lyrics, setLyrics] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!artist || !title || !lyrics) {
      alert("Please fill in all fields");
      return;
    }
    axios.post("http://localhost:8080/", { artist, title, lyrics })
      .then((response) => {
       
        setArtist("");
        setTitle("");
        setLyrics("");
      })
      .catch((error) => {

      });
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

      <label htmlFor="title">Song Name:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
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