import React ,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from '../library/library';
import Player from '../player/player';
// import Trending from '../trending/trending';
// import Favorites from '../favourites/favorites';
// import Feed from '../feed/feed';
import './home.css'; // Import the CSS file
import SideBar from '../../components/sidebar';
import Login from '../auth/login';
import {setClientToken} from "../../spotify.js"

export default function Home() {
 const [token,setToken] = useState("");



useEffect(() => {
  const token = window.localStorage.getItem("token");
  const hash = window.location.hash;
  window.location.hash = "";
  if (!token && hash) {
    const _token = hash.split("&")[0].split("=")[1];
    window.localStorage.setItem("token", _token);
    setToken(_token);
    setClientToken(_token);
  } else {
    setToken(token);
    setClientToken(token);
  } 
}, []);



  return !token ? (
    <Login />
    )
    : (
      <Router>
      <div className='main-body'>
      <SideBar />
        <Routes>
        <Route path="/" element={<Library />} />
          <Route path="/player" element={<Player />} />
        </Routes>
      </div>
      </Router>
  )
}

