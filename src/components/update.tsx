import React, { useState, useEffect } from 'react'
import { doggy } from '../types';

export interface Props {
    dog: doggy;
  }

const Update = ({dog}: Props) => {

  const [form, setForm] = useState<doggy>({
    id: 0,
    name: '',
    breed: '',
    birthdate: '',
  })

  useEffect(() => {
    setForm(dog)
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value});
  }

  return (
    <div>
    <form
        onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            const target = e.target as typeof e.target & {
            id: { value: number}
            name: { value: string };
            breed: { value: string };
            birthdate: { value: string };
            };
            const updatedData = {
                id: dog.id,
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
        <div className='update'>
        <input type='text' name='name' value={form.name} onChange={handleChange}/>
        <input type='text' name='breed' value={form.breed} onChange={handleChange}/>
        <input type='date' name='birthdate' value={form.birthdate} onChange={handleChange}/>
        <button type='submit'>Update</button>
        </div>
    </form>
    </div>
  )
}

export default Update
