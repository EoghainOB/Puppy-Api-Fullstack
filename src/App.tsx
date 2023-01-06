import React, { useState, useEffect } from 'react';
import Puppydetails from './components/puppydetails';
import './App.css';
import { dog } from '../backend/types';

function App() {

  const[puppy, setPuppy] = useState<dog[]>([])

  useEffect(() => {
      const api = async () => {
      const response = await fetch('http://localhost:4000/api/puppies')
      const data = await response.json()
      setPuppy(data);
      }
    api()
  }, [Puppydetails]);

  return (
    <div className="App">
        {puppy.map((dog: { id: number, name: string, breed: string, birthdate: string }) => (
          <div>
            <Puppydetails dog={dog}/>
          </div>
      ))}
    </div>
    )
}

export default App;
