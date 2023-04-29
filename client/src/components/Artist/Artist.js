import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Artist = () => {
  const [songs, setSongs] = useState([]);
  const { artistName } = useParams();
  const API_URL = `http://localhost:5000/${artistName}`;
  

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setSongs(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [artistName]);

  return (
    <div className="artist">

  <h2>{artistName}</h2>
      <ul>
        {songs.map((song) => (
          <li key={song._id}>{song.title}</li>
        ))}
      </ul>

    </div>
  );


}

export default Artist;