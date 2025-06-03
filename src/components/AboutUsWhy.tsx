import { FaArrowDown, FaArrowUp, FaBalanceScale } from 'react-icons/fa';

export default function AboutUsWhy() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Pourquoi "<span className="text-blue-600">ViteButNotTooMuch</span>" ?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Parce que c'est l'équilibre qu'on cherche tous.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-red-50 p-8 rounded-lg text-center border-l-4 border-red-500">
            <div className="text-red-600 mb-4 flex justify-center">
              <FaArrowDown className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">👉 Trop lent</h3>
            <p className="text-gray-700 text-lg">on stagne.</p>
          </div>

          <div className="bg-green-50 p-8 rounded-lg text-center border-l-4 border-green-500">
            <div className="text-green-600 mb-4 flex justify-center">
              <FaBalanceScale className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">✨ L'équilibre parfait</h3>
            <p className="text-gray-700 text-lg">
              <span className="font-bold text-blue-600">ViteButNotTooMuch</span>
            </p>
          </div>

          <div className="bg-orange-50 p-8 rounded-lg text-center border-l-4 border-orange-500">
            <div className="text-orange-600 mb-4 flex justify-center">
              <FaArrowUp className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">👉 Trop rapide</h3>
            <p className="text-gray-700 text-lg">on bâcle.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-lg text-white">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3 relative h-48 w-full bg-blue-500 rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  loading="lazy"
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="équilibre travail" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="lg:w-2/3 space-y-6">
              <h3 className="text-2xl font-bold">
                Le juste milieu que nous incarnons
              </h3>
              <div className="space-y-4 text-lg">
                <p>Il faut apprendre à aller vite, mais intelligemment.</p>
                <p>À avancer avec méthode, pas dans la panique.</p>
                <p>À travailler avec intention, pas en mode automatique.</p>
              </div>
              <p className="text-xl font-bold text-yellow-400">
                <span className="text-blue-600">ViteButNotTooMuch</span>, c'est ce juste milieu. C'est ce qu'on incarne, et c'est ce qu'on vous aide à atteindre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 