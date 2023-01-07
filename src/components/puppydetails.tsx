import React, { useState, useEffect } from 'react'
import { dog } from '../../backend/types';

export interface Props {
  dog: dog;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void
}

const Puppydetails = ({dog: {id, name, breed, birthdate}, handleChange}: Props) => {

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
            <form>
            {toUpdate && <input name='name' value={name} onChange={handleChange}/>}
            {toUpdate && <input name='breed' value={breed} onChange={handleChange}/>}
            {toUpdate && <input name='birthdate' value={birthdate} onChange={handleChange}/>}
            </form>

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
