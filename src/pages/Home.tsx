import { Shield, TreePine, Users, Award, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()

  return (
    <div className="pt-20">
      {/* hero banner moderno com overlay sofisticado */}
      <section className="relative h-[700px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105"
          style={{ backgroundImage: 'url(/images/hero-landscape.jpg)' }}
        >
          {/* overlay com gradiente complexo */}
          <div className="absolute inset-0 bg-gradient-to-br from-park-blue-900/95 via-park-green-800/90 to-park-blue-800/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          {/* textura sutil */}
          <div className="absolute inset-0 texture-overlay" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white animate-slide-up">
              {t('guardians_of')}
              <span className="block bg-gradient-to-r from-park-yellow-300 via-park-yellow-400 to-park-yellow-500 bg-clip-text text-transparent">
                {t('nature')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed animate-slide-up" style={{animationDelay: '0.1s'}}>
              {t('dedicated_to_preserving')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <Link
                to="/reclutamiento"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-park-yellow-400 to-park-yellow-500 text-park-blue-900 font-bold rounded-xl hover:shadow-strong transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                {t('join_our_team')}
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                {t('learn_more')}
              </a>
            </div>
          </div>
        </div>
        
        {/* decoração ondulada na parte inferior */}
        <div className="absolute bottom-0 left-0 right-0 -mb-1">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* sobre nos com design moderno */}
      <section id="sobre" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-block px-4 py-2 bg-park-green-50 border border-park-green-200 rounded-full mb-6">
              <span className="text-park-green-700 text-sm font-semibold">{t('our_mission')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-park-blue-700 to-park-green-700 bg-clip-text text-transparent mb-6">
              {t('who_we_are')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('park_rangers_san_andreas', { years: '150' })}
            </p>
          </div>

          {/* cards de missao com design moderno */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card Protección */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-park-blue-100 to-park-blue-50 rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-park-blue-500 to-park-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-medium">
                  <Shield className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-park-blue-600 transition-colors">{t('protection')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('safeguard_flora_fauna')}
                </p>
              </div>
            </div>

            {/* Card Conservación */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-park-green-100 to-park-green-50 rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-park-green-500 to-park-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-medium">
                  <TreePine className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-park-green-600 transition-colors">{t('conservation')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('preserve_ecosystems')}
                </p>
              </div>
            </div>

            {/* Card Comunidad */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-park-yellow-100 to-park-yellow-50 rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-park-yellow-500 to-park-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-medium">
                  <Users className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-park-yellow-600 transition-colors">{t('community')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('work_with_community')}
                </p>
              </div>
            </div>

            {/* Card Excelencia */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-park-blue-100 to-park-green-50 rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-park-blue-500 to-park-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-medium">
                  <Award className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-park-blue-600 transition-colors">{t('excellence')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('highest_standards')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* galeria de imagens moderna */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-park-blue-50 border border-park-blue-200 rounded-full mb-6">
              <span className="text-park-blue-700 text-sm font-semibold">{t('in_action')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-park-blue-700 to-park-green-700 bg-clip-text text-transparent mb-4">
              {t('our_work')}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t('know_how_we_protect')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/images/ranger-landscape.jpg" 
                alt="Ranger en paisaje" 
                className="w-full h-64 object-cover group-hover:scale-110 group-hover:brightness-90 transition-all duration-500"
              />
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/images/team-view.jpg" 
                alt="Equipo observando" 
                className="w-full h-64 object-cover group-hover:scale-110 group-hover:brightness-90 transition-all duration-500"
              />
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/images/helicopter.jpg" 
                alt="Helicóptero" 
                className="w-full h-64 object-cover group-hover:scale-110 group-hover:brightness-90 transition-all duration-500"
              />
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/images/vehicle-road.jpg" 
                alt="Vehículo en carretera" 
                className="w-full h-64 object-cover group-hover:scale-110 group-hover:brightness-90 transition-all duration-500"
              />
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/images/forest-view.jpg" 
                alt="Vista del bosque" 
                className="w-full h-64 object-cover group-hover:scale-110 group-hover:brightness-90 transition-all duration-500"
              />
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/images/vehicle-forest.jpg" 
                alt="Vehículo en bosque" 
                className="w-full h-64 object-cover group-hover:scale-110 group-hover:brightness-90 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home