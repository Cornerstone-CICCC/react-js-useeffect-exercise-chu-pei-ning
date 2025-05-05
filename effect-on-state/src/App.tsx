import { useEffect, useState } from 'react'
import './App.css'

type Color = 'red' | 'blue'

function App() {
  const [message, setMessage] = useState<string>("")
  const [countLike, setCountLike] = useState<number>(0)
  const [color, setColor] = useState<Color>('red')

  useEffect(() => {
    console.log(message)
    setMessage("")
  }, [message])

  useEffect(() => {
    alert(`Likes updated to ${countLike}!`)
    console.log(`Likes updated to ${countLike}!`)
  }, [countLike])

  useEffect(() => {
    console.log(color)
  }, [color])


  return (
    <div>
    <h2>Message Logger</h2>
    <button onClick={() => setMessage("Hello from React!")}>Send Message</button>

    <h2>Like Counter</h2>
    <button onClick={() => setCountLike(prevLike => prevLike + 1)}>Like</button>

    <h2>Color Box</h2>
    <button onClick={() => setColor(prevColor => (prevColor === 'red') ? 'blue' : 'red')}>Change Color</button>
    <div style={{ width: 100, height: 100, backgroundColor:color }}>Color Box</div>
  </div>
  )
}

export default App
