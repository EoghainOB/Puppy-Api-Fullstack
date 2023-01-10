import React, { useState, useEffect } from 'react';
import Puppydetails from './components/puppydetails';
import Submit from './components/submit';
import Gallery from './components/gallery';
import { doggy } from './types';
import './App.css';

function App() {
  
  const [isShown, setIsShown] = useState(false);
  const[puppy, setPuppy] = useState<doggy[]>([{
    id: 0,
    name: '',
    breed: '',
    birthdate: '',
  }])
  
  useEffect(() => {
    const api = async () => {
    const response = await fetch('http://localhost:4000/api/puppies')
    const data = await response.json()
    setPuppy(data);
    }
    api()
  }, [puppy]);

  const handleClick = () => {
      setIsShown(!isShown)
    }

  return (
    <div className="App">
      <button onClick={handleClick}>Add new puppy</button>
      {isShown && <Submit handleClick={handleClick} />}
      <hr/>
      {puppy.map((dog: { id: number, name: string, breed: string, birthdate: string }) => (
        <div>
          <Puppydetails dog={dog}/>
        </div>
      ))}
    </div>
    )
}

export default App;
