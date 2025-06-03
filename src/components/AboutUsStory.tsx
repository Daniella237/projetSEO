import { FaQuestionCircle, FaLightbulb } from 'react-icons/fa';

export default function AboutUsStory() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Notre histoire
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
              <FaLightbulb className="w-6 h-6 text-blue-600 mr-3" />
              Tout a commencé par une frustration.
            </h3>
            
            <div className="space-y-4 text-lg text-gray-700">
              <p>Des journées qui s'enchaînent à 200 à l'heure. Des projets bouclés à la dernière minute. Des tâches qui s'accumulent sans jamais être terminées comme il faut. Et ce sentiment constant d'avoir été productif… sans avoir vraiment avancé.</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <FaQuestionCircle className="w-5 h-5 text-blue-600 mr-3" />
                Alors on a posé cette question simple :
              </h4>
              <div className="space-y-3 text-gray-700">
                <p className="font-medium">Et si on arrêtait de courir dans tous les sens pour aller vite, mais pas trop ?</p>
                <p className="font-medium">Et si on apprenait à mieux gérer notre temps, notre attention, notre énergie ?</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-lg text-white">
              <p className="text-xl font-semibold text-center">
                C'est ainsi qu'est né <span className="text-yellow-400">ViteButNotTooMuch</span>.
              </p>
            </div>
          </div>

          <div className="relative h-96 w-full bg-blue-200 rounded-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                loading="lazy"
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="frustration au travail" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 