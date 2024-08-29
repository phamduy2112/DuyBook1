import React from 'react'
import { AiFillMessage } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { PiListDashes } from "react-icons/pi";
import { HiHome } from "react-icons/hi";
import './css/Header.css'
function Header() {
  return (
<div className='bg-white'>
<nav className="navbar w-[80%] m-auto">

<div className="nav-left">
  <div className='flex justify-center items-center gap-5'>
    <h3 id="logo" className='text-[20px]'>DuyBook</h3>
    <div className="search-box">
    <img src="images/search.png" alt =""/>
    <input type="text" placeholder="Search" />
  </div>
  </div>
  
  <ul className="navlogo">
    <li><img src="images/notification.png" alt=''/></li>
    <li><img src="images/inbox.png"  alt=''/></li>
    <li><img src="images/video.png" alt=''/></li>
  </ul>
</div>
<div className="nav-right">

  <div className="profile-image">
    <img src="images/profile-pic.png" alt="" />
  </div>
</div>
{/* <div className="user-settings">
  <div className="profile-darkButton">
    <div className="user-profile">
      <img src="images/profile-pic.png" alt />
      <div>
        <p> Alex Carry</p>
        <a href="#">See your profile</a>
      </div>
    </div>
    <div id="dark-button">
      <span />
    </div>
  </div>
  <hr />
  <div className="user-profile">
    <img src="images/feedback.png" alt />
    <div>
      <p> Give Feedback</p>
      <a href="#">Help us to improve</a>
    </div>
  </div>
  <hr />
  <div className="settings-links">
    <img src="images/setting.png" alt className="settings-icon" />
    <a href="#">Settings &amp; Privary <img src="images/arrow.png" alt /></a>
  </div>
  <div className="settings-links">
    <img src="images/help.png" alt className="settings-icon" />
    <a href="#">Help &amp; Support <img src="images/arrow.png" alt /></a>
  </div>
  <div className="settings-links">
    <img src="images/Display.png" alt className="settings-icon" />
    <a href="#">Display &amp; Accessibility <img src="images/arrow.png" alt /></a>
  </div>
  <div className="settings-links">
    <img src="images/logout.png" alt className="settings-icon" />
    <a href="#">Logout <img src="images/arrow.png" alt /></a>
  </div>
</div> */}
</nav>
</div>  
 

  )
}

export default Header
