import { FaUsers, FaClock, FaHeart, FaStar } from 'react-icons/fa';

const achievements = [
  {
    icon: FaClock,
    title: "Ils ont retrouvé du temps",
    description: "Grâce aux méthodes ViteButNotTooMuch"
  },
  {
    icon: FaHeart,
    title: "Ils ont retrouvé du sens",
    description: "Dans leur façon de travailler"
  },
  {
    icon: FaStar,
    title: "Ils ont retrouvé le plaisir",
    description: "De bien faire les choses"
  }
];

export default function AboutUsJoin() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Rejoignez le mouvement
          </h2>
          <div className="bg-blue-600 text-white p-6 rounded-lg inline-block mb-8">
            <div className="flex items-center justify-center">
              <FaUsers className="w-8 h-8 mr-4" />
              <p className="text-2xl font-bold">
                Aujourd'hui, plus de <span className="text-yellow-400">10 000 utilisateurs</span> font déjà partie de cette aventure.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-green-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-green-500">
              <div className="text-green-600 mb-6 flex justify-center">
                <achievement.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
              <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg mb-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3 relative h-48 w-full bg-blue-200 rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  loading="lazy"
                  src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="rejoindre mouvement" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="lg:w-2/3 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Ils ont changé leur manière de travailler
              </h3>
              <p className="text-xl text-gray-800">
                Vous aussi, vous pouvez rejoindre cette dynamique et transformer votre approche du travail avec <span className="font-bold text-blue-600">ViteButNotTooMuch</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 