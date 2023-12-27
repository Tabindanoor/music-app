import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { LuListMusic } from "react-icons/lu";
import { ImLoop } from "react-icons/im";
import { IoPlaySkipBackSharp, IoPlaySkipForward } from "react-icons/io5";
import { IoPlay, IoPause } from "react-icons/io5";
import { IoMdVolumeHigh } from "react-icons/io";
import Data from '../components/Data/index.js';
import { MdOutlineVolumeOff } from "react-icons/md";


const Card = ({ props: { musicNumber, setMusicNumber, open, setOpen } }) => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audio] = useState(new Audio(Data[musicNumber].src));
  const [currentTime, setCurrentTime] = useState(0);

  const formatDuration = (durationInSeconds) => {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    // Set the audio source whenever musicNumber changes
    audio.src = Data[musicNumber].src;
    if (isPlaying) {
      audio.play();
    }
  }, [musicNumber, audio, isPlaying]);

  useEffect(() => {
    // Update the currentTime based on the timeupdate event
    const updateCurrentTime = () => setCurrentTime(audio.currentTime);
    audio.addEventListener('timeupdate', updateCurrentTime);

    // Cleanup event listener on component unmount
    return () => {
      audio.removeEventListener('timeupdate', updateCurrentTime);
    };
  }, [audio]);

  const playPauseToggle = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setMusicNumber((prevNumber) => (prevNumber + 1) % Data.length);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setMusicNumber((prevNumber) => (prevNumber - 1 + Data.length) % Data.length);
    setIsPlaying(false);
  };

  const handleLoopToggle = () => {
    audio.loop = !audio.loop;
  };

  const handleRangeChange = (e) => {
    const newTime = e.target.value;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeToggle = () => {
    if (isMuted) {
      audio.volume = 1.0; // Unmute
    } else {
      audio.volume = 0.0; // Mute
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className='bg-purple-300 justify-center w-[360px] position-relative text-center mx-auto p-6 absolute'>
      <div className='flex justify-between text-xl'>
        <p className='mt-2'>
          <IoIosArrowDown className='cursor-pointer' onClick={() => setOpen(!open)} />
        </p>
        <p>Now Playing {musicNumber + 1}/ {Data.length}</p>
        <p className='mt-2'>
          <LuListMusic className='cursor-pointer' onClick={() => setOpen(!open)} />
        </p>
      </div>
      <br />
      <div className='justify-center mx-auto rounded-full'>
        <img className='w-[250px] border-2 border-purple-800 h-[250px] mx-auto justify-center rounded-full' src={Data[musicNumber].thumbnail} alt="" />
      </div>
      <div className="details">
        <h2 className='text-2xl mt-2'>{Data[musicNumber].title}</h2>
        <h3 className='text-xl mt-2 text-gray-500'>{Data[musicNumber].artist}</h3>
      </div>
      <div className="range">
        <input
          type="range"
          className='w-full'
          min={0}
          max={audio.duration}
          value={currentTime}
          onChange={handleRangeChange}
        />
      </div>
      <div className="time-span flex justify-between -mt-3">
        <span>{formatDuration(currentTime)}</span>
        <span>{(Data[musicNumber].duration)}</span>
      </div>
      <br />
      <div className='w-full justify-between flex text-xl'>
        <ImLoop className={`cursor-pointer ${audio.loop ? 'text-purple-500' : ''}`} onClick={handleLoopToggle} />
        <IoPlaySkipBackSharp className='cursor-pointer' onClick={handlePrev} />

        {isPlaying ? (
          <IoPause className='bg-gray-400 rounded-full w-8 -mt-1 h-8 p-2 cursor-pointer' onClick={playPauseToggle} />
        ) : (
          <IoPlay className='bg-gray-400 rounded-full w-8 -mt-1 h-8 p-2 cursor-pointer' onClick={playPauseToggle} />
        )}

        <IoPlaySkipForward className='cursor-pointer' onClick={handleNext} />
        {isMuted ? (
          <MdOutlineVolumeOff className='cursor-pointer' onClick={handleVolumeToggle} />
        ) : (
          <IoMdVolumeHigh className='cursor-pointer' onClick={handleVolumeToggle} />
        )}
      </div>
      <br />
      <div className="audio-controls">
        <audio src={audio.src} controls={false} />
      </div>
    </div>
  );
};

export default Card;

