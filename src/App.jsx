import { useState } from 'react'
import './App.css'
import users from './json/quotes.json'
import QuoteBox from './components/QuoteBox'
import colors from './utils/colors'

function App() {

    const getRandomElement = arr => {
      const indexRandom = Math.floor(Math.random() * arr.length)
      return arr[indexRandom]
    }

    let userRandom = getRandomElement(users)
    let colorRandom = getRandomElement(colors)

    const [randomUser, setRandomUsers] = useState(userRandom)
    const [randomColors, setrandomColors] = useState(colorRandom)

    const objStyle = {
      backgroundColor: randomColors
    }

    const getRandomAll = () => {
      userRandom = getRandomElement(users)
      colorRandom = getRandomElement(colors) 
      
      setRandomUsers(userRandom)
      setrandomColors(colorRandom)
    }

  return (
    <div className="App" style={objStyle}>
      <QuoteBox 
        randomUser={randomUser}
        randomColors={randomColors}
        getRandomAll = {getRandomAll}
      />
    </div>
  )
}

export default App
