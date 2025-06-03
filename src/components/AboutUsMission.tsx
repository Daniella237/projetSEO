import { FaBullseye, FaTimes, FaCheckCircle } from 'react-icons/fa';

export default function AboutUsMission() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Notre mission
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-80 w-full bg-blue-200 rounded-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                loading="lazy"
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="mission équipe" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-blue-600 p-8 rounded-lg text-white">
              <div className="flex items-center mb-4">
                <FaBullseye className="w-8 h-8 text-yellow-400 mr-4" />
                <h3 className="text-2xl font-bold">Notre objectif</h3>
              </div>
              <p className="text-xl leading-relaxed">
                vous aider à trouver l'équilibre parfait entre rapidité et qualité dans votre quotidien professionnel.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <div className="flex items-start">
                  <FaTimes className="w-6 h-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Ce que nous ne sommes PAS</h4>
                    <p className="text-gray-700">Nous ne sommes pas là pour vous transformer en machine à cocher des cases.</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start">
                  <FaCheckCircle className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Ce que nous SOMMES</h4>
                    <p className="text-gray-700">Nous sommes là pour vous accompagner dans une transition durable, intelligente et alignée avec vos objectifs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 