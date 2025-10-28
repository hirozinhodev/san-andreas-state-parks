import { MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-moss-green-700 via-moss-green-600 to-moss-green-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* sobre */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/images/logo.png" 
                alt="Logo" 
                className="h-12 w-12"
              />
              <div>
                <h3 className="font-bold text-lg">San Andreas State Parks</h3>
              </div>
            </div>
            <p className="text-sm text-white/90 leading-relaxed">
              Protegiendo y preservando la belleza natural de San Andreas 
              para las generaciones futuras.
            </p>
          </div>

          {/* contato */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-park-yellow">
              Contacto
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <p className="text-sm text-white/90">
                  San Andreas, Estado de San Andreas
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <p className="text-sm text-white/90">
                  0000000000
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <p className="text-sm text-white/90">
                  emteste@stateparks.lossantos.gov
                </p>
              </div>
            </div>
          </div>

          {/* links rapidos */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-park-yellow">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/" 
                  className="text-sm text-white/90 hover:text-park-yellow transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a 
                  href="/reclutamiento" 
                  className="text-sm text-white/90 hover:text-park-yellow transition-colors"
                >
                  Únete a Nosotros
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* copyright */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} San Andreas State Parks. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
