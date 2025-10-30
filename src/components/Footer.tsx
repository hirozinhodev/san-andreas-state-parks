import { MapPin, Phone, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

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
              {t('protecting_preserving')}
            </p>
          </div>

          {/* contato */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-park-yellow">
              {t('contact')}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <p className="text-sm text-white/90">
                  {t('san_andreas_state')}
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
              {t('quick_links')}
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/" 
                  className="text-sm text-white/90 hover:text-park-yellow transition-colors"
                >
                  {t('home')}
                </a>
              </li>
              <li>
                <a 
                  href="/reclutamiento" 
                  className="text-sm text-white/90 hover:text-park-yellow transition-colors"
                >
                  {t('recruitment')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* copyright */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} San Andreas State Parks. {t('all_rights_reserved')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer