import { FaRocket, FaCheckCircle, FaStar } from 'react-icons/fa';
import Link from 'next/link';

const keyPoints = [
  "Ne perdez plus de temps à chercher la méthode parfaite. Elle est là.",
  "Ne sacrifiez plus votre qualité au nom de la vitesse. Il existe un autre chemin.",
  "Ne vous contentez plus de survivre à vos journées. Apprenez à en tirer le meilleur."
];

export default function CallToActionSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            On ne le répètera jamais assez…
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-2xl font-bold">
              Aller vite ne veut pas dire faire mal.
            </p>
            <p className="text-xl">
              Le vrai secret, c'est l'intention.
            </p>
            <p className="text-lg leading-relaxed">
              Quand on travaille avec une direction claire, des outils adaptés et un état d'esprit positif, on devient naturellement plus rapide et plus précis. C'est ça, l'essence de <span className="font-bold">ViteButNotTooMuch</span>.
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Prêt à changer votre façon de travailler ?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {keyPoints.map((point, index) => (
              <div key={index} className="flex items-start">
                <div className="text-yellow-400 mr-4 flex-shrink-0 mt-1">
                  <FaCheckCircle className="w-6 h-6" />
                </div>
                <p className="text-lg">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <FaRocket className="w-8 h-8 mr-4 text-yellow-400" />
            <h3 className="text-3xl font-bold">
              Rejoignez le mouvement <span className="text-yellow-400">ViteButNotTooMuch</span> aujourd'hui.
            </h3>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="#contact" 
              className="px-12 py-4 bg-yellow-400 text-blue-900 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors shadow-lg"
            >
              Commencer maintenant
            </Link>
            <Link 
              href="#features" 
              className="px-12 py-4 bg-white/20 backdrop-blur-sm border-2 border-white text-white rounded-lg font-bold text-xl hover:bg-white/30 transition-colors"
            >
              En savoir plus
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-8 rounded-lg text-center">
          <div className="flex items-center justify-center mb-4">
            <FaStar className="w-6 h-6 text-yellow-400 mr-2" />
            <h4 className="text-2xl font-bold">
              Allez vite, mais allez bien.
            </h4>
            <FaStar className="w-6 h-6 text-yellow-400 ml-2" />
          </div>
          <p className="text-lg opacity-90">
            La philosophie <span className="font-bold text-yellow-400">ViteButNotTooMuch</span> en une phrase.
          </p>
        </div>
      </div>
    </section>
  );
} 