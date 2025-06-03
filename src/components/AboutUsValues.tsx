import { FaEye, FaRocket, FaGem, FaClock, FaHeart } from 'react-icons/fa';

const values = [
  {
    icon: FaEye,
    title: "Clarté",
    description: "On ne tourne pas autour du pot. Ce qu'on propose est simple, concret et applicable."
  },
  {
    icon: FaRocket,
    title: "Efficacité",
    description: "On va à l'essentiel. Nos méthodes sont pensées pour avoir un impact immédiat et durable."
  },
  {
    icon: FaGem,
    title: "Qualité",
    description: "Faire vite, oui. Mais jamais au détriment de la qualité. Le bon travail reste notre priorité."
  },
  {
    icon: FaClock,
    title: "Respect du rythme",
    description: "On avance à votre rythme. Pas de pression inutile. Pas de dogme. Juste des outils et des choix."
  },
  {
    icon: FaHeart,
    title: "Humanité",
    description: "Derrière ViteButNotTooMuch, il y a des humains. Des gens qui doutent, qui testent, qui progressent. Comme vous."
  }
];

export default function AboutUsValues() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nos valeurs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
              <div className="flex items-center mb-6">
                <div className="text-blue-600 mr-4">
                  <value.icon className="w-8 h-8" />
                </div>
                <div className="bg-green-100 px-3 py-1 rounded-full">
                  <span className="text-green-800 font-bold text-sm">✅</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-700 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-2/3 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Des valeurs qui nous définissent
              </h3>
              <p className="text-xl text-gray-800">
                Ces valeurs ne sont pas des concepts abstraits. Elles guident chaque décision, chaque méthode et chaque interaction avec notre communauté <span className="font-bold text-blue-600">ViteButNotTooMuch</span>.
              </p>
            </div>
            <div className="lg:w-1/3 relative h-48 w-full bg-blue-200 rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  loading="lazy"
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="valeurs équipe" 
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