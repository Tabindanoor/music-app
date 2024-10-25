import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import List from './components/List';

function App() {
  const [musicNumber , setMusicNumber] = useState(0)
  const [open, setOpen] = useState(false)
  return (
    <div className="text-center justify-center mx-auto flex   ">
      <div >
        <h1 className='font-poppins text-center text-2xl font-semibold text-[#f5f5f5]'>Music Player</h1>
        <div className='overflow-hidden  w-[360px]  content-center mx-auto justify-center bg-none '>
          <Card props={{musicNumber,setMusicNumber,open, setOpen}}  />
          <List props={{musicNumber,setMusicNumber, open, setOpen}} />      
        </div>

      </div>
    </div>
  );
}

export default App;
