// import React from 'react'
// import '../App.css'
// import Data from './Data/index.js'
// import { IoIosArrowDown } from 'react-icons/io'
// import { LuListMusic } from 'react-icons/lu'
// import { IoClose } from "react-icons/io5";


// const List = ({props:{musicNumber,setMusicNumber, open, setOpen}}) => {
    
//     // console.log(musicNumber,setMusicNumber)
//   return (
//     <div className=  {`bottom-0 absolute z-10 w-[360px] ${open ? 'block' : 'hidden'}`}>
//          <div className='flex justify-between text-xl p-3 bg-white text-black '>
// <p>
//           <LuListMusic className='cursor-pointer'  />
//         </p>
//         <p>
//           <IoClose className='cursor-pointer' onClick={() => setOpen(false)} />
//         </p>
//         </div>
//     <div className='bg-white text-start text-black overflow-scroll h-[250px] '>
//         {
//             Data.map((data,index)=>{
//                 return (
//                     <li className={`list-none hover:bg-green-100 p-3 ${musicNumber === index ? 'bg-purple-300' : ''}`} onClick={()=>{setMusicNumber(index)}}>
//                     <div key={data.id} className='flex justify-between'>
//                         <div>
//                              <p>{data.artist}</p>
//                         <p >{data.title} </p> 
//                         </div>
                      
//                         <div>
//                         <div>
//                 <p>{data.duration}  </p>
                
//               </div>
//                         </div>
                       
                        
                       
//                     </div>
//                     <br />
//                     </li>
//                 )
//             })
//         } 
// </div>

//     </div>
//   )
// }

// export default List



import React from 'react';
import '../App.css';
import Data from './Data/index.js';
import { IoIosArrowDown } from 'react-icons/io';
import { LuListMusic } from 'react-icons/lu';
import { IoClose } from "react-icons/io5";

const List = ({ props: { musicNumber, setMusicNumber, open, setOpen } }) => {
  return (
    <div className={`bottom-0 absolute z-10 w-[360px] ${open ? 'block' : 'hidden'}`}>
      {/* Header */}
      <div className='flex justify-between text-xl p-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white'>
        <p>
          <LuListMusic className='cursor-pointer' />
        </p>
        <p>
          <IoClose className='cursor-pointer' onClick={() => setOpen(false)} />
        </p>
      </div>

      {/* Song List */}
      <div className='bg-gradient-to-b from-blue-50 to-blue-200 text-start text-black overflow-scroll h-[250px]'>
        {
          Data.map((data, index) => {
            return (
              <li 
                key={data.id} 
                className={`list-none hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-400 transition-all duration-300 ease-in-out transform hover:scale-105 p-3 rounded-lg shadow-md cursor-pointer 
                  ${musicNumber === index ? 'bg-purple-300 scale-105' : ''}`}
                onClick={() => { setMusicNumber(index) }}
              >
                <div className='flex justify-between items-center'>
                  <div>
                    <p className='font-bold text-lg'>{data.artist}</p>
                    <p className='text-sm'>{data.title}</p>
                  </div>
                  <div className='text-right'>
                    <p className='text-sm text-gray-700'>{data.duration}</p>
                  </div>
                </div>
              </li>
            )
          })
        }
      </div>
    </div>
  )
}

export default List;
