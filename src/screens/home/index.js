// import React ,{useState,useEffect} from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Library from '../library/library';
// import Player from '../player/player';

// import SideBar from '../../components/sidebar';
// import Login from '../auth/login';
// import {setClientToken} from "../../spotify.js"

// export default function Home() {
//  const [token,setToken] = useState("");



// useEffect(() => {
//   const token = window.localStorage.getItem("token");
//   const hash = window.location.hash;
//   window.location.hash = "";
//   if (!token && hash) {
//     const _token = hash.split("&")[0].split("=")[1];
//     window.localStorage.setItem("token", _token);
//     setToken(_token);
//     setClientToken(_token);
//   } else {
//     setToken(token);
//     setClientToken(token);
//   } 
// }, []);



//   return !token ? (
//     <Login />
//     )
//     : (
//       <Router>
//       <div className='main-body'>
//       <SideBar />
//         <Routes>
//         <Route path="/" element={<Library />} />
//           <Route path="/player" element={<Player />} />
//         </Routes>
//       </div>
//       </Router>
//   )
// }


// import React ,{useState,useEffect} from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Library from '../library/library';
// import Player from '../player/player';
// // import Trending from '../trending/trending';
// // import Favorites from '../favourites/favorites';
// // import Feed from '../feed/feed';
// import './home.css'; // Import the CSS file
// import SideBar from '../../components/sidebar';
// import Login from '../auth/login';
// import {setClientToken} from "../../spotify.js"

// export default function Home() {
//  const [token,setToken] = useState("");



// useEffect(() => {
//   const token = window.localStorage.getItem("token");
//   const hash = window.location.hash;
//   window.location.hash = "";
//   if (!token && hash) {
//     const _token = hash.split("&")[0].split("=")[1];
//     window.localStorage.setItem("token", _token);
//     setToken(_token);
//     setClientToken(_token);
//   } else {
//     setToken(token);
//     setClientToken(token);
//   } 
// }, []);



//   return !token ? (
//     <Login />
//     )
//     : (
//       <Router>
//       <div className='main-body'>
//       <SideBar />
//         <Routes>
//         <Route path="/" element={<Library />} />
//           <Route path="/player" element={<Player />} />
//         </Routes>
//       </div>
//       </Router>
//   )
// }



import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from '../library/library';
import Player from '../player/player';
import Logout from '../logout/logout';
import SideBar from '../../components/sidebar';
import Login from '../auth/login';
import './home.css';
import { setClientToken } from "../../spotify.js"

export default function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    // Check if there is a token in local storage when the application starts
    const storedToken = window.localStorage.getItem("token");

    if (storedToken) {
      // Remove the token from local storage to start fresh
      window.localStorage.removeItem("token");
      setToken(""); // Update the state to trigger rendering
      return; // Exit the useEffect to prevent further code execution
    }

    // Check if there is a token in the URL hash
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const tokenFromHash = hashParams.get('access_token');

    if (tokenFromHash) {
      // Save the token to local storage and set it in state
      window.localStorage.setItem("token", tokenFromHash);
      setToken(tokenFromHash);
      setClientToken(tokenFromHash);
    } else {
      // Use the token from local storage if available
      setToken(storedToken);
      setClientToken(storedToken);
    }

    // Clean up when the component is unmounted or when the application is exited
    return () => {
      // Remove the token from local storage when the component is unmounted
      window.localStorage.removeItem("token");
      // Perform any additional cleanup if needed
    };
  }, []);

  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className='main-body'>
        <SideBar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/player" element={<Player />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

