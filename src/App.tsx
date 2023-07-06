import {Route, Routes} from 'react-router-dom'
import Home from './components/home/Home'
import Landing from './components/landing/Landing'

function App() {  
  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
