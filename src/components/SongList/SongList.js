import React, { useState } from "react";

const SongList = () => {
  const [songs, setSongs] = useState([
    { id: 1, name: "Song 1", guest: "Guest 1", lyrics: "Lyrics 1" },
    { id: 2, name: "Song 2", guest: "Guest 2", lyrics: "Lyrics 2" },
    { id: 3, name: "Song 3", guest: "Guest 3", lyrics: "Lyrics 3" },
    { id: 4, name: "Song 4", guest: "Guest 4", lyrics: "Lyrics 4" },
    { id: 5, name: "Song 5", guest: "Guest 5", lyrics: "Lyrics 5" },
    { id: 6, name: "Song 6", guest: "Guest 6", lyrics: "Lyrics 6" },
    { id: 7, name: "Song 7", guest: "Guest 7", lyrics: "Lyrics 7" },
    { id: 8, name: "Song 8", guest: "Guest 8", lyrics: "Lyrics 8" },
    { id: 9, name: "Song 9", guest: "Guest 9", lyrics: "Lyrics 9" },
    { id: 10, name: "Song 10", guest: "Guest 10", lyrics: "Lyrics 10" },
    { id: 11, name: "Song 11", guest: "Guest 11", lyrics: "Lyrics 11" },
    { id: 12, name: "Song 12", guest: "Guest 12", lyrics: "Lyrics 12" },
    { id: 13, name: "Song 13", guest: "Guest 13", lyrics: "Lyrics 13" },
    { id: 14, name: "Song 14", guest: "Guest 14", lyrics: "Lyrics 14" },
    { id: 15, name: "Song 15", guest: "Guest 15", lyrics: "Lyrics 15" },
    { id: 16, name: "Song 16", guest: "Guest 16", lyrics: "Lyrics 16" },
    { id: 17, name: "Song 17", guest: "Guest 17", lyrics: "Lyrics 17" },
    { id: 18, name: "Song 18", guest: "Guest 18", lyrics: "Lyrics 18" },
    { id: 19, name: "Song 19", guest: "Guest 19", lyrics: "Lyrics 19" },
    { id: 20, name: "Song 20", guest: "Guest 20", lyrics: "Lyrics 20" },
  ]);

  const [selectedSong, setSelectedSong] = useState(null);

  const handleSongClick = (song) => {
    setSelectedSong(song);
  };

  const handleDelete = (id) => {
    const newSongs = songs.filter((song) => song.id !== id);
    setSongs(newSongs);

    // If the deleted song is currently selected, reset selectedSong to null
    if (selectedSong && selectedSong.id === id) {
      setSelectedSong(null);
    }
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
                <a href="#" onClick={() => handleSongClick(song)}>
                  {song.name}
                </a>
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
