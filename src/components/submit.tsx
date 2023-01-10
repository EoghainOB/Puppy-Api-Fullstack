function Submit({ handleClick }: any) {

  const handleSubmit = (e: { preventDefault: () => void; target: any; }) => {
    e.preventDefault();
    const data = {
      id: Math.random() * 10,
      name: e.target[0].value,
      breed: e.target[1].value,
      birthdate: e.target[2].value
    };
    fetch('http://localhost:4000/api/puppies', {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    e.target.reset();
    handleClick();
  };

  return (
    <div className='submit'>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder="Puppy Name" />
        <input type='text' placeholder="Puppy Breed" />
        <input type='date' placeholder="Puppy date of birth" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Submit