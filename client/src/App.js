import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import SongList from "./components/SongList/SongList";
import Artist from "./components/Artist/Artist"; 
import AddSongs from "./components/Songs/AddSongs";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addsong" element={<AddSongs />} />
        <Route path="/songList" element={<SongList />} />
        <Route path="/artist/:artistName" element={<Artist />} />

      </Routes>
    </>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}