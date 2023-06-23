const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age
  
  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born {bornYear()}</p>
    </div>
  )
}

const App = () => {

    const matinNimi = 'Matti'
    const matinIka = 32

    return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 13}/>
      <Hello name={matinNimi} age={matinIka} />
    </div>
    )
}
  

export default App;
