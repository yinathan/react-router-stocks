import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Stock from './pages/Stock'
import About from './pages/About'
import Nav from './components/Nav'

function App () {
  return (
    <div className='App'>
      {/* <Dashboard key={stockData}/> */}
      <Router>
      <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/stocks' element={<Dashboard />} />
          <Route path='/stocks/:symbolId' element={<Stock />} />
        </Routes>
        </Router>
    </div>
  )
}

export default App
