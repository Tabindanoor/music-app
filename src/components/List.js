import React from 'react'
import '../App.css'
import Data from './Data/index.js'
import { IoIosArrowDown } from 'react-icons/io'
import { LuListMusic } from 'react-icons/lu'
import { IoClose } from "react-icons/io5";


const List = ({props:{musicNumber,setMusicNumber, open, setOpen}}) => {
    
    // console.log(musicNumber,setMusicNumber)
  return (
    <div className=  {`bottom-0 absolute z-10 w-[360px] ${open ? 'block' : 'hidden'}`}>
         <div className='flex justify-between text-xl p-3 bg-white text-black '>
<p>
          <LuListMusic className='cursor-pointer'  />
        </p>
        <p>
          <IoClose className='cursor-pointer' onClick={() => setOpen(false)} />
        </p>
        </div>
    <div className='bg-white text-start text-black overflow-scroll h-[250px] '>
        {
            Data.map((data,index)=>{
                return (
                    <li className={`list-none hover:bg-green-100 p-3 ${musicNumber === index ? 'bg-purple-300' : ''}`} onClick={()=>{setMusicNumber(index)}}>
                    <div key={data.id} className='flex justify-between'>
                        <div>
                             <p>{data.artist}</p>
                        <p >{data.title} </p> 
                        </div>
                      
                        <div>
                        <div>
                <p>{data.duration}  </p>
                
              </div>
                        </div>
                       
                        
                       
                    </div>
                    <br />
                    </li>
                )
            })
        } 
</div>

    </div>
  )
}

export default List