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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setPuppy((prevState) => {
    // return {
    //     ...prevState,
    //     [e.target.name]: e.target.value
    // };
    // })
    console.log('dog',e.target.value)
    }

  return (
    <div className="App">
      <button onClick={handleClick}>Add new puppy</button>
      {isShown && <Submit handleClick={handleClick} handleChange={handleChange}/>}
      <hr/>
      {puppy.map((dog: { id: number, name: string, breed: string, birthdate: string }) => (
        <div>
          <Puppydetails dog={dog} handleChange={handleChange} />
        </div>
      ))}
    </div>
    )
}

export default App;
