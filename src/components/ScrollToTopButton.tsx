import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Mostrar o botão quando rolar para baixo
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // Função para rolar até o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-moss-green-600 to-moss-green-700 text-white rounded-full shadow-strong hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group animate-fade-in"
          aria-label="Volver arriba"
        >
          <ChevronUp 
            className="group-hover:-translate-y-1 transition-transform duration-300" 
            size={28} 
          />
        </button>
      )}
    </>
  )
}

export default ScrollToTopButton
