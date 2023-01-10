const Header = ({ handleClick }: any) => {
  return (
    <header>
      <div>
        <h1>Puppy API</h1>
      </div>
      <div>
        <button onClick={handleClick}>Add new puppy</button>
      </div>
    </header>
  )
}

export default Header