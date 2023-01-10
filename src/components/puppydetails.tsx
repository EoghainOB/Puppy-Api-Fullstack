import { useState } from 'react'
import { doggy } from '../types';
import Gallery from './gallery';
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
    <div key={id} className='details'>
      <h2>{name}</h2>
      <Gallery dog={{id, name, breed, birthdate}}/>
      {isShown && <p><b>Breed:</b> {breed}</p>}
      {isShown && <p><b>DOB:</b> {birthdate}</p>}

      {toUpdate && <Update dog={{id, name, breed, birthdate}}/>}

      <div className='buttons'>
      {isShown && !toUpdate && <button onClick={handleUpdate}>Change</button>}
      {isShown && toUpdate && <button onClick={handleUpdate}>Done</button>}
      {isShown && !toUpdate && <button onClick={removeDog}>Remove</button>}

      {!isShown && !toUpdate && <button onClick={handleClick}>More details</button>}
      {isShown && !toUpdate && <button onClick={handleClick}>Less details</button>}
      </div>
    </div>
  )
}

export default Puppydetails
