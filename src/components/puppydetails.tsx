import React, { useState } from 'react'
import { doggy } from '../types';
import Update from './update';

export type Props = {
  dog: doggy;
}

const Puppydetails = ({dog: {id, name, breed, birthdate}}: Props) => {

    const [isShown, setIsShown] = useState(false);
    const [toUpdate, setToUpdate] = useState(false);

    const handleClick = () => {
        setIsShown(!isShown)
      }

      const handleUpdate = () => {
        setToUpdate(!toUpdate)
      }

    const removeDog = async (e: { preventDefault: () => void; }) => {
        await fetch(`http://localhost:4000/api/puppies/${id}`, {
        method: 'DELETE'
        })
        .then(() => {
        })
    }

    return (
      <div key={id}>
        <h1>{name}</h1>
        {isShown && <p>Breed: {breed}</p>}
        {isShown && <p>DOB: {birthdate}</p>}

        {toUpdate && <Update dog={{id, name, breed, birthdate}}/>}

        {isShown && !toUpdate && <button onClick={handleUpdate}>Update</button>}
        {isShown && toUpdate && <button onClick={handleUpdate}>OK</button>}
        {isShown && !toUpdate && <button onClick={removeDog}>Remove</button>}

        {!isShown && !toUpdate && <button onClick={handleClick}>More details</button>}
        {isShown && !toUpdate && <button onClick={handleClick}>Less details</button>}
        <hr/>
      </div>
    )
}

export default Puppydetails
