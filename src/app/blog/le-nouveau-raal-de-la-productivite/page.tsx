import Link from 'next/link';

export default function BlogPage() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12">
        <Link 
          href="/blog"
          className="inline-block mb-8 text-purple-600 hover:text-purple-800 transition-colors"
        >
          ← Retour au blog
        </Link>
        
        <header className="mb-12 text-center">
          <img
            src="https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Bannière illustrant le concept ViteButNotTooMuch"
            className="w-full h-64 object-cover rounded-2xl mb-8 shadow-xl"
          />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">ViteButNotTooMuch</span> : Le
            Nouveau Graal de la Productivité (et Pourquoi Votre To-Do List Vous
            Déteste)
          </h1>
          <div className="flex items-center justify-center gap-4 text-gray-600 mb-4">
            <span>Par Sophie Martineau</span>
            <span>•</span>
            <span>15 Novembre 2024</span>
            <span>•</span>
            <span>12 min de lecture</span>
          </div>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <p className="text-xl text-purple-700 font-semibold italic border-l-4 border-purple-500 pl-4">
              Salut les G.P.A (Guerriers de la Productivité Acharnée) !
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <p className="text-gray-700 leading-relaxed text-lg">
                Aujourd'hui, on va parler d'un truc qui me titille depuis des
                semaines, un concept qui a révolutionné ma façon de voir les choses,
                de *faire* les choses. Oubliez les hacks de productivité sortis
                d'une usine à gourous en col roulé, oubliez la pression constante de
                "faire plus, plus vite, toujours plus". Préparez-vous à accueillir
                dans votre panthéon personnel le mantra qui va tout changer :{" "}
                <strong className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">ViteButNotTooMuch</strong>.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mt-6">
                Ouais, je sais, ça sonne un peu comme un slogan de fast-food un peu
                trop honnête. Mais croyez-moi, derrière cette formule un brin
                décalée se cache une philosophie redoutable d'efficacité et,
                oserais-je le dire, de *bien-être*. Car c'est bien de ça qu'il
                s'agit au final, non ? Être productif, ce n'est pas s'épuiser à la
                tâche jusqu'au burn-out. C'est atteindre ses objectifs avec
                intelligence, avec fluidité, et surtout, avec le sourire (ou au
                moins sans grimacer de douleur).
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mt-6">
                Alors, c'est quoi ce fameux{" "}
                <strong className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">ViteButNotTooMuch</strong> ?
              </p>
            </section>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <img
                src="https://images.pexels.com/photos/2793479/pexels-photo-2793479.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Guépard illustrant le 'Vite' et le 'NotTooMuch'"
                className="w-full h-64 object-cover rounded-xl shadow-md mb-6"
              />

              <p className="text-gray-700 leading-relaxed text-lg">
                Imaginez un guépard. Cet animal est l'incarnation de la vitesse. Il
                peut atteindre des pointes incroyables pour chasser sa proie. C'est
                le "Vite". Mais est-ce qu'il sprinte H24 ? Non, bien sûr que non. Il
                se repose, il observe, il choisit ses moments. Il ne gaspille pas
                son énergie inutilement. C'est le "NotTooMuch". Et c'est exactement
                là où je veux en venir.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mt-6">
                Pendant des années, j'ai été ce que j'appelle un
                "productivo-maniaque". Ma journée était une succession de cases à
                cocher, une course effrénée contre la montre. Je testais toutes les
                applis, toutes les méthodes : Pomodoro, GTD (Getting Things Done,
                pour les intimes), la Matrice d'Eisenhower... J'avais des to-do
                lists à rallonge, des tableaux Trello qui ressemblaient à des sapins
                de Noël surchargés. Le résultat ? J'étais souvent stressé, fatigué,
                et paradoxalement, pas toujours aussi efficace que je l'aurais
                souhaité. Je faisais beaucoup de choses, c'est vrai, mais est-ce que
                je faisais les *bonnes* choses ? Et surtout, à quel prix ?
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mt-6">
                Le problème avec la quête aveugle du "toujours plus vite", c'est
                qu'on finit par sacrifier la qualité, la réflexion, et pire encore,
                notre santé mentale. On devient des robots à tâches, obsédés par le
                *quantitatif* au détriment du *qualitatif*. On se noie dans
                l'urgence, on perd de vue l'essentiel. Et c'est là que le bât
                blesse, mes amis. Car la vraie productivité, ce n'est pas de brasser
                de l'air à la vitesse de la lumière. C'est d'obtenir des résultats
                significatifs, durables, avec un effort optimisé. C'est le{" "}
                <strong className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">ViteButNotTooMuch</strong>.
              </p>
            </div>

            <section className="bg-purple-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-purple-800 mb-6 border-b-2 border-purple-300 pb-3">
                L'Art Subtil du "NotTooMuch"
              </h2>

              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Le "NotTooMuch" est probablement la partie la plus délicate à
                appréhender pour nous, les accros à l'action. Ça demande de
                ralentir, de réfléchir avant d'agir. Scandaleux, n'est-ce pas, dans
                notre monde qui glorifie l'hyperactivité ? Pourtant, c'est
                essentiel.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-purple-700 mb-3">
                    1. Définir le "Assez" :
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Avant de vous lancer tête baissée dans une tâche, demandez-vous :
                    "C'est quoi, le résultat *suffisant* ?" On a tendance à vouloir la
                    perfection, le truc impecable du premier coup. Mais souvent, un
                    "assez bien" fait rapidement vaut mieux qu'un "parfait" qui n'arrive
                    jamais. Le{" "}
                    <strong className="text-purple-600">ViteButNotTooMuch</strong>,
                    c'est savoir où placer le curseur de l'exigence pour ne pas
                    s'épuiser sur des détails qui n'apportent qu'une valeur marginale.
                    Parfois, une simple ébauche suffit pour débloquer la suite.
                    Pensez-y.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-purple-700 mb-3">
                    2. La Puissance des Pauses (les vraies !) :
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Combien de fois avez-vous "enchaîné" les tâches en pensant gagner du
                    temps, pour finalement vous retrouver avec le cerveau en compote et
                    une efficacité proche du néant ? Le "NotTooMuch" nous rappelle
                    l'importance cruciale des pauses. Et je ne parle pas de scroller
                    frénétiquement sur les réseaux sociaux pendant 5 minutes. Je parle
                    de vraies coupures : se lever, s'étirer, regarder au loin, boire un
                    verre d'eau, discuter avec un collègue.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-purple-700 mb-3">
                    3. Le Minimalisme Opérationnel :
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    On accumule les outils, les applis, les méthodes... en pensant que
                    ça va nous rendre plus productifs. En réalité, on se crée souvent
                    une charge mentale supplémentaire. Le{" "}
                    <strong className="text-purple-600">ViteButNotTooMuch</strong>{" "}
                    prône un retour à la simplicité. Choisissez quelques outils qui
                    *vous* conviennent vraiment, maîtrisez-les à fond, et tenez-vous-en
                    là.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-purple-700 mb-3">
                    4. Dire Non (et Survivre !) :
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ah, le fameux "non". Ce petit mot si difficile à prononcer, mais si
                    libérateur. Dans notre élan pour être productifs et serviables, on a
                    tendance à tout accepter. Le{" "}
                    <strong className="text-purple-600">ViteButNotTooMuch</strong>,
                    c'est aussi protéger son temps et son énergie. Apprendre à dire non
                    (poliment, mais fermement) aux sollicitations qui ne sont pas
                    alignées avec vos priorités.
                  </p>
                </div>
              </div>
            </section>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <img
                src="https://images.pexels.com/photos/5951373/pexels-photo-5951373.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Illustration d'une personne prenant une pause relaxante"
                className="w-full h-64 object-cover rounded-xl shadow-md mb-6"
              />
            </div>

            <section className="bg-pink-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-purple-800 mb-6 border-b-2 border-pink-300 pb-3">
                Et le "Vite" dans tout ça ? On ne l'oublie pas !
              </h2>

              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Attention, le{" "}
                <strong className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">ViteButNotTooMuch</strong> ne
                signifie pas qu'on se transforme en paresseux contemplatifs. Le
                "Vite" reste une composante essentielle. Mais c'est un "Vite"
                intelligent, ciblé, optimisé.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-pink-700 mb-3">
                    1. Le Pouvoir du Focus Intense (mais limité) :
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Quand vous travaillez sur une tâche, donnez-lui toute votre
                    attention. Éliminez les distractions : notifications, téléphone en
                    mode avion, environnement de travail propice à la concentration. La
                    technique Pomodoro s'inscrit parfaitement dans cette logique.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-pink-700 mb-3">
                    2. La Priorisation Impitoyable :
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Toutes les tâches ne se valent pas. Certaines ont un impact énorme,
                    d'autres sont juste du "bruit". Demandez-vous : "Quelle est LA
                    tâche qui, si je l'accomplis aujourd'hui, aura le plus grand impact
                    sur mes objectifs à long terme ?"
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-pink-700 mb-3">
                    3. L'Optimisation des Processus :
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Y a-t-il des tâches répétitives que vous pourriez automatiser ou
                    simplifier ? Des raccourcis clavier que vous pourriez apprendre ?
                    Chercher constamment des moyens d'améliorer vos façons de faire,
                    c'est gagner du temps et de l'énergie sur le long terme.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-pink-700 mb-3">
                    4. L'Énergie, Votre Carburant le Plus Précieux :
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Être rapide demande de l'énergie. Et cette énergie n'est pas
                    inépuisable. Ça passe par un sommeil suffisant, une alimentation
                    équilibrée, et une activité physique régulière. Un corps et un
                    esprit en forme sont les meilleurs alliés de votre productivité.
                  </p>
                </div>
              </div>
            </section>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <img
                src="https://images.pexels.com/photos/2923156/pexels-photo-2923156.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Illustration symbolisant l'énergie, le sommeil et une alimentation saine"
                className="w-full h-64 object-cover rounded-xl shadow-md mb-6"
              />
            </div>

            <section className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-purple-800 mb-6 border-b-2 border-purple-300 pb-3">
                Mon Parcours Perso vers le "
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">ViteButNotTooMuch</span>"
              </h2>

              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Je ne vais pas vous mentir, adopter cette philosophie n'a pas été un
                  long fleuve tranquille. J'ai dû déconstruire des années d'habitudes
                  ancrées, de croyances limitantes sur ce que "être productif"
                  signifiait. Il y a eu des moments de doute, des rechutes dans mes
                  anciens travers de "faire toujours plus".
                </p>

                <p className="text-gray-700 leading-relaxed text-lg">
                  La première étape a été de prendre conscience de mon propre
                  fonctionnement. J'ai commencé à traquer mon temps, non pas pour me
                  flageller, mais pour comprendre où il partait réellement. J'ai aussi
                  noté mes niveaux d'énergie au cours de la journée. Quand suis-je le
                  plus alerte ? Le plus créatif ? Quand est-ce que mon cerveau
                  commence à déclarer forfait ?
                </p>

                <p className="text-gray-700 leading-relaxed text-lg">
                  Et vous savez quoi ? Ma productivité n'a pas baissé. Au contraire.
                  Je fais peut-être *un peu moins* de choses qu'avant, mais je fais
                  les *bonnes* choses, avec plus de concentration, moins de stress, et
                  des résultats souvent meilleurs. Je suis passé d'une course de
                  vitesse épuisante à un marathon couru à une allure soutenue mais
                  confortable. Le{" "}
                  <strong className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">ViteButNotTooMuch</strong> est
                  devenu ma boussole.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-purple-800 mb-6 border-b-2 border-purple-300 pb-3">
                Alors, Prêt à Adopter le "
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">ViteButNotTooMuch</span>" ?
              </h2>

              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Je suis convaincu que cette approche peut parler à beaucoup d'entre
                  vous. À ceux qui se sentent constamment sous pression, à ceux qui
                  jonglent avec mille projets sans jamais avoir le sentiment d'avancer
                  vraiment, à ceux qui ont compris que la productivité ne devait pas
                  être synonyme de sacrifice.
                </p>

                <p className="text-gray-700 leading-relaxed text-lg">
                  Commencez petit. Choisissez un aspect du{" "}
                  <strong className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">ViteButNotTooMuch</strong> qui
                  vous parle le plus et expérimentez. Peut-être commencer par intégrer
                  de vraies pauses dans votre journée. Ou alors, essayez de réduire
                  votre to-do list à trois éléments essentiels pour demain. Observez
                  ce qui se passe. Comment vous sentez-vous ? Quels sont les résultats
                  ?
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-500">
                  <p className="text-gray-700 leading-relaxed text-lg italic">
                    Alors, la prochaine fois que vous vous sentirez débordé par
                    l'urgence, la prochaine fois que votre to-do list vous regardera
                    avec des yeux accusateurs, souvenez-vous :{" "}
                    <strong className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">ViteButNotTooMuch</strong>.
                    Respirez un grand coup, recentrez-vous sur l'essentiel, et avancez
                    avec intention et sérénité. Votre productivité (et votre
                    bien-être) vous remercieront.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg">
                  Et vous, c'est quoi votre astuce ultime pour être productif sans y
                  laisser votre peau ? Partagez vos pépites en commentaire, j'ai hâte
                  de vous lire ! On est là pour s'entraider, après tout, dans cette
                  grande aventure de la productivité épanouie. Allez, à vos claviers,
                  et que le{" "}
                  <strong className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">ViteButNotTooMuch</strong>{" "}
                  soit avec vous !
                </p>
              </div>
            </section>
          </div>
        </div>

      </div>
    </article>
  );
}
