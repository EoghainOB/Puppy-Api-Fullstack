import React, { useState } from 'react'
import { dog } from '../../backend/types';

export interface Props {
  dog: dog;
}

const Puppydetails: React.FC<Props> = (props) => {

    const [isShown, setIsShown] = useState(false);
    const [toUpdate, setToUpdate] = useState(false);

    const handleClick = () => {
        setIsShown(!isShown)
      }
   
    const handleUpdate = () => {
        setToUpdate(!toUpdate)
      }

    const removeDog = async (e: { preventDefault: () => void; }) => {
        await fetch(`http://localhost:4000/api/puppies/${props.dog.id}`, {
        method: 'DELETE'
        })
        .then(() => {
        })
    }

    return (
        <div key="{props.dog.id}">
            {!toUpdate && <h1>{props.dog.name}</h1>}
            {toUpdate && <input value={props.dog.name}/>}
            {isShown && !toUpdate && <p>Breed: {props.dog.breed}</p>}
            {toUpdate && <input value={props.dog.breed}/>}
            {isShown && !toUpdate && <p>DOB: {props.dog.birthdate}</p>}
            {toUpdate && <input value={props.dog.birthdate}/>}
            {isShown && <button onClick={handleUpdate}>Update</button>}
            {isShown && <button onClick={removeDog}>Remove</button>}
            {!isShown && <button onClick={handleClick}>More details</button>}
            {isShown && <button onClick={handleClick}>Less details</button>}
            <hr/>
        </div>
    )
}

export default Puppydetails
