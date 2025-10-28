import { CheckCircle2, Users, GraduationCap, Heart, ArrowRight } from 'lucide-react'

const Recruitment = () => {
  return (
    <div className="pt-20">
      {/* hero banner recrutamento */}
      <section className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105"
          style={{ backgroundImage: 'url(/images/training-room.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-moss-green-800/95 via-moss-green-700/90 to-moss-green-600/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
              Únete a Nuestro Equipo
            </h1>
            <p className="text-xl md:text-2xl text-white leading-relaxed animate-slide-up" style={{animationDelay: '0.1s'}}>
              Conviértete en Park Ranger y forma parte de una tradición 
              de servicio y protección ambiental
            </p>
          </div>
        </div>
        
        {/* decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* por que se juntar */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-moss-green-50 border border-moss-green-200 rounded-full mb-6">
              <span className="text-moss-green-700 text-sm font-semibold">Beneficios</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-moss-green-700 to-moss-green-600 bg-clip-text text-transparent mb-4">
              ¿Por Qué Ser Park Ranger?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ser parte de San Andreas State Parks significa más que un trabajo, 
              es un compromiso con la naturaleza y nuestra comunidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group flex items-start space-x-4 p-8 bg-white rounded-2xl hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-moss-green-500 to-moss-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-medium">
                <Heart className="text-white" size={26} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-moss-green-700 mb-2">
                  Propósito Significativo
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Protege y preserva la belleza natural de San Andreas para las futuras generaciones
                </p>
              </div>
            </div>

            <div className="group flex items-start space-x-4 p-8 bg-white rounded-2xl hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-park-blue-500 to-park-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-medium">
                <Users className="text-white" size={26} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-moss-green-700 mb-2">
                  Equipo Excepcional
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Trabaja junto a profesionales dedicados y apasionados por la conservación
                </p>
              </div>
            </div>

            <div className="group flex items-start space-x-4 p-8 bg-white rounded-2xl hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-park-yellow-500 to-park-yellow-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-medium">
                <GraduationCap className="text-white" size={26} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-moss-green-700 mb-2">
                  Formación Continua
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Accede a programas de capacitación y desarrollo profesional constante
                </p>
              </div>
            </div>

            <div className="group flex items-start space-x-4 p-8 bg-white rounded-2xl hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-moss-green-600 to-moss-green-700 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-medium">
                <CheckCircle2 className="text-white" size={26} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-moss-green-700 mb-2">
                  Beneficios Completos
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Disfruta de un paquete de beneficios competitivo y estabilidad laboral
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* requisitos */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-moss-green-50 border border-moss-green-200 rounded-full mb-6">
                <span className="text-moss-green-700 text-sm font-semibold">Requisitos</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-moss-green-700 to-moss-green-600 bg-clip-text text-transparent">
                ¿Qué Necesitas?
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-strong p-8 md:p-12 border border-gray-100">
              <h3 className="text-2xl font-semibold text-moss-green-700 mb-8 flex items-center gap-3">
                <CheckCircle2 className="text-moss-green-600" size={32} />
                Para unirte a nuestro equipo necesitas:
              </h3>
              
              <ul className="space-y-5">
                <li className="flex items-start group">
                  <CheckCircle2 className="text-moss-green-500 flex-shrink-0 mt-1 mr-4 group-hover:scale-125 transition-transform duration-300" size={22} />
                  <span className="text-gray-700 text-lg">
                    Ser ciudadano de San Andreas o tener permiso de trabajo válido
                  </span>
                </li>
                <li className="flex items-start group">
                  <CheckCircle2 className="text-moss-green-500 flex-shrink-0 mt-1 mr-4 group-hover:scale-125 transition-transform duration-300" size={22} />
                  <span className="text-gray-700 text-lg">
                    Tener al menos 21 años de edad
                  </span>
                </li>
                <li className="flex items-start group">
                  <CheckCircle2 className="text-moss-green-500 flex-shrink-0 mt-1 mr-4 group-hover:scale-125 transition-transform duration-300" size={22} />
                  <span className="text-gray-700 text-lg">
                    Diploma de educación secundaria o equivalente
                  </span>
                </li>
                <li className="flex items-start group">
                  <CheckCircle2 className="text-moss-green-500 flex-shrink-0 mt-1 mr-4 group-hover:scale-125 transition-transform duration-300" size={22} />
                  <span className="text-gray-700 text-lg">
                    Licencia de conducir válida
                  </span>
                </li>
                <li className="flex items-start group">
                  <CheckCircle2 className="text-moss-green-500 flex-shrink-0 mt-1 mr-4 group-hover:scale-125 transition-transform duration-300" size={22} />
                  <span className="text-gray-700 text-lg">
                    Excelente condición física y capacidad para trabajar al aire libre
                  </span>
                </li>
                <li className="flex items-start group">
                  <CheckCircle2 className="text-moss-green-500 flex-shrink-0 mt-1 mr-4 group-hover:scale-125 transition-transform duration-300" size={22} />
                  <span className="text-gray-700 text-lg">
                    Pasar verificación de antecedentes y examen médico
                  </span>
                </li>
                <li className="flex items-start group">
                  <CheckCircle2 className="text-moss-green-500 flex-shrink-0 mt-1 mr-4 group-hover:scale-125 transition-transform duration-300" size={22} />
                  <span className="text-gray-700 text-lg">
                    Pasión por la conservación y el servicio público
                  </span>
                </li>
              </ul>

              <div className="mt-10 p-6 bg-gradient-to-r from-moss-green-50 to-park-yellow-50 rounded-xl border-l-4 border-moss-green-500">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-moss-green-700 text-lg">Nota:</strong> Se valorará experiencia previa 
                  en aplicación de la ley, servicios de emergencia, o gestión de recursos naturales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* processo de selecao */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-moss-green-50 border border-moss-green-200 rounded-full mb-6">
              <span className="text-moss-green-700 text-sm font-semibold">5 Pasos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-moss-green-700 to-moss-green-600 bg-clip-text text-transparent">
              Proceso de Selección
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="group flex items-start space-x-6 p-6 bg-gradient-to-r from-white to-gray-50 rounded-2xl border-2 border-gray-100 hover:border-moss-green-300 hover:shadow-strong transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-moss-green-500 to-moss-green-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-medium">
                  1
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-semibold text-moss-green-700 mb-3">
                    Aplicación en Línea
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Completa el formulario de solicitud con tus datos personales y experiencia
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-6 p-6 bg-gradient-to-r from-white to-gray-50 rounded-2xl border-2 border-gray-100 hover:border-moss-green-300 hover:shadow-strong transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-park-blue-500 to-park-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-medium">
                  2
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-semibold text-moss-green-700 mb-3">
                    Evaluación Inicial
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Revisión de documentos y verificación de requisitos básicos
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-6 p-6 bg-gradient-to-r from-white to-gray-50 rounded-2xl border-2 border-gray-100 hover:border-moss-green-300 hover:shadow-strong transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-park-yellow-500 to-park-yellow-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-medium">
                  3
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-semibold text-moss-green-700 mb-3">
                    Examen Físico
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Pruebas de aptitud física y evaluación médica completa
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-6 p-6 bg-gradient-to-r from-white to-gray-50 rounded-2xl border-2 border-gray-100 hover:border-moss-green-300 hover:shadow-strong transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-moss-green-600 to-moss-green-700 text-white rounded-2xl flex items-center justify-center font-bold text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-medium">
                  4
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-semibold text-moss-green-700 mb-3">
                    Entrevista Personal
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Entrevista con el panel de selección para evaluar motivación y competencias
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-6 p-6 bg-gradient-to-r from-white to-gray-50 rounded-2xl border-2 border-gray-100 hover:border-moss-green-300 hover:shadow-strong transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-moss-green-500 to-moss-green-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-medium">
                  5
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-semibold text-moss-green-700 mb-3">
                    Academia de Formación
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Programa intensivo de 12 semanas de capacitación teórica y práctica
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* call to action final */}
      <section className="py-24 bg-gradient-to-br from-moss-green-700 via-moss-green-600 to-moss-green-800 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
            ¿Listo para Comenzar tu Carrera?
          </h2>
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.1s'}}>
            El proceso de reclutamiento está abierto. No pierdas la oportunidad 
            de formar parte de esta institución histórica.
          </p>
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <a
              href="mailto:emteste@stateparks.lossantos.gov"
              className="group inline-flex items-center px-12 py-6 bg-white text-moss-green-800 font-bold rounded-xl hover:bg-park-yellow-100 hover:text-moss-green-900 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-2xl text-lg"
            >
              Enviar Solicitud
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Recruitment
