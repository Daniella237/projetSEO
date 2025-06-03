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
            Productivité optimisée : le bon rythme avec ViteButNotTooMuch
          </h1>
          <div className="flex justify-center items-center gap-4 text-gray-600">
            <span>22 Mars 2024</span>
            <span>•</span>
            <span>6 min de lecture</span>
          </div>
        </header>

        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="lead text-xl text-gray-700 mb-8">
            Dans un monde où tout semble aller plus vite, la productivité est souvent réduite à une course contre la montre. Pourtant, produire davantage ne devrait jamais signifier s'épuiser. C'est là qu'intervient l'approche ViteButNotTooMuch : une méthode pensée pour ceux qui souhaitent en faire plus… sans en faire trop.
          </p>

          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Une approche centrée sur l'essentiel</h2>
              <p className="text-gray-700">
                Optimiser sa productivité, ce n'est pas remplir ses journées de tâches, mais en libérer l'espace pour ce qui compte vraiment. La première étape consiste à prendre du recul sur son propre rythme. Beaucoup croient que travailler plus longtemps est synonyme d'efficacité, alors qu'en réalité, c'est souvent la qualité de l'énergie mobilisée qui détermine la performance. L'approche ViteButNotTooMuch encourage donc une meilleure gestion de l'attention, de l'énergie et du temps, plutôt qu'un simple empilement d'heures ou de tâches.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Des outils simples et efficaces</h2>
              <p className="text-gray-700">
                À travers des outils simples — comme l'identification des priorités selon leur impact réel, la structuration de la journée en séquences de travail dynamiques, ou encore la création d'espaces de récupération active — la méthode permet de conserver une haute performance sans usure mentale. Contrairement aux approches classiques, elle prend en compte le facteur humain : vos capacités varient au fil de la journée, et votre énergie doit être ménagée pour durer.
              </p>
            </div>

            <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
                <span className="text-xl text-blue-600">Image principale - Productivité optimisée</span>
              </div>
              <Image
                src="/images/productivite-optimisee.webp"
                alt="Productivité optimisée"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="object-cover object-center"
                quality={90}
              />
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Alléger pour mieux avancer</h2>
              <p className="text-gray-700">
                Il s'agit aussi d'alléger ce qui peut l'être. Certaines tâches peuvent être automatisées, d'autres simplifiées ou déléguées. En adoptant une logique de progression continue plutôt que de perfection immédiate, vous entrez dans un flux plus fluide, plus naturel. Et surtout, vous retrouvez du plaisir à avancer.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Du mode survie au mode stratégique</h2>
              <p className="text-gray-700">
                L'essence de ViteButNotTooMuch, c'est de vous faire passer d'un mode de survie multitâche à un mode de travail ciblé, apaisé et résolument stratégique. Plus vous vous alignez sur ce fonctionnement, plus votre productivité devient durable — et moins vous avez besoin de vous "forcer" pour avancer.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Une nouvelle vision de la productivité</h2>
              <p className="text-gray-700">
                En résumé, la productivité optimisée ne vient pas d'un effort extrême mais d'un effort intelligent. Avec ViteButNotTooMuch, vous ne cherchez plus à remplir chaque minute, mais à donner du sens à chaque action. Ce n'est pas une simple méthode de productivité : c'est un changement de posture, une manière nouvelle d'aborder le travail et le temps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
} 