import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./sidebar.css"

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(()=>{
    const getcats = async () => {
      const res = await axios.get("http://localhost:5000/api/categories")
      setCats(res.data)
    }
    getcats();
  },[])
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className='sidebarTitle'>About Me</span>
        <img src="https://images.pexels.com/photos/8797307/pexels-photo-8797307.jpeg?auto=compress&cs=tinysrgb&w=500&h=450&dpr=1" alt="" />
        <p>
        Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
      <span className='sidebarTitle'>CATEGORIES</span>
      <ul className="sidebarList">
        {cats.map((c)=> (
          <Link to={`/?cat=${c.name}`} className="link"><li className="sidebarListItem">{c.name}</li></Link>
         ))}
      </ul>
      </div>
      <div className="sidebarItem">
      <span className='sidebarTitle'>FOLLOW US</span>
      <div className="sidebarSocial">
      <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
      </div>
      </div>
    </div>
  )
}

export default Sidebar