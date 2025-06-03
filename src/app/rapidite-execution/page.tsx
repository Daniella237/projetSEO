import Link from 'next/link';
import Image from 'next/image';

export default function RapiditeExecution() {
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
            Rapidité d'exécution : la méthode ViteButNotTooMuch pour aller vite… sans précipitation
          </h1>
          <div className="flex justify-center items-center gap-4 text-gray-600">
            <span>22 Mars 2024</span>
            <span>•</span>
            <span>6 min de lecture</span>
          </div>
        </header>

        <div className="max-w-3xl mx-auto prose prose-lg">
          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
              <span className="text-xl text-blue-600">Image principale - Rapidité d'exécution</span>
            </div>
            <Image
              src="/images/rapidite-execution.webp"
              alt="Rapidité d'exécution"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="object-cover object-center"
              quality={90}
            />
          </div>

          <p className="lead text-xl text-gray-700 mb-8">
            Dans le monde professionnel actuel, chaque minute compte. Mais courir après la vitesse ne suffit plus : il faut savoir bien exécuter, rapidement et efficacement. C'est là que l'approche ViteButNotTooMuch prend tout son sens. Notre mission : vous aider à améliorer votre rapidité d'exécution sans compromettre la qualité de vos résultats.
          </p>

          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Hiérarchisation ViteButNotTooMuch</h2>
              <p className="text-gray-700">
                Classez vos tâches selon leur valeur ajoutée : essentielles, importantes, optionnelles. Cela évite la dispersion et concentre vos efforts là où le résultat est le plus impactant.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Time blocking stratégique</h2>
              <p className="text-gray-700">
                Planifiez vos journées en blocs de temps dédiés à une seule tâche. Cette méthode, chère à l'esprit ViteButNotTooMuch, permet de réduire les interruptions et d'augmenter votre vitesse sans perte de concentration.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Méthode "5-10-15"</h2>
              <p className="text-gray-700">
                Assignez des durées fixes et courtes à vos micro-tâches : 5, 10 ou 15 minutes. C'est un excellent moyen de créer un rythme fluide sans tomber dans le stress de la montre.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Routine d'allumage</h2>
              <p className="text-gray-700">
                Avant chaque session de travail, déclenchez un petit rituel : café, respiration, ou mise en ordre rapide. Cela conditionne votre cerveau à passer en mode exécution rapide, façon ViteButNotTooMuch.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Premier jet sans pression</h2>
              <p className="text-gray-700">
                Ne cherchez pas la perfection au premier coup. Produisez un premier jet, puis améliorez. Cela évite les blocages et fait avancer le projet rapidement et efficacement.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Sprints minutés</h2>
              <p className="text-gray-700">
                Travaillez par sessions courtes et intenses (20-30 minutes) avec pauses intégrées. Cette méthode, inspirée du Pomodoro, est idéale pour garder le rythme sans s'épuiser.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Automatisation légère</h2>
              <p className="text-gray-700">
                Utilisez des modèles, raccourcis ou outils simples pour réduire les tâches répétitives. Moins d'effort manuel, plus de fluidité — à la manière ViteButNotTooMuch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
} 