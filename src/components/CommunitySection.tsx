import { FaUsers, FaComments, FaLaptop, FaTrophy, FaHandsHelping } from 'react-icons/fa';

const communityFeatures = [
  {
    icon: FaComments,
    title: "Un groupe privé (Slack/Discord)",
    description: "pour poser vos questions"
  },
  {
    icon: FaLaptop,
    title: "Des sessions collectives de co-working",
    description: "en ligne"
  },
  {
    icon: FaTrophy,
    title: "Des challenges mensuels",
    description: "pour garder le rythme"
  },
  {
    icon: FaHandsHelping,
    title: "Un réseau d'entraide",
    description: "pour progresser à plusieurs"
  }
];

export default function CommunitySection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Une communauté qui avance ensemble
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-6">
              Avec plus de <span className="font-bold text-blue-600">10 000 membres</span>, notre communauté est un vrai espace d'échange. Rejoindre <span className="font-bold text-blue-600">ViteButNotTooMuch</span>, c'est aussi accéder à :
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {communityFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-start">
              <div className="text-blue-600 mr-6 flex-shrink-0">
                <feature.icon className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700 text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-lg text-white">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3 relative h-48 w-full bg-blue-500 rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  loading="lazy"
                  src="https://images.pexels.com/photos/5082865/pexels-photo-5082865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="communauté" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="lg:w-2/3 space-y-4">
              <div className="flex items-center mb-4">
                <FaUsers className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-bold">
                  Plus de 10 000 membres actifs
                </h3>
              </div>
              <p className="text-xl">
                Rejoignez une communauté bienveillante où chacun partage ses expériences, ses réussites et ses défis avec <span className="font-bold">ViteButNotTooMuch</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 