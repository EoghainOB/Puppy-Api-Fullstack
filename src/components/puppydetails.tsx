import React from 'react'
import { dog } from '../../backend/types';

export interface Props {
  dog: dog;
}

const Puppydetails: React.FC<Props> = (props) => {
    
    const removeDog = async (e: { preventDefault: () => void; }) => {
        await fetch(`http://localhost:4000/api/puppies/${props.dog.id}`, {
            method: 'DELETE'
            })
            .then(() => {
            }
            )
            console.log('done', props.dog.name)
    }

    return (
        <div key="{props.dog.id}">
            <h1>{props.dog.name}</h1>
            <p>Breed: {props.dog.breed}</p>
            <p>DOB: {props.dog.birthdate}</p>
            <button>Update</button>
            <button onClick={removeDog}>Remove</button>
        </div>
    )
}

export default Puppydetails
