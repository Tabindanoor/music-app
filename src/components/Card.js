import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import data from "../components/Data/index.js";
import { LuListMusic } from "react-icons/lu";
import { ImLoop } from "react-icons/im";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
import { IoMdVolumeHigh } from "react-icons/io";


const Card = ({props:{musicNumber,setMusicNumber}}) => {
    console.log(musicNumber,setMusicNumber);
    console.log(data)
  return (
    <div className='w-full bg-purple-300 justify-center  text-center mx-auto overflow-hidden p-6 '>
        <div className='flex justify-between text-xl '>
                <p className='mt-2'><IoIosArrowDown /></p> 
                <p>Now Playing {musicNumber+1}/ {data.length} </p>
                <p className='mt-2'><LuListMusic/></p>
            
        </div>
<br />
        <div className='w-[full] justify-center mx-auto rounded-full'>
            <img className='w-[300px] rounded-full' src={data[musicNumber].thumbnail}  alt="" />
        </div>

        <div className="details">
            <h2 className='text-2xl mt-2'>{data[musicNumber].title}</h2>
            <h3 className='text-xl mt-2 text-gray-500'>{data[musicNumber].artist}</h3>
        </div>

        <div className="range ">
            <input type="range" className='w-full ' min={0} max={100} name="" id="" />
        </div>
        <div className="time-span flex justify-between  -mt-3">
            <span>00:00</span>
            <span>03:43</span>
        </div>
<br />
        <div className='w-full justify-between flex text-xl '>
            <ImLoop/>
            <IoPlaySkipBackSharp/>
            <IoPlay className='bg-gray-400 rounded-full w-8 -mt-1 h-8 p-2'/>
            <IoPlaySkipForward/>
            <IoMdVolumeHigh/>
        </div>
        
        <br />
        <div className="audio-controls">
            <audio src={data[musicNumber].src} controls={true} ></audio>
        </div>
        
        

    </div>
  )
}

export default Card