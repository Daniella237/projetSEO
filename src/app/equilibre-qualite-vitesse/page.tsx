import Link from 'next/link';
import Image from 'next/image';

export default function EquilibreQualiteVitesse() {
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
            Équilibre qualité-vitesse : le cœur de la méthode ViteButNotTooMuch
          </h1>
          <div className="flex justify-center items-center gap-4 text-gray-600">
            <span>22 Mars 2024</span>
            <span>•</span>
            <span>6 min de lecture</span>
          </div>
        </header>

        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="lead text-xl text-gray-700 mb-8">
            Entre rapidité et exigence, faut-il choisir ? Trop souvent, on pense qu'aller vite signifie nécessairement sacrifier la précision. À l'inverse, ceux qui cherchent à atteindre un haut niveau de qualité tombent parfois dans l'obsession du détail et de la lenteur. L'approche ViteButNotTooMuch propose une autre voie : celle d'un équilibre réaliste, ajusté, durable.
          </p>

          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Un équilibre qui se construit</h2>
              <p className="text-gray-700">
                Dans notre quotidien saturé d'urgence, l'équilibre entre qualité et vitesse ne s'improvise pas. Il se construit grâce à une meilleure compréhension des priorités, du contexte et des attentes réelles. Le premier réflexe que nous encourageons, c'est de prendre le temps de calibrer l'effort : toutes les tâches ne méritent pas le même degré de soin. Une réponse à un email interne n'a pas besoin du même niveau de finition qu'une présentation pour un client stratégique. Ce discernement est central dans la philosophie ViteButNotTooMuch.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Le discernement au cœur de la méthode</h2>
              <p className="text-gray-700">
                Aller vite ne signifie pas ignorer les détails, mais savoir lesquels sont cruciaux. De même, viser la qualité ne suppose pas de ralentir chaque étape. En structurant intelligemment votre travail — par exemple en livrant rapidement une première version, puis en l'améliorant à chaque retour — vous gagnez à la fois du temps et de la rigueur.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">La confiance dans le processus</h2>
              <p className="text-gray-700">
                Cet équilibre repose aussi sur la confiance dans le processus. Si vous savez que votre méthode vous permet de détecter et corriger les erreurs à temps, vous pouvez avancer plus rapidement sans crainte. L'approche ViteButNotTooMuch cultive ainsi un climat où l'on accepte de livrer plus vite, parce qu'on a mis en place un système agile, précis et réactif.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Le bon tempo</h2>
              <p className="text-gray-700">
                La pression pour livrer dans l'urgence ne doit pas vous déconnecter de l'essentiel. Avec cette méthode, vous développez une intuition du "bon tempo" : ni précipité, ni ralenti, mais aligné avec l'objectif. En d'autres termes, vous devenez capable de naviguer avec agilité entre des exigences parfois opposées.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Une méthode qui fait ses preuves</h2>
              <p className="text-gray-700">
                ViteButNotTooMuch, c'est cette capacité à avancer vite avec précision, à livrer rapidement sans compromis, et à préserver la qualité sans sacrifier la dynamique. Une méthode qui ne cherche pas la performance pour elle-même, mais pour son impact réel.
              </p>
            </div>

            <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
                <span className="text-xl text-blue-600">Image principale - Équilibre qualité-vitesse</span>
              </div>
              <Image
                src="/images/equilibre-qualite-vitesse.webp"
                alt="Équilibre qualité-vitesse"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="object-cover object-center"
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
} 