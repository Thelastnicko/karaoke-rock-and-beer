import React, { useState } from "react";

const SongList = () => {
  const [songs, setSongs] = useState([
    { id: 1, name: "Song 1", guest: "Guest 1", lyrics: "Lyrics 1" },
    { id: 2, name: "Song 2", guest: "Guest 2", lyrics: "Lyrics 2" },
    { id: 3, name: "Song 3", guest: "Guest 3", lyrics: "Lyrics 3" },
  ]);

  const [selectedSong, setSelectedSong] = useState(null);

  const handleSongClick = (song) => {
    setSelectedSong(song);
  };

  const handleDelete = (id) => {
    const newSongs = songs.filter((song) => song.id !== id);
    setSongs(newSongs);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Song Name</th>
            <th>Guest</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr key={song.id}>
              <td>
                <button onClick={() => handleSongClick(song)}>
                  {song.name}
                </button>
              </td>
              <td>{song.guest}</td>
              <td>
                <button onClick={() => handleDelete(song.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedSong && (
        <div>
          <h2>{selectedSong.name}</h2>
          <p>{selectedSong.lyrics}</p>
        </div>
      )}
    </div>
  );
};

export default SongList;
