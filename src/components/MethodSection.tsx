import { FaLightbulb, FaListOl, FaSync } from 'react-icons/fa';

const pillars = [
  {
    icon: FaLightbulb,
    title: "La simplification intelligente",
    description: "on apprend à dire non, à déléguer, à automatiser."
  },
  {
    icon: FaListOl,
    title: "La priorisation stratégique",
    description: "on fait le tri entre ce qui est urgent, important, secondaire… et ce qui peut attendre."
  },
  {
    icon: FaSync,
    title: "L'itération consciente",
    description: "avancer rapidement sans chercher la perfection immédiate, mais avec une amélioration continue."
  }
];

export default function MethodSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comment ça marche ?
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-gray-700">
              Chez <span className="font-bold text-blue-600">ViteButNotTooMuch</span>, on ne vous donne pas juste des conseils génériques ou des théories abstraites. On vous offre une méthode complète, concrète et testée pour améliorer vos performances sans sacrifier votre santé mentale, ni la qualité de vos résultats.
            </p>
            <p className="text-lg text-gray-700">
              Chaque méthode repose sur trois piliers :
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-blue-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-6 flex justify-center">
                <pillar.icon className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
              <p className="text-gray-700 text-lg">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-2/3 space-y-4">
              <p className="text-lg text-gray-800">
                Cette méthode, vous pouvez l'appliquer dès aujourd'hui. Pas besoin d'un MBA ni de 3 semaines de formation. En quelques clics, vous commencez à transformer votre manière de travailler.
              </p>
            </div>
            <div className="lg:w-1/3 relative h-48 w-full bg-blue-200 rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  loading="lazy"
                  src="https://images.pexels.com/photos/3990844/pexels-photo-3990844.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                  alt="méthode" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 