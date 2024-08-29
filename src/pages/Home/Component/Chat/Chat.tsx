import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import { IoClose, IoImages } from 'react-icons/io5'

function Chat() {
  return (
    <div className="fixed bottom-0 right-[10%]">
                  <div className="w-[300px] bg-white h-[400px]">
                    <div className="mess-header h-[40px] mt-[10px]"
                      
                    style={{boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
                      <div className="flex justify-between items-center mx-[10px]">
                        <div className="flex justify-center items-center gap-2 mt-[2px]">
                             <img className="w-[35px] h-[35px] rounded-[50%]" src="http://localhost:3000/images/member-1.png" alt="" />
                              <div>
                                <h3 className="text-[15px] font-semibold">Duy Phạm</h3>
                                <p className="text-[13px]">Đang hoạt động</p>
                              </div>
                              
                        </div>
                        <div className="flex">
                        <IoClose className="text-[18px] cursor-pointer"/>

                        </div>
                        
                      </div>
                    </div>
                    <div className="mess-body h-[300px] scroll">

                      <div className="message-right text-left w-[90%]">
                        <div className="flex gap-3">
                           <img 
                        src="http://localhost:3000/images/member-1.png"
                        className="h-[35px] w-[35px] mt-[15px] ml-[10px] rounded-full"
                        alt="" />
                        <div className="mt-[10px] w-full">
                            <p className="text-[16px]">Hoà</p>
                            <div className="bg-gray-200 py-[6px] px-[10px] text-[15px] text-black flex justify-center items-center">
                            Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                        </div>
                       
                      </div>
                      <div className="text-right w-[90%] mt-[10px]">
                        <div className="flex justify-end">
                       
                        <div className="mt-[10px] w-[full]">
            
                            <div className="text bg-[#003853] py-[6px] px-[10px] text-[15px] text-white flex justify-center items-center">
                            Lorem ipsum dolor sit amet.
                            </div>
                       
                        </div>
                    
                        </div>
                       
                      </div>
                    </div>
                    <div className="flex justify-center mess-footer gap-1 h-[40px] w-[full] mt-[10px]">
                    
                      <input 
                      placeholder="Enter your text"
                      type="text" className="border outline-none rounded-full border-solid border-gray-400 h-[39px] px-[10px]"  />
                        
                      <button>
                        <IoImages className="text-[20px]"/>
                      </button>

                        <button>
                          <FaLocationArrow className="text-[20px]"/>
                        </button>
                    </div>

                  </div>
                </div>
  )
}

export default Chat
