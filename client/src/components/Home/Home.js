import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import "./Home.css"

const Home = () => {
  const [songs, setSongs] = useState([]);
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  useEffect(() => {
   
    axios.get('http://localhost:8080') 
      .then(response => {
        setSongs(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>
        {songs.map(song => (
          <div key={song._id}>
            <h2>{song.title}</h2>
            <h4>{song.artist}</h4>
            <p>{song.lyrics}</p>
          </div>
        ))}
      </div>
      <ul>
        {alphabet.map((letter) => (
          <li key={letter}>
            <a className="alphabet" href={`#${letter}`}>{letter}</a>
          </li>
        ))}
      </ul>
      {alphabet.map((letter) => (
        <React.Fragment key={letter}>
          <h2 id={letter}>{letter}</h2>
          <p>This is the section for the letter {letter}.</p>
        </React.Fragment>
      ))}
      <h3>
        <Link to="/artist">Alice In Chains</Link>
      </h3>
    </>
  );
};

export default Home;