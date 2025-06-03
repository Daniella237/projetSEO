import Link from 'next/link';
import Image from 'next/image';

export default function ProductiviteOptimisee() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <Link 
          href="/"
          className="inline-block mb-8 text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Retour à l'accueil
        </Link>
        
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Productivité optimisée : faites mieux, sans vous épuiser
          </h1>
          <div className="flex justify-center items-center gap-4 text-gray-600">
            <span>23 Mars 2024</span>
            <span>•</span>
            <span>5 min de lecture</span>
          </div>
        </header>

        <div className="max-w-3xl mx-auto prose prose-lg">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <p className="text-xl text-gray-700 italic border-l-4 border-blue-500 pl-4">
              "La productivité n'est pas une course de vitesse, mais un marathon d'efficacité."
            </p>
          </div>

          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
              <span className="text-xl text-blue-600">Image principale - Productivité optimisée</span>
            </div>
          </div>

          <p className="lead text-xl text-gray-700 mb-8">
            Dans une époque où "faire plus" est devenu une injonction quotidienne, il est temps de repenser notre rapport à la productivité. Chez ViteButNotTooMuch, nous croyons qu'optimiser son rendement ne signifie pas travailler plus dur, mais travailler plus intelligemment.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-semibold text-blue-800 mb-4">L'équilibre productif</h2>
              <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-blue-50 flex items-center justify-center">
                  <span className="text-lg text-blue-600">Image - L'équilibre productif</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                La productivité optimisée, c'est avant tout une question d'équilibre : entre concentration et récupération, entre intensité et régularité. Nos techniques éprouvées s'appuient sur des principes simples mais puissants : hiérarchisation claire des tâches, limitation des distractions, structuration de la journée et gestion consciente de l'énergie.
              </p>
            </section>

            <section className="bg-blue-100 p-6 rounded-lg">
              <h2 className="text-3xl font-semibold text-blue-800 mb-4">Notre approche</h2>
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-white flex items-center justify-center">
                  <span className="text-lg text-blue-600">Image - Notre approche</span>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">Pics de performance</h3>
                  <p className="text-gray-600">
                    Identifier et exploiter vos moments de plus grande efficacité.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">Automatisation</h3>
                  <p className="text-gray-600">
                    Déléguer et automatiser les tâches répétitives.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">Gestion de l'énergie</h3>
                  <p className="text-gray-600">
                    Optimiser votre rythme de travail selon vos capacités.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-blue-800 mb-4">Une approche mesurée</h2>
              <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-blue-50 flex items-center justify-center">
                  <span className="text-lg text-blue-600">Image - Une approche mesurée</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Mais optimiser, ce n'est pas juste faire vite — c'est faire ce qui compte, au bon moment, avec un effort mesuré. Grâce à notre méthode ViteButNotTooMuch, vous apprenez à garder votre énergie pour ce qui a réellement de la valeur. Fini les journées à rallonge sans résultats. Place à un flux de travail fluide, efficace et respectueux de vos capacités.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-blue-800 mb-4">Pour tous les profils</h2>
              <p className="text-gray-700 leading-relaxed">
                Que vous soyez manager, créatif, développeur ou étudiant, notre approche s'adapte à votre réalité. Parce qu'il n'existe pas de formule magique universelle, nous proposons des outils flexibles et des conseils personnalisés.
              </p>
            </section>

            <section className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-3xl font-semibold text-blue-800 mb-4">Notre engagement</h2>
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-white flex items-center justify-center">
                  <span className="text-lg text-blue-600">Image - Notre engagement</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                ViteButNotTooMuch, c'est une invitation à produire mieux, pas forcément plus. Découvrez comment regagner du temps, de l'énergie et de la satisfaction dans votre travail. La performance durable commence ici.
              </p>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
} 