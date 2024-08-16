import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  function fibonacci(n: number): number {
    if (n <= 1) {
      return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
  }

  function factorial(n: number): number {
    if (n <= 1) {
      return 1
    }
    return n * factorial(n - 1)
  }

  return (
    <>
      
      <h1>Vite + React</h1>

      count is {count}

      <h1> {factorial(count)}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
        increment
        </button>
        
      </div>
      
      <div className="card">
     
        <button onClick={() => setCount((count) => count - 1)}>
         decrement
        </button>
      
      </div>
     
    </>
  )
}

export default App
