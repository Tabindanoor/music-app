import logo from './logo.svg';
import './App.css';
import Temp from './components/Temp';
import { useState } from 'react';
import Card from './components/Card';

function App() {
  const [musicNumber , setMusicNumber] = useState(0)
  return (
    <div className="App text-center justify-center mx-auto">
      <div>
        <h1 className='font-poppins text-2xl font-semibold'>Music Player</h1>
        <div className='main'>
          <Card props={{musicNumber,setMusicNumber}} />
        </div>
        
      </div>
    </div>
  );
}

export default App;
