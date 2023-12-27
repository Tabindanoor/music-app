import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import List from './components/List';

function App() {
  const [musicNumber , setMusicNumber] = useState(0)
  const [open, setOpen] = useState(false)
  return (
    <div className="text-center  w-[360px] justify-center mx-auto flex  align-content-around  ">
      <div >
        <h1 className='font-poppins text-2xl font-semibold p-3'>Music Player</h1>
        <div className='overflow-hidden backdrop-blur-3 border-2 border-purple-800  w-[360px]  mx-auto justify-center  '>
          <Card props={{musicNumber,setMusicNumber,open, setOpen}}  />
          <List props={{musicNumber,setMusicNumber, open, setOpen}} />      
        </div>

      </div>
    </div>
  );
}

export default App;
