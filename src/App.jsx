
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MemoryGameWelcome from './Components/MemoryGameWelcome'
import MemoryGameWelcome02 from './Components/MemoryGameWelcome02'
import MemoryGame from './Components/MemoryGame';

function App() {

  return (
    <>
      <Router>

        <Routes>

          <Route path='/' element={<MemoryGameWelcome/> } />
          <Route path='/Welcome02' element={<MemoryGameWelcome02 />} />
          <Route path='/Jogo' element={<MemoryGame />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
