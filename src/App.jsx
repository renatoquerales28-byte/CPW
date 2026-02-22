import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CenthropyApp from './CenthropyApp'
import Newsroom from './Newsroom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CenthropyApp />} />
        <Route path="/newsroom" element={<Newsroom />} />
      </Routes>
    </Router>
  )
}

export default App

