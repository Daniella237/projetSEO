import Link from 'next/link';

export default function NotrePhilosophie() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12">
        <Link 
          href="/blog"
          className="inline-block mb-8 text-purple-600 hover:text-purple-800 transition-colors"
        >
          ← Retour au blog
        </Link>
        
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-6 text-purple-900">
            Notre philosophie
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>21 Mars 2024</span>
            <span>•</span>
            <span>4 min de lecture</span>
          </div>
        </header>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <p className="text-xl text-gray-700 italic border-l-4 border-purple-500 pl-4">
              "La vitesse n'est rien sans la direction, et la direction n'est rien sans la qualité."
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-semibold text-purple-800 mb-4">L'équilibre parfait</h2>
              <p className="text-gray-700 leading-relaxed">
                Notre philosophie repose sur un principe simple mais puissant : trouver l'équilibre 
                parfait entre rapidité et qualité. Nous croyons que ces deux aspects ne sont pas 
                mutuellement exclusifs, mais plutôt complémentaires.
              </p>
            </section>

            <section className="bg-purple-100 p-6 rounded-lg">
              <h2 className="text-3xl font-semibold text-purple-800 mb-4">Notre approche</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">Rapidité intelligente</h3>
                  <p className="text-gray-600">
                    Optimiser les processus sans compromettre la qualité du résultat final.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">Qualité efficiente</h3>
                  <p className="text-gray-600">
                    Maintenir des standards élevés tout en respectant les délais.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-purple-800 mb-4">Notre engagement</h2>
              <p className="text-gray-700 leading-relaxed">
                Nous nous engageons à vous fournir les outils, les conseils et le soutien nécessaires 
                pour atteindre cet équilibre dans vos projets. Notre objectif est de vous aider à 
                réaliser vos ambitions avec excellence et efficacité.
              </p>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
} 