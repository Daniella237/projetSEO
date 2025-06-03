import { FaUserTie, FaRocket, FaChalkboardTeacher, FaCode, FaStar } from 'react-icons/fa';

const teamMembers = [
  {
    icon: FaUserTie,
    title: "Freelancers",
    description: "qui ont appris à jongler entre clients, deadlines et repos"
  },
  {
    icon: FaRocket,
    title: "Entrepreneurs",
    description: "qui savent que \"travailler plus\" ne veut pas dire \"réussir mieux\""
  },
  {
    icon: FaChalkboardTeacher,
    title: "Formateurs et coachs",
    description: "spécialisés en organisation et gestion de projet"
  },
  {
    icon: FaCode,
    title: "Développeurs, créatifs, rédacteurs",
    description: "qui ont vu les dégâts de la surcharge mentale"
  }
];

export default function AboutUsTeam() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Une équipe qui connaît vos réalités
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Notre force, c'est notre diversité. <span className="font-bold text-blue-600">ViteButNotTooMuch</span>, c'est une petite équipe passionnée, composée de :
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <div className="text-blue-600 mr-6 flex-shrink-0">
                  <member.icon className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{member.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-lg text-white mb-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3 relative h-48 w-full bg-blue-500 rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  loading="lazy"
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="équipe diverse" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="lg:w-2/3 space-y-4">
              <h3 className="text-2xl font-bold">
                On est comme vous
              </h3>
              <p className="text-xl">
                on cherche à faire les choses bien, sans se cramer.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <FaStar className="w-6 h-6 text-blue-600 mr-3" />
              <h4 className="text-xl font-bold text-gray-900">Notre approche</h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              On applique nous-mêmes les méthodes qu'on partage. Et quand quelque chose ne fonctionne pas, on le remet en question.
            </p>
          </div>

          <div className="bg-yellow-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <FaStar className="w-6 h-6 text-yellow-600 mr-3" />
              <h4 className="text-xl font-bold text-gray-900">Notre promesse</h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Pas de bullshit, que du vécu. Nous partageons uniquement ce qui fonctionne vraiment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 