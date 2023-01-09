import React from 'react'
import { doggy } from '../types';

export interface Props {
    dog: doggy;
  }

const Update = ({dog}: Props) => {   

  return (
    <div>
        <form
            onSubmit={(e: React.SyntheticEvent) => {
                e.preventDefault();
                const target = e.target as typeof e.target & {
                name: { value: string };
                breed: { value: string };
                birthdate: { value: string };
                };
                const updatedData = {
                    name: target.name.value,
                    breed: target.breed.value,
                    birthdate: target.birthdate.value
                }
                fetch(`http://localhost:4000/api/puppies/${dog.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(updatedData)
                })
            }}
        >
        <input name='name' defaultValue={dog.name} />
        <input name='breed' defaultValue={dog.breed} />
        <input name='birthdate' defaultValue={dog.birthdate} />
        <button type='submit'>Change</button>
        </form>
    </div>
  )
}

export default Update