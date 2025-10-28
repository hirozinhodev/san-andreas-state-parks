import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Recruitment from './pages/Recruitment'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reclutamiento" element={<Recruitment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
