import React, { useState, useEffect } from 'react';
import Puppydetails from './components/puppydetails';
import Submit from './components/submit';
import Header from './components/header';
import Footer from './components/footer';
import { doggy } from './types';
import './App.css';

function App() {
  
  const [isShown, setIsShown] = useState(false);
  const [puppy, setPuppy] = useState<doggy[]>([{
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
      <Header handleClick={handleClick}/>
      {isShown && <Submit handleClick={handleClick} />}
      {isShown && <hr/>}
      {puppy.map((dog: { id: number, name: string, breed: string, birthdate: string }) => (
        <div className='list'>
          <Puppydetails dog={dog}/>
          <hr/>
        </div>
      ))}
      <Footer />
    </div>
    )
}

export default App;
