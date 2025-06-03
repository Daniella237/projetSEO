import { FaRocket, FaTasks, FaClock, FaRoute, FaBullseye, FaCheckCircle } from 'react-icons/fa';

const skills = [
  {
    icon: FaRocket,
    title: "Savoir démarrer un projet rapidement",
    description: "sans rester bloqué dans l'analyse"
  },
  {
    icon: FaTasks,
    title: "Gérer ses priorités",
    description: "comme un chef de projet expérimenté"
  },
  {
    icon: FaClock,
    title: "Réduire le temps passé",
    description: "sur des tâches sans valeur ajoutée"
  },
  {
    icon: FaRoute,
    title: "Mettre en place des routines",
    description: "simples mais puissantes"
  },
  {
    icon: FaBullseye,
    title: "Rester focus sur ses objectifs",
    description: "sans se disperser"
  },
  {
    icon: FaCheckCircle,
    title: "Apprendre à finir",
    description: "ce qu'on commence"
  }
];

export default function LearningSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ce que vous allez apprendre avec <span className="text-blue-600">ViteButNotTooMuch</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-6">
              En rejoignant notre univers, vous ne recevez pas seulement une boîte à outils, mais un véritable changement de perspective. Voici quelques compétences clés que nos utilisateurs acquièrent :
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600">
              <div className="text-blue-600 mb-4">
                <skill.icon className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{skill.title}</h3>
              <p className="text-gray-700">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-lg text-white">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3 relative h-48 w-full bg-blue-500 rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  loading="lazy"
                  src="https://images.pexels.com/photos/5598301/pexels-photo-5598301.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="personne qui gagne du temps" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="lg:w-2/3 space-y-4">
              <p className="text-xl">
                Avec ces compétences, vous devenez plus autonome, plus organisé et surtout plus confiant dans vos capacités à bien faire les choses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 