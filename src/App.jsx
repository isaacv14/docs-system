import { BrowserRouter as Router, Routes, Route } from 'react-router'

import Home from './Home'
import Pandas from './Pandas'
import BS4 from './BS4'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pandas" element={<Pandas />} />
          <Route path="/bs4" element={<BS4 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
