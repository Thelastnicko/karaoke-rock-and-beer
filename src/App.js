import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import SongList from "./components/SongList/SongList";
import Artist from "./components/Artist/Artist"; // import the new component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songlist" element={<SongList />} />
        <Route path="/artist" element={<Artist />} />
      </Routes>
    </Router>
  );
}

export default App;
