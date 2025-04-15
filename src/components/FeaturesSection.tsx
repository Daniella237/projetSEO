import { FaClock, FaChartLine, FaBalanceScale, FaLightbulb } from 'react-icons/fa';

const features = [
  {
    icon: FaClock,
    title: "Rapidité d'exécution",
    description: "Apprenez à accomplir vos tâches plus efficacement sans précipitation grâce aux méthodes ViteButNotTooMuch."
  },
  {
    icon: FaChartLine,
    title: "Productivité optimisée",
    description: "Nos techniques éprouvées vous aident à maximiser votre rendement tout en préservant votre énergie."
  },
  {
    icon: FaBalanceScale,
    title: "Équilibre qualité-vitesse",
    description: "Trouvez le juste milieu entre rapidité et précision avec l'approche ViteButNotTooMuch."
  },
  {
    icon: FaLightbulb,
    title: "Méthodes innovantes",
    description: "Découvrez des stratégies inédites pour accélérer vos processus sans compromettre le résultat final."
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi choisir <span className="text-blue-600">ViteButNotTooMuch</span> ?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Notre approche unique combine vitesse et qualité pour vous offrir les meilleurs résultats sans compromis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                <feature.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Rejoignez les milliers d'utilisateurs qui ont adopté la philosophie ViteButNotTooMuch
          </h3>
          <p className="text-lg text-gray-700">
            Nos méthodes ont déjà aidé de nombreux professionnels à transformer leur approche du travail.
          </p>
        </div>
      </div>
    </section>
  );
} 