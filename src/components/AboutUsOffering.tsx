import { FaNewspaper, FaCogs, FaDownload, FaUsers } from 'react-icons/fa';

const offerings = [
  {
    icon: FaNewspaper,
    title: "Des articles concrets",
    description: "pour mieux vous organiser"
  },
  {
    icon: FaCogs,
    title: "Des méthodes structurées",
    description: "pour aller plus vite sans perdre en rigueur"
  },
  {
    icon: FaDownload,
    title: "Des outils simples",
    description: "pour améliorer votre quotidien (modèles, fiches, templates)"
  },
  {
    icon: FaUsers,
    title: "Une communauté engagée",
    description: "qui avance à vos côtés"
  }
];

export default function AboutUsOffering() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ce qu'on propose
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Sur <span className="font-bold text-blue-600">ViteButNotTooMuch</span>, vous trouverez :
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {offerings.map((offering, index) => (
            <div key={index} className="bg-blue-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="text-blue-600 mr-6 flex-shrink-0">
                  <offering.icon className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{offering.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{offering.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-2/3 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Un projet vivant et collaboratif
              </h3>
              <p className="text-xl text-gray-800">
                Nous croyons en l'intelligence collective. Ce projet est vivant, en constante évolution. Chaque retour, chaque témoignage, chaque nouvelle idée contribue à l'améliorer.
              </p>
            </div>
            <div className="lg:w-1/3 relative h-48 w-full bg-blue-200 rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  loading="lazy"
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="collaboration équipe" 
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