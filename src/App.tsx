import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'
import Home from './pages/Home'
import Recruitment from './pages/Recruitment'

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <ScrollToTop />
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
        <ScrollToTopButton />
      </Router>
    </I18nextProvider>
  )
}

export default App