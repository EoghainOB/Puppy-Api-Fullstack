import React, { useState, useEffect } from 'react';
import Puppydetails from './components/puppydetails';
import Submit from './components/submit';
import './App.css';
import { dog } from '../backend/types';

function App() {

  const[puppy, setPuppy] = useState<dog[]>([])
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
      setIsShown(!isShown)
    }

  useEffect(() => {
      const api = async () => {
      const response = await fetch('http://localhost:4000/api/puppies')
      const data = await response.json()
      setPuppy(data);
      }
    api()
  }, [puppy]);

  return (
    <div className="App">
      <button onClick={handleClick}>Add new puppy</button>
      {isShown && <Submit handleClick={handleClick}/>}
      <hr/>
      {puppy.map((dog: { id: number, name: string, breed: string, birthdate: string }) => (
        <div>
          <Puppydetails dog={dog} />
        </div>
      ))}
    </div>
    )
}

export default App;
