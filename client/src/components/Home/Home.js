import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [data, setData] = useState([]);
  const API_URL = 'http://localhost:5000';

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));

  return (
    <div>
      <ul>
        {alphabet.map((letter) => (
          <div key={letter}>
            <h2>{letter}</h2>
            {data.filter(item => item.artist.charAt(0).toUpperCase() === letter).map((item) => (
             <li key={item._id}>
            <Link to={`/artist/${item.artist}`}>
              {item.artist}
            </Link>
            </li>
      ))}
    </div>
    ))}
    </ul>
    </div>
  );
};

export default Home;