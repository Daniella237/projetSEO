import { FaGraduationCap, FaDownload, FaPodcast, FaLightbulb, FaCalendarAlt } from 'react-icons/fa';

const platformFeatures = [
  {
    icon: FaGraduationCap,
    emoji: "🎓",
    title: "Guides pratiques et méthodologiques",
    description: "Chaque guide est pensé pour être actionnable en 10 minutes, pas besoin de lire 300 pages."
  },
  {
    icon: FaDownload,
    emoji: "📊",
    title: "Outils et modèles téléchargeables",
    description: "Planning hebdo, to-do intelligent, matrices de priorisation, checklists de lancement rapide…"
  },
  {
    icon: FaPodcast,
    emoji: "🎧",
    title: "Podcast & interviews",
    description: "Écoutez les témoignages de ceux qui appliquent nos méthodes dans leur quotidien professionnel."
  },
  {
    icon: FaLightbulb,
    emoji: "💡",
    title: "Blog d'inspiration",
    description: "On y parle organisation, gestion du temps, équilibre pro/perso, énergie mentale, habitudes…"
  },
  {
    icon: FaCalendarAlt,
    emoji: "📅",
    title: "Formations express",
    description: "Des formats courts et efficaces, à suivre à votre rythme, conçus pour un maximum de résultats en un minimum de temps."
  }
];

export default function PlatformSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ce que vous trouverez sur notre plateforme
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {platformFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{feature.emoji}</span>
                <div className="text-blue-600">
                  <feature.icon className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-lg text-white">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3 relative h-48 w-full bg-blue-500 rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  loading="lazy"
                  src="https://images.pexels.com/photos/7563681/pexels-photo-7563681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="social media" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="lg:w-2/3 space-y-4">
              <h3 className="text-2xl font-bold">
                Une plateforme complète à votre service
              </h3>
              <p className="text-xl">
                Découvrez tous les outils et ressources dont vous avez besoin pour transformer votre façon de travailler avec <span className="font-bold">ViteButNotTooMuch</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 