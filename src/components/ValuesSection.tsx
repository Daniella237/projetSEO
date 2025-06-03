import { FaEye, FaHeart, FaLeaf, FaSmile, FaKey } from 'react-icons/fa';

const values = [
  {
    icon: FaEye,
    title: "Clarté",
    description: "Pas de jargon inutile. On va droit au but."
  },
  {
    icon: FaHeart,
    title: "Simplicité",
    description: "Nos méthodes sont accessibles à tous, pas besoin d'être un expert."
  },
  {
    icon: FaLeaf,
    title: "Impact durable",
    description: "On ne cherche pas la performance instantanée, mais celle qui tient dans le temps."
  },
  {
    icon: FaSmile,
    title: "Bienveillance",
    description: "On croit qu'on peut être ambitieux sans tomber dans la surproductivité toxique."
  },
  {
    icon: FaKey,
    title: "Liberté",
    description: "Ce qu'on propose, c'est un cadre. Pas une prison. Vous restez maître de votre rythme."
  }
];

export default function ValuesSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nos valeurs : ce qui nous guide
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="bg-blue-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-blue-600">
              <div className="text-blue-600 mb-6 flex justify-center">
                <value.icon className="w-12 h-12" />
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
                Des valeurs qui font la différence
              </h3>
              <p className="text-xl text-gray-800">
                Ces valeurs ne sont pas juste des mots sur une page. Elles guident chaque décision, chaque méthode et chaque interaction avec notre communauté <span className="font-bold text-blue-600">ViteButNotTooMuch</span>.
              </p>
            </div>
            <div className="lg:w-1/3 relative h-48 w-full bg-blue-200 rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  loading="lazy"
                  src="https://images.pexels.com/photos/4734933/pexels-photo-4734933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="pancarte" 
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