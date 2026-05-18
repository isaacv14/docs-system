import { BrowserRouter as Router, Routes, Route } from 'react-router'

import Home from './Home'
import Pandas from './Pandas'
import BS4 from './BS4'
import MysqlConnectorDocs from './MySQL_ConnectorPy'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pandas" element={<Pandas />} />
          <Route path="/bs4" element={<BS4 />} />
          <Route path="/mysql-connector-python" element={<MysqlConnectorDocs />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
