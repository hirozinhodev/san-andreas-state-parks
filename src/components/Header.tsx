import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import LanguageSelector from './LanguageSelector'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t, i18n } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  // detecta scroll pra mudar estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t('home'), path: '/' },
    { name: t('recruitment'), path: '/reclutamiento' },
  ]

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-3' 
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/images/logo.png" 
              alt="San Andreas State Parks Logo" 
              className="h-14 w-14 transition-transform group-hover:scale-105"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-park-blue">
                San Andreas State Parks
              </h1>
            </div>
          </Link>

          {/* menu desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-all duration-200 hover:text-park-blue hover:scale-110 relative group ${
                    location.pathname === item.path
                      ? 'text-park-blue'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-park-yellow-400 to-park-yellow-600 transition-all duration-200 ${
                      location.pathname === item.path 
                        ? 'w-full' 
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </nav>
            {/* Seletor de idioma visível apenas no desktop */}
            <div className="hidden md:block">
              <LanguageSelector />
            </div>
          </div>

          {/* botao mobile */}
          <div className="flex items-center space-x-2 md:hidden">
            <LanguageSelector />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-park-blue hover:bg-park-blue/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* menu mobile */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg transition-all duration-200 font-medium ${
                  location.pathname === item.path
                    ? 'bg-park-green-600 text-white scale-105 shadow-md'
                    : 'text-gray-800 hover:bg-park-green/10 hover:text-park-green-700 hover:translate-x-2'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-200">
              <div className="px-4">
                <div className="text-xs font-semibold text-gray-700 mb-3">{t('select_language')}</div>
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => {
                      i18n.changeLanguage('es');
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg border transition-all ${
                      i18n.language === 'es' 
                        ? 'bg-park-green-600 text-white border-park-green-600 shadow-md' 
                        : 'bg-white text-gray-800 border-gray-300 hover:border-park-green-600 hover:bg-park-green-50'
                    }`}
                  >
                    <span className="font-medium">Español</span>
                    <img 
                      src="https://i.imgur.com/4TY5LLb.png" 
                      alt="Spain" 
                      className="w-8 h-6 object-cover rounded-sm"
                    />
                  </button>
                  <button
                    onClick={() => {
                      i18n.changeLanguage('en');
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg border transition-all ${
                      i18n.language === 'en' 
                        ? 'bg-park-green-600 text-white border-park-green-600 shadow-md' 
                        : 'bg-white text-gray-800 border-gray-300 hover:border-park-green-600 hover:bg-park-green-50'
                    }`}
                  >
                    <span className="font-medium">English</span>
                    <img 
                      src="https://i.imgur.com/JzxHcMZ.png" 
                      alt="United States" 
                      className="w-8 h-6 object-cover rounded-sm"
                    />
                  </button>
                  <button
                    onClick={() => {
                      i18n.changeLanguage('pt');
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg border transition-all ${
                      i18n.language === 'pt' 
                        ? 'bg-park-green-600 text-white border-park-green-600 shadow-md' 
                        : 'bg-white text-gray-800 border-gray-300 hover:border-park-green-600 hover:bg-park-green-50'
                    }`}
                  >
                    <span className="font-medium">Português</span>
                    <img 
                      src="https://i.imgur.com/1tZIEWB.png" 
                      alt="Brazil" 
                      className="w-8 h-6 object-cover rounded-sm"
                    />
                  </button>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header