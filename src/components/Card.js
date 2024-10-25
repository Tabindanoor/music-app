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
  const [audio, setAudio] = useState(new Audio(Data[musicNumber].src));
  const [currentTime, setCurrentTime] = useState(0);

  const formatDuration = (durationInSeconds) => {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    const newAudio = new Audio(Data[musicNumber].src);
    setAudio(newAudio);

    setCurrentTime(0);


    // Play the new audio if the previous one was playing
    if (isPlaying) {
      newAudio.play();
    }

    const updateCurrentTime = () => setCurrentTime(newAudio.currentTime);
    newAudio.addEventListener('timeupdate', updateCurrentTime);

    // Clean up the previous audio object
    return () => {
      newAudio.pause();
      newAudio.removeEventListener('timeupdate', updateCurrentTime);
    };
  }, [musicNumber]);

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
    // Update the audio's current time
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleRangeChangeComplete = () => {
    // If the audio was playing, ensure it continues playing after seeking
    if (isPlaying) {
      audio.play(); // Resume playing from the newly set time
    }
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
    <div className='bg-gray-500 w-[320px] justify-center  bg-gradient-to-r from-purple-800 via-indigo-700 to-blue-500 position-relative text-center rounded-2xl mx-auto p-5 shadow-inner shadow-amber-50'>
    {/* <div className='bg-gray-500 justify-center  bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 position-relative text-center rounded-2xl mx-auto p-5 absolute shadow-2xl shadow-amber-50'> */}
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
          onMouseUp={handleRangeChangeComplete} // Add this to seek after dragging
          onTouchEnd={handleRangeChangeComplete} // Add this for mobile touch events
        />
      </div>
      <div className="time-span flex justify-between -mt-2">
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
      <div className="audio-controls">
        <audio src={audio.src} controls={false} />
      </div>
    </div>
  );
};

export default Card;



// import React, { useState, useEffect } from 'react';
// import { IoIosArrowDown } from "react-icons/io";
// import { LuListMusic } from "react-icons/lu";
// import { ImLoop } from "react-icons/im";
// import { IoPlaySkipBackSharp, IoPlaySkipForward } from "react-icons/io5";
// import { IoPlay, IoPause } from "react-icons/io5";
// import { IoMdVolumeHigh } from "react-icons/io";
// import Data from '../components/Data/index.js';
// import { MdOutlineVolumeOff } from "react-icons/md";

// const Card = ({ props: { musicNumber, setMusicNumber, open, setOpen } }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMuted, setIsMuted] = useState(false);
//   const [audio, setAudio] = useState(new Audio(Data[musicNumber].src));
//   const [currentTime, setCurrentTime] = useState(0);

//   const formatDuration = (durationInSeconds) => {
//     const minutes = Math.floor(durationInSeconds / 60);
//     const seconds = Math.floor(durationInSeconds % 60);
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };

//   useEffect(() => {
//     const newAudio = new Audio(Data[musicNumber].src);
//     setAudio(newAudio);
//     setCurrentTime(0);
//     if (isPlaying) newAudio.play();
//     const updateCurrentTime = () => setCurrentTime(newAudio.currentTime);
//     newAudio.addEventListener('timeupdate', updateCurrentTime);

//     return () => {
//       newAudio.pause();
//       newAudio.removeEventListener('timeupdate', updateCurrentTime);
//     };
//   }, [musicNumber]);

//   const playPauseToggle = () => {
//     isPlaying ? audio.pause() : audio.play();
//     setIsPlaying(!isPlaying);
//   };

//   const handleNext = () => {
//     setMusicNumber((prevNumber) => (prevNumber + 1) % Data.length);
//     setIsPlaying(false);
//   };

//   const handlePrev = () => {
//     setMusicNumber((prevNumber) => (prevNumber - 1 + Data.length) % Data.length);
//     setIsPlaying(false);
//   };

//   const handleLoopToggle = () => {
//     audio.loop = !audio.loop;
//   };

//   const handleRangeChange = (e) => {
//     const newTime = e.target.value;
//     audio.currentTime = newTime;
//     setCurrentTime(newTime);
//   };

//   const handleRangeChangeComplete = () => {
//     if (isPlaying) audio.play();
//   };

//   const handleVolumeToggle = () => {
//     audio.volume = isMuted ? 1.0 : 0.0;
//     setIsMuted(!isMuted);
//   };

//   return (
//     <div className='relative bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 p-6 rounded-3xl shadow-lg text-white w-[360px] mx-auto'>
//       <div className='flex justify-between items-center text-2xl mb-4'>
//         <IoIosArrowDown className='cursor-pointer text-neonGreen hover:scale-110 transition-transform' onClick={() => setOpen(!open)} />
//         <p className='text-base font-semibold'>
//           Now Playing {musicNumber + 1}/ {Data.length}
//         </p>
//         <LuListMusic className='cursor-pointer text-neonGreen hover:scale-110 transition-transform' onClick={() => setOpen(!open)} />
//       </div>
//       <div className='rounded-full overflow-hidden border-4 border-neonPink shadow-neonPink mx-auto'>
//         <img className='w-[250px] h-[250px]' src={Data[musicNumber].thumbnail} alt="" />
//       </div>
//       <h2 className='text-2xl font-bold mt-4'>{Data[musicNumber].title}</h2>
//       <h3 className='text-xl text-neonBlue'>{Data[musicNumber].artist}</h3>
//       <div className="mt-6">
//         <input
//           type="range"
//           className='w-full accent-neonGreen'
//           min={0}
//           max={audio.duration}
//           value={currentTime}
//           onChange={handleRangeChange}
//           onMouseUp={handleRangeChangeComplete}
//           onTouchEnd={handleRangeChangeComplete}
//         />
//         <div className="flex justify-between text-sm mt-2">
//           <span>{formatDuration(currentTime)}</span>
//           <span>{Data[musicNumber].duration}</span>
//         </div>
//       </div>
//       <div className='flex justify-between items-center text-3xl mt-6'>
//         <ImLoop className={`cursor-pointer ${audio.loop ? 'text-neonGreen' : 'text-gray-400'} hover:scale-110 transition-transform`} onClick={handleLoopToggle} />
//         <IoPlaySkipBackSharp className='cursor-pointer hover:scale-110 transition-transform' onClick={handlePrev} />
//         {isPlaying ? (
//           <IoPause className='bg-neonPink rounded-full p-4 cursor-pointer hover:scale-110 transition-transform' onClick={playPauseToggle} />
//         ) : (
//           <IoPlay className='bg-neonPink rounded-full p-4 cursor-pointer hover:scale-110 transition-transform' onClick={playPauseToggle} />
//         )}
//         <IoPlaySkipForward className='cursor-pointer hover:scale-110 transition-transform' onClick={handleNext} />
//         {isMuted ? (
//           <MdOutlineVolumeOff className='cursor-pointer hover:scale-110 transition-transform' onClick={handleVolumeToggle} />
//         ) : (
//           <IoMdVolumeHigh className='cursor-pointer hover:scale-110 transition-transform' onClick={handleVolumeToggle} />
//         )}
//       </div>
//       <div className="hidden">
//         <audio src={audio.src} controls={false} />
//       </div>
//     </div>
//   );
// };

// export default Card;
