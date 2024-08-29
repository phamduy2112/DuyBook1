import React from "react";
import Header from "../../template/user-template/component/Header/Header";
import "./css/home.css";
import { NavLink } from "react-router-dom";
import { FaClock, FaHeart, FaLocationArrow, FaRegComment, FaUserFriends } from "react-icons/fa";
import { MdGroups2, MdVideocam } from "react-icons/md";
import { IoClose, IoImages } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { TbAntennaBars1 } from "react-icons/tb";

function Home() {
  return (
    <>
      <Header />
      <div className="">
        <div className="container w-[80%] m-auto">
          <div className="left-sidebar">
            <div className="important-links">
              <NavLink to="#" className="font-semibold">
                <img
                  src="images/member-1.png"
                  alt=""
                  className="w-[45px] mr-[15px] rounded-[50%]"
                />
                Latest News
              </NavLink>
              <NavLink to="#" className="font-medium">
                <FaUserFriends
                  className="text-[25px] w-[45px] mr-[15px] rounded-[50%]"
                  style={{ color: "#1876f2" }}
                />
                Bạn bè
              </NavLink>
              <NavLink to="#" className="font-medium">
                <FaClock
                  className="text-[25px] w-[45px] mr-[15px] rounded-[50%]"
                  style={{ color: "#1876f2" }}
                />
                Kỷ niệm
              </NavLink>
              <NavLink to="#" className="font-medium">
                <FaUserFriends
                  className="text-[25px] w-[45px] mr-[15px] rounded-[50%]"
                  style={{ color: "#1876f2" }}
                />
                Đã lưu
              </NavLink>
              <NavLink to="#" className="font-medium">
                <MdGroups2
                  className="text-[25px] w-[45px] mr-[15px] rounded-[50%]"
                  style={{ color: "#1876f2" }}
                />
                Nhóm
              </NavLink>
              <NavLink to="#" className="font-medium">
                <MdVideocam
                  className="text-[25px] w-[45px] mr-[15px] rounded-[50%]"
                  style={{ color: "#1876f2" }}
                />
                Video
              </NavLink>

              <a href="#">See More</a>
            </div>
            <div className="shortcut-links">
              <p>Your Shortcuts</p>
              <a href="#">
                {" "}
                <img src="images/shortcut-1.png" alt="" />
                Web Developers
              </a>
              <a href="#">
                {" "}
                <img src="images/shortcut-2.png" alt="" />
                Web Design Course
              </a>
              <a href="#">
                {" "}
                <img src="images/shortcut-3.png" alt="" />
                Full Stack Development
              </a>
              <a href="#">
                {" "}
                <img src="images/shortcut-4.png" alt="" />
                Website Experts
              </a>
            </div>
          </div>
          {/* main-content------- */}
          <div className="content-area">
            <div className="story-gallery">
              <div className="story">
                <div className="absolute top-0">
                  <img src="http://localhost:3000/images/member-1.png" className="h-[135px] w-[120px] " alt="" />
                </div>
                <div className="bg-white w-[100%] h-[40px] flex flex-col justify-center items-center">
                 <div className="w-[30px] h-[30px] rounded-full bg-blue-600 flex justify-center items-center relative bottom-4">
                 <FiPlus className="text-white text-[17px] cursor-pointer"/>
             
                 </div>
                 {/* <p className="text-[13px]">Tạo tin</p> */}
                </div>
                
               
              </div>
              {/* <div className="story story2">
                <img src="images/member-1.png" alt="" />
                <p>Alison</p>
              </div>
              <div className="story story3">
                <img src="images/member-2.png" alt="" />
                <p>Jackson</p>
              </div>
              <div className="story story4">
                <img src="images/member-3.png" alt="" />
                <p>Samona</p>
              </div>
              <div className="story story5">
                <img src="images/member-4.png" alt="" />
                <p>John</p>
              </div> */}
            </div>
            <div className="write-post-container">
              <div className="user-profile">
                <img src="images/profile-pic.png" alt="" />
                <div>
                  <p> Alex Carry</p>
                  <small>
                    Public <i className="fas fa-caret-down" />
                  </small>
                </div>
              </div>
              <div className="post-upload-textarea">
                <textarea
                  name=""
                  placeholder="What's on your mind, Alex?"
                  cols={30}
                  rows={3}
                  defaultValue={""}
                />
                <div className="add-post-links">
                  <a href="#">
                    <img src="images/live-video.png" alt="" />
                    Live Video
                  </a>
                  <a href="#">
                    <img src="images/photo.png" alt="" />
                    Photo/Video
                  </a>
                  <a href="#">
                    <img src="images/feeling.png" alt="" />
                    Feeling Activity
                  </a>
                </div>
              </div>
            </div>
            <div className="status-field-container write-post-container">
              <div className="user-profile-box">
                <div className="user-profile">
                  <img src="images/profile-pic.png" alt="" />
                  <div>
                    <p> Alex Carry</p>
                    <small>August 13 1999, 09.18 pm</small>
                  </div>
                </div>
                <div>
                  <a href="#">
                    <i className="fas fa-ellipsis-v" />
                  </a>
                </div>
              </div>
              <div className="status-field">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis dolores praesentium dicta laborum nihil accusantium
                  odit laboriosam, sed sit autem!{" "}
                  <a href="#">#This_Post_is_Better!!!!</a>{" "}
                </p>
                <img src="images/feed-image-1.png" alt="" />
              </div>
              <div className="post-reaction">
                <div className="activity-icons">
                  <div>
                    <img src="images/like-blue.png" alt="" />
                    120
                  </div>
                  <div>
                    <img src="images/comments.png" alt="" />
                    52
                  </div>
                  <div>
                    <img src="images/share.png" alt="" />
                    35
                  </div>
                </div>
                <div className="post-profile-picture">
                  <img src="images/profile-pic.png " alt="" />{" "}
                  <i className=" fas fa-caret-down" />
                </div>
              </div>
            </div>
            <div className="status-field-container write-post-container">
              <div className="user-profile-box">
                <div className="user-profile">
                  <img src="images/profile-pic.png" alt="" />
                  <div>
                    <p> Alex Carry</p>
                    <small>August 13 1999, 09.18 pm</small>
                  </div>
                  
                </div>
            
                <div>
                  <a href="#">
                    <i className="fas fa-ellipsis-v" />
                  </a>
                </div>
                <div className="flex gap-3 justify-center items-center">
                  {/* <TbAntennaBars1 className="text-[23px] cursor-auto"/> */}
                  <IoClose className="text-[23px] cursor-auto"/>
                </div>
              </div>
              <div className="status-field">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis dolores praesentium dicta laborum nihil accusantium
                  odit laboriosam, sed sit autem!{" "}
                  <a href="#">#This_Post_is_Bigger!!!!</a>{" "}
                </p>
                <img src="images/feed-image-2.png" alt="" />
              </div>
              <div className="py-[10px] flex justify-between border-b border-solid border-gray-400">
                <div className="flex cursor-pointer">
                  <div  className="bg-blue-600 w-[15px] h-[15px] rounded-full flex justify-center items-center">
                  <AiFillLike className="text-white text-[9px]"/>  
                  </div>
                
                <div className="bg-red-600 w-[15px] h-[15px] rounded-full flex justify-center items-center">
                 <FaHeart className="text-white text-[9px]"/> 
                </div>
                
                <span className="ml-[3px]">356</span>
                </div>
                <div className="flex gap-3 text-[15px] ">
                  <div className="cursor-pointer">
                    8 bình luận
                  </div>
                  <div className="cursor-pointer">140 lượt chia sẻ</div>
                </div>
                </div>
              <div className="post-reaction">
           
                <div className="activity-icons">
                  <div className="flex gap-1 cursor-pointer">
                  <AiOutlineLike />
                  Thích
                  </div>
                  <div className="flex gap-1 cursor-pointer">
                  <FaRegComment  />

                  Bình Luận
                  </div>
                  <div className="flex gap-1 cursor-pointer">
                  <PiShareFat />

                    Chia se 
                  </div>
                </div>
                <div className="post-profile-picture">
                  <img src="images/profile-pic.png " alt="" />{" "}
                  <i className=" fas fa-caret-down" />
                </div>
              </div>
            </div>
            <div className="status-field-container write-post-container">
              <div className="user-profile-box">
                <div className="user-profile">
                  <img src="images/profile-pic.png" alt="" />
                  <div>
                    <p> Alex Carry</p>
                    <small>August 13 1999, 09.18 pm</small>
                  </div>
                </div>
                <div>
                  <a href="#">
                    <i className="fas fa-ellipsis-v" />
                  </a>
                </div>
              </div>
              <div className="status-field">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis dolores praesentium dicta laborum nihil accusantium
                  odit laboriosam, sed sit autem!{" "}
                  <a href="#">#This_Post_is_faster!!!!</a>{" "}
                </p>
                <img src="images/feed-image-3.png" alt="" />
              </div>
              <div className="post-reaction">
                <div className="activity-icons">
                  <div>
                    <img src="images/like-blue.png" alt="" />
                    120
                  </div>
                  <div>
                    <img src="images/comments.png" alt="" />
                    52
                  </div>
                  <div>
                    <img src="images/share.png" alt="" />
                    35
                  </div>
                </div>
                <div className="post-profile-picture">
                  <img src="images/profile-pic.png " alt="" />{" "}
                  <i className=" fas fa-caret-down" />
                </div>
              </div>
            </div>
            <div className="status-field-container write-post-container">
              <div className="user-profile-box">
                <div className="user-profile">
                  <img src="images/profile-pic.png" alt="" />
                  <div>
                    <p> Alex Carry</p>
                    <small>August 13 1999, 09.18 pm</small>
                  </div>
                </div>
                <div>
                  <a href="#">
                    <i className="fas fa-ellipsis-v" />
                  </a>
                </div>
              </div>
              <div className="status-field">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis dolores praesentium dicta laborum nihil accusantium
                  odit laboriosam, sed sit autem!{" "}
                  <a href="#">#This_Post_is_perfect!!!!</a>{" "}
                </p>
                <img src="images/feed-image-4.png" alt="" />
              </div>
              <div className="post-reaction">
                <div className="activity-icons">
                  <div>
                    <img src="images/like-blue.png" alt="" />
                    120
                  </div>
                  <div>
                    <img src="images/comments.png" alt="" />
                    52
                  </div>
                  <div>
                    <img src="images/share.png" alt="" />
                    35
                  </div>
                </div>
                <div className="post-profile-picture">
                  <img src="images/profile-pic.png " alt="" />{" "}
                  <i className=" fas fa-caret-down" />
                </div>
              </div>
            </div>
            <button type="button" className="btn-LoadMore">
              Load More
            </button>
          </div>
          {/* sidebar------------ */}
          <div className="right-sidebar">
            <div className="border-b-[1px] border-solid border-gray-400 pb-[1rem]">
              <div className="heading-link">
                <h4>Events</h4>
                <a href="">See All</a>
              </div>
              <div className="events">
                <div className="left-event">
                  <h4>13</h4>
                  <span>august</span>
                </div>
                <div className="right-event">
                  <h4>Social Media</h4>
                  <p> wisdom em Park</p>
                  <a href="#">More Info</a>
                </div>
              </div>
              <div className="events">
                <div className="left-event">
                  <h4>18</h4>
                  <span>January</span>
                </div>
                <div className="right-event">
                  <h4>Mobile Marketing</h4>
                  <p> wisdom em Park</p>
                  <a href="#">More Info</a>
                </div>
              </div>
            </div>

            <div className="border-b-[1px] border-solid border-gray-400 py-[1rem]">
              <div className="heading-link">
                <h4>Lời mời kết bạn</h4>
                <NavLink to="">Xem tất cả</NavLink>
              </div>
              <div className="flex gap-[10px] w-[100%]">
                <div className="w-[70px] h-[50px] rounded-[50%] overflow-hidden">
                  <img
                    className="w-[100%]"
                    src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/449700833_122102006930387478_1326300627394639638_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=107&ccb=1-7&_nc_sid=10b96e&_nc_ohc=PSlUjqRJCB8Q7kNvgEPFyaa&_nc_ht=scontent.fsgn8-4.fna&oh=00_AYAOvSqxyut7OH_xCyZLyjdQgyyjY78l3Bari8pB0GEXsQ&oe=66BD88B7"
                    alt=""
                  />
                </div>
                <div className="w-[100%]">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-[16px] text-black">
                      Nguyệt hoa kỷ
                    </h4>
                    <span className="text-[14px] text-right ">3 ngày</span>
                  </div>

                  <div className="text-[14px] my-[5px]">3 bạn chúng</div>
                  <div className="flex justify-between">
                    <button className="button button-one w-[48%]">
                      Xác nhận
                    </button>
                    <button className="button button-two w-[48%]">Xoá</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-[1rem]">
              <div className="heading-link">
                <h4>Conversation</h4>
                <a href="">Hide Chat</a>
              </div>
              <div className="online-list">
                <div className="online">
                  <img src="images/member-1.png" alt="" />
                </div>
                <p className="font-semibold text-black">Alison Mina</p>
              </div>
              <div className="online-list">
                <div className="online">
                  <img src="images/member-1.png" alt="" />
                </div>
                <p className="font-semibold text-black">Alison Mina</p>
              </div>
          
            </div>
          </div>
                {/*  */}

           
        </div>
        {/*  */}
        
      </div>
    </>
  );
}

export default Home;
