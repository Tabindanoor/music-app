import React, { useState, useEffect, useCallback } from 'react';
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
  const [audio, setAudio] = useState(new Audio(Data[musicNumber].src));
  const [currentTime, setCurrentTime] = useState(0);

  const formatDuration = (durationInSeconds) => {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Memoized handleNext function
  const handleNext = useCallback(() => {
    setMusicNumber((prevNumber) => (prevNumber + 1) % Data.length);
    setIsPlaying(true);
  }, [setMusicNumber]);

  useEffect(() => {
    const newAudio = new Audio(Data[musicNumber].src);
    setAudio(newAudio);
    setCurrentTime(0);

    if (isPlaying) {
      newAudio.play();
    }

    const updateCurrentTime = () => setCurrentTime(newAudio.currentTime);
    newAudio.addEventListener('timeupdate', updateCurrentTime);

    // Play the next song automatically when the current one ends
    const handleAudioEnd = () => {
      handleNext();
    };
    newAudio.addEventListener('ended', handleAudioEnd);

    return () => {
      newAudio.pause();
      newAudio.removeEventListener('timeupdate', updateCurrentTime);
      newAudio.removeEventListener('ended', handleAudioEnd);
    };
  }, [musicNumber, isPlaying, handleNext]);

  const playPauseToggle = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePrev = () => {
    setMusicNumber((prevNumber) => (prevNumber - 1 + Data.length) % Data.length);
    setIsPlaying(true);
  };

  const handleLoopToggle = () => {
    audio.loop = !audio.loop;
  };

  const handleRangeChange = (e) => {
    const newTime = e.target.value;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleRangeChangeComplete = () => {
    if (isPlaying) {
      audio.play();
    }
  };

  const handleVolumeToggle = () => {
    if (isMuted) {
      audio.volume = 1.0;
    } else {
      audio.volume = 0.0;
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className='bg-gray-500 w-[320px] justify-center bg-gradient-to-r from-purple-800 via-indigo-700 to-blue-500 position-relative text-center rounded-2xl mx-auto p-5 shadow-inner shadow-amber-50'>
      <div className='flex justify-between text-xl'>
        <p className='mt-1'>
          <IoIosArrowDown className='cursor-pointer' onClick={() => setOpen(!open)} />
        </p>
        <p className='text-base'>Now Playing {musicNumber + 1}/ {Data.length}</p>
        <p className='mt-1'>
          <LuListMusic className='cursor-pointer' onClick={() => setOpen(!open)} />
        </p>
      </div>
      <div className='justify-center mx-auto rounded-full mt-3'>
        <img className='w-[250px] border-2 border-purple-800 h-[250px] mx-auto justify-center rounded-full' src={Data[musicNumber].thumbnail} alt="" />
      </div>
      <div className="details">
        <h2 className='text-xl mt-1'>{Data[musicNumber].title}</h2>
        <h3 className='text-xl mt-1 text-black font-bold'>{Data[musicNumber].artist}</h3>
      </div>
      <div className="range">
        <input
          type="range"
          className='w-full'
          min={0}
          max={audio.duration}
          value={currentTime}
          onChange={handleRangeChange}
          onMouseUp={handleRangeChangeComplete}
          onTouchEnd={handleRangeChangeComplete}
        />
      </div>
      <div className="time-span flex justify-between -mt-2">
        <span>{formatDuration(currentTime)}</span>
        <span>{Data[musicNumber].duration}</span>
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
      <div className="audio-controls">
        <audio src={audio.src} controls={false} />
      </div>
    </div>
  );
};

export default Card;
