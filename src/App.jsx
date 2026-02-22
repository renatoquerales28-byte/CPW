import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CenthropyApp from './CenthropyApp'
import Newsroom from './Newsroom'
import ImpactStudies from './ImpactStudies'
import BlogPost from './BlogPost'
import Waitlist from './Waitlist'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CenthropyApp />} />
        <Route path="/newsroom" element={<Newsroom />} />
        <Route path="/impact-studies" element={<ImpactStudies />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/waitlist" element={<Waitlist />} />
      </Routes>
    </Router>
  )
}

export default App

