import { useState } from 'react'
import './Home.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Bulk clicker</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      <div className="card">
        <h4>Click as fast as you can in 5 secons to reach max score.</h4>        
      </div>      
    </>
  )
}

export default Home
