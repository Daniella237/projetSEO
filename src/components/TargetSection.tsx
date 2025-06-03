import { FaUserTie, FaUsers, FaGraduationCap, FaRocket, FaBriefcase } from 'react-icons/fa';

const profiles = [
  {
    icon: FaUserTie,
    title: "Freelancers et indépendants",
    description: "qui doivent gérer 10 casquettes à la fois"
  },
  {
    icon: FaUsers,
    title: "Managers débordés",
    description: "qui jonglent entre réunions, deadlines et imprévus"
  },
  {
    icon: FaGraduationCap,
    title: "Étudiants",
    description: "qui veulent mieux s'organiser sans sacrifier leurs soirées"
  },
  {
    icon: FaRocket,
    title: "Entrepreneurs",
    description: "qui cherchent à scaler sans perdre en contrôle"
  },
  {
    icon: FaBriefcase,
    title: "Salariés",
    description: "qui veulent performer sans finir en burn-out"
  }
];

export default function TargetSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Pour qui est fait <span className="text-blue-600">ViteButNotTooMuch</span> ?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-6">
              <span className="font-bold text-blue-600">ViteButNotTooMuch</span> s'adresse à tous ceux qui en ont marre de courir après le temps. Vous vous reconnaissez sûrement dans un (ou plusieurs) de ces profils :
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {profiles.map((profile, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <profile.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{profile.title}</h3>
              <p className="text-gray-700">{profile.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3 relative h-48 w-full bg-blue-200 rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  loading="lazy"
                  src="https://images.pexels.com/photos/6512339/pexels-photo-6512339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="personne qui gagne du temps" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="lg:w-2/3 space-y-4">
              <p className="text-xl text-gray-800 font-semibold">
                Bref, si vous voulez gagner du temps, sans bâcler votre travail, vous êtes au bon endroit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 