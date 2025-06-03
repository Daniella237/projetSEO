import Link from 'next/link';

export default function QuiSommesNous() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <Link 
          href="/blog"
          className="inline-block mb-8 text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Retour au blog
        </Link>
        
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Qui sommes-nous ?
          </h1>
          <div className="flex justify-center items-center gap-4 text-gray-600">
            <span>20 Mars 2024</span>
            <span>•</span>
            <span>5 min de lecture</span>
          </div>
        </header>

        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="lead text-xl text-gray-700 mb-8">
            Chez ViteButNotTooMuch, nous croyons que l'efficacité et la qualité ne sont pas incompatibles. 
            Notre mission est de vous aider à trouver le parfait équilibre entre rapidité et excellence.
          </p>

          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Notre Histoire</h2>
          <p>
            Fondé en 2024, ViteButNotTooMuch est né d'une simple observation : trop souvent, 
            la course à la productivité se fait au détriment de la qualité. Nous avons décidé 
            de changer cela en créant une communauté dédiée à l'excellence efficace.
          </p>

          <h2 className="text-3xl font-semibold text-blue-800 mb-4 mt-8">Notre Vision</h2>
          <p>
            Nous aspirons à un monde où chaque projet, chaque tâche, chaque objectif est atteint 
            avec un équilibre parfait entre rapidité et qualité. Notre plateforme est conçue pour 
            vous guider dans cette quête d'excellence.
          </p>

          <div className="bg-blue-100 p-6 rounded-lg my-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Nos Valeurs</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                Excellence dans l'exécution
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                Efficacité intelligente
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                Innovation continue
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                Apprentissage perpétuel
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
} 