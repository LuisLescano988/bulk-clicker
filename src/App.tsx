import {Route, Routes} from 'react-router-dom'
import Game from './components/game/Game'
import Landing from './components/landing/Landing'

function App() {  
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Game secondsToClick={5} />}/>
      </Routes>
    </>
  )
}

export default App
