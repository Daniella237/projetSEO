import { FaTimes, FaCheckCircle } from 'react-icons/fa';

const whatWeAreNot = [
  "Une méthode miracle",
  "Un hack douteux", 
  "Une promesse de faire en 2h ce qui prend 10h",
  "Une solution pour performer un mois puis s'effondrer"
];

const whatWeOffer = [
  "Mieux gérer votre énergie",
  "Supprimer les distractions", 
  "Construire un rythme durable",
  "Devenir plus intentionnel dans votre travail"
];

export default function WhatWeAreNotSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ce que <span className="text-blue-600">ViteButNotTooMuch</span> n'est pas
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-6">
              Pour être clair, on ne vend pas de rêve. On ne promet pas que vous ferez en 2 heures ce qui prend normalement 10. Ce n'est ni une méthode miracle, ni un hack douteux.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Ce que nous ne sommes pas */}
          <div className="bg-red-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
              <FaTimes className="w-6 h-6 mr-3" />
              Ce que nous ne sommes PAS
            </h3>
            <ul className="space-y-4">
              {whatWeAreNot.map((item, index) => (
                <li key={index} className="flex items-start">
                  <FaTimes className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ce que nous offrons */}
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
              <FaCheckCircle className="w-6 h-6 mr-3" />
              On vous donne des outils pour
            </h3>
            <ul className="space-y-4">
              {whatWeOffer.map((item, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-2/3 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Une méthode pensée pour durer
              </h3>
              <p className="text-xl text-gray-800">
                C'est une méthode pensée pour durer, pas juste pour performer un mois puis s'effondrer.
              </p>
            </div>
            <div className="lg:w-1/3 relative h-48 w-full bg-blue-200 rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  loading="lazy"
                  src="https://images.pexels.com/photos/2098007/pexels-photo-2098007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="méthode pensée pour durer" 
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