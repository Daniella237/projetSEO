import { FaMapMarkerAlt, FaHandshake, FaBrain, FaClock, FaSync } from 'react-icons/fa';

const keyPoints = [
  {
    icon: FaMapMarkerAlt,
    emoji: "📍",
    title: "Basé sur l'expérience terrain",
    description: "Nos méthodes sont testées et approuvées par des professionnels"
  },
  {
    icon: FaHandshake,
    emoji: "🤝",
    title: "Pensé pour vous, pas contre vous",
    description: "Une approche bienveillante et respectueuse de vos besoins"
  },
  {
    icon: FaBrain,
    emoji: "🧠",
    title: "Simple à comprendre, puissant à appliquer",
    description: "Des concepts clairs pour des résultats concrets"
  },
  {
    icon: FaClock,
    emoji: "⏳",
    title: "Respectueux de votre temps",
    description: "Pas de perte de temps, que de l'efficacité"
  },
  {
    icon: FaSync,
    emoji: "🔄",
    title: "En constante amélioration grâce à vous",
    description: "Votre feedback nous aide à évoluer continuellement"
  }
];

export default function AboutUsSummary() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            En bref
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {keyPoints.map((point, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{point.emoji}</span>
                <div className="text-blue-600">
                  <point.icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{point.title}</h3>
              <p className="text-gray-700 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-12 rounded-lg text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-yellow-400">ViteButNotTooMuch</span>, c'est nous. C'est vous.
          </h3>
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
            C'est tous ceux qui veulent aller vite, mais bien.
          </p>
          
          <div className="mt-8 bg-white/10 backdrop-blur-sm p-6 rounded-lg inline-block">
            <p className="text-lg font-medium">
              Rejoignez le mouvement et transformez votre façon de travailler dès aujourd'hui.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 