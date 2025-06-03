import Link from 'next/link';

export default function NotrePhilosophie() {
  return (
    <article className="min-h-screen bg-gradient-to-br pt-20 from-purple-50 to-pink-50 py-12">
      <div className="container mx-auto px-4">
        <Link
          href="/blog"
          className="inline-block mb-8 text-purple-600 hover:text-purple-800 transition-colors font-medium"
        >
          ← Retour au blog
        </Link>

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-purple-900">
            Notre Philosophie : L'Art d'Allier Vite et Bien
          </h1>
          <div className="flex items-center justify-center gap-4 text-gray-600">
            <span>02 Juin 2025</span>
            <span>•</span>
            <span>~6 min de lecture</span> {/* Adjusted reading time */}
          </div>
        </header>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 mb-12 transform hover:scale-105 transition-transform duration-300">
            <p className="text-xl md:text-2xl text-gray-700 italic border-l-4 border-purple-500 pl-6">
              "La vitesse n'est rien sans la direction, et la direction n'est rien sans la qualité. L'excellence se trouve à la croisée des chemins."
            </p>
          </div>

          {/* Suggested Image: Illustration of balance or a crossroads */}
          <img src="https://images.pexels.com/photos/32394846/pexels-photo-32394846/free-photo-of-couteau-equilibrant-un-oeuf-sur-fond-sombre.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Illustration de l'équilibre entre vitesse et qualité" className="rounded-lg shadow-lg mb-12 mx-auto" />

          <div className="space-y-10">
            <section>
              <h2 className="text-3xl md:text-4xl font-semibold text-purple-800 mb-6">L'Équilibre Parfait : Plus Qu'un Idéal, une Nécessité</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Notre philosophie repose sur un principe simple mais puissant : trouver l'équilibre
                  parfait entre rapidité et qualité. Dans un monde où tout s'accélère, nous croyons que ces deux aspects ne sont pas
                  mutuellement exclusifs, mais plutôt des alliés indispensables à la réussite durable.
                </p>
                <p>
                  Négliger la qualité au profit de la vitesse mène à des résultats éphémères et souvent décevants. À l'inverse, une quête de perfection absolue sans considération pour les délais peut paralyser l'action et rendre obsolète le travail accompli. C'est dans cet intervalle, cet espace de <strong className="text-purple-700">synergie intelligente</strong>, que nous opérons.
                </p>
                <p>
                  Cet équilibre est crucial non seulement pour atteindre des objectifs ambitieux, mais aussi pour préserver le bien-être, éviter l'épuisement et cultiver un sentiment d'accomplissement authentique. C'est la fondation d'une productivité saine et pérenne.
                </p>
              </div>
            </section>

            <section className="bg-purple-100 p-6 sm:p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl md:text-4xl font-semibold text-purple-800 mb-6 text-center">Notre Approche Holistique</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  {/* Suggested Image: Icon for speed/efficiency */}
                  <img src="https://via.placeholder.com/80x80?text=🚀" alt="Icône rapidité" className="mx-auto mb-3"/>
                  <h3 className="text-2xl font-semibold text-purple-700 mb-3 text-center">Rapidité Intelligente</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nous optimisons les processus sans jamais compromettre la qualité du résultat final. Cela implique :
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Une priorisation rigoureuse des tâches.</li>
                    <li>L'élimination du superflu et des goulots d'étranglement.</li>
                    <li>L'utilisation d'outils et de méthodes éprouvés.</li>
                    <li>Une communication claire et directe pour éviter les malentendus.</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  {/* Suggested Image: Icon for quality/precision */}
                  <img src="https://via.placeholder.com/80x80?text=🎯" alt="Icône qualité" className="mx-auto mb-3"/>
                  <h3 className="text-2xl font-semibold text-purple-700 mb-3 text-center">Qualité Efficiente</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nous maintenons des standards élevés tout en respectant les délais impartis. Notre secret :
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Des définitions claires de la qualité attendue.</li>
                    <li>Des cycles de feedback courts et constructifs.</li>
                    <li>L'amélioration continue de nos savoir-faire.</li>
                    <li>Une attention méticuleuse aux détails qui font la différence.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                 {/* Suggested Image: Icon for sustainability/well-being */}
                <img src="https://via.placeholder.com/80x80?text=🌱" alt="Icône durabilité" className="mx-auto mb-3"/>
                <h3 className="text-2xl font-semibold text-purple-700 mb-3 text-center">Performance Durable</h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  Au-delà de la rapidité et de la qualité, nous visons la durabilité. Cela signifie travailler de manière à préserver l'énergie, la motivation et la créativité sur le long terme, pour nous comme pour nos clients. Un sprint constant mène à l'épuisement ; nous préférons un rythme soutenu et intelligent, ponctué de moments de récupération et de réflexion stratégique. C'est le fameux <strong className="text-purple-700">"Vite, mais pas trop (stressé)"</strong>.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-semibold text-purple-800 mb-6">Les Piliers de Notre Philosophie</h2>
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-pink-500">
                  <h3 className="text-2xl font-semibold text-pink-700 mb-2">1. Clarté et Intention</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Chaque action est guidée par un objectif clair. Nous prenons le temps de comprendre le "pourquoi" avant de nous lancer dans le "comment". Cette intentionnalité assure que notre vitesse est toujours dirigée vers la bonne destination.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-purple-500">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-2">2. Agilité et Adaptation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Le monde évolue, les projets aussi. Notre approche est flexible, nous permettant de nous adapter aux changements sans perdre de vue nos standards de qualité ni nos engagements en termes de délais. L'agilité est pour nous synonyme de réactivité intelligente.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-indigo-500">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-2">3. Partenariat et Transparence</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nous croyons en la force de la collaboration. Que ce soit avec nos clients ou au sein de notre équipe, nous favorisons une communication ouverte, honnête et régulière. La transparence est clé pour bâtir la confiance et aligner les efforts.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Suggested Image: People collaborating or a workshop */}
            <img src="https://via.placeholder.com/800x350?text=Collaboration+et+Soutien" alt="Illustration de collaboration et d'engagement" className="rounded-lg shadow-lg mb-12 mx-auto" />

            <section>
              <h2 className="text-3xl md:text-4xl font-semibold text-purple-800 mb-6">Notre Engagement : Votre Réussite Accélérée et Soignée</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Nous nous engageons à vous fournir bien plus que des services : une véritable <strong className="text-purple-700">expérience de partenariat</strong>. Cela se traduit par :
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong className="font-semibold">Des outils et méthodologies</strong> affûtés, adaptés à vos besoins spécifiques pour optimiser chaque phase de votre projet.</li>
                    <li><strong className="font-semibold">Des conseils stratégiques</strong> issus de notre expérience, pour vous aider à naviguer les complexités et à prendre les meilleures décisions.</li>
                    <li><strong className="font-semibold">Un soutien proactif et réactif</strong>, car nous savons que votre temps est précieux et que les défis ne préviennent pas.</li>
                </ul>
                <p>
                  Notre objectif ultime est de vous aider à réaliser vos ambitions avec une excellence qui ne sacrifie ni l'efficacité ni votre sérénité. Nous sommes là pour transformer vos visions en réalités tangibles, rapidement et avec le plus grand soin.
                </p>
              </div>
            </section>

            <section className="text-center mt-16 mb-8">
                <h2 className="text-3xl md:text-4xl font-semibold text-purple-800 mb-6">Prêt à Adopter une Nouvelle Cadence ?</h2>
                <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8">
                    Si notre philosophie résonne avec vos aspirations, si vous cherchez à concilier performance et qualité sans y laisser votre énergie, alors nous sommes faits pour collaborer.
                </p>
                <Link
                    href="/contact" // Assuming you have a contact page
                    className="inline-block bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-purple-700 transition-colors text-lg"
                >
                    Discutons de votre projet
                </Link>
            </section>

          </div>
        </div>
      </div>
    </article>
  );
} 