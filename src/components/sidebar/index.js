import React, { useState,useEffect } from 'react';
import './sidebar.css';
import SidebarButton from './sidebarButton';
import { FaPlay } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { IoLibrary } from "react-icons/io5";
import apiClient from '../../spotify';

export default function SideBar() {
    
    const [image,setImage] = useState("https://pbs.twimg.com/profile_images/1599831054881374224/sx4KqXNX_400x400.jpg");

    useEffect(() => {
      apiClient.get("me").then((response) => {
          console.log(response.data.images);
          setImage(response.data.images[0].url);
      });
    }, []);



  return (
    <div className='sidebar-container'>
    <img 
        src = {image}
        className='profile-img'
        alt = "profile"
    />
    <div>
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
        <SidebarButton title="Logout" to="/logout" icon={<IoIosLogOut />} /> {/* Replace with the actual logout icon */}

    </div>
    {/* <SidebarButton title="Sign Out" to = "/"  icon={<FaSignOutAlt />} /> */}
    </div>
  )
}
