import Link from 'next/link';
import Image from 'next/image';

export default function MethodesInnovantes() {
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
            Méthodes innovantes : travailler autrement avec ViteButNotTooMuch
          </h1>
          <div className="flex justify-center items-center gap-4 text-gray-600">
            <span>22 Mars 2024</span>
            <span>•</span>
            <span>6 min de lecture</span>
          </div>
        </header>

        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="lead text-xl text-gray-700 mb-8">
            Changer sa façon de travailler n'est pas une question d'outils, mais de perspective. Les méthodes dites "innovantes" ne se limitent pas à des applications ou des logiciels : elles commencent par une nouvelle façon de penser le temps, la tâche, et l'énergie. C'est là que ViteButNotTooMuch intervient, en vous proposant une approche résolument moderne, ancrée dans la réalité, mais tournée vers l'agilité.
          </p>

          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
              <span className="text-xl text-blue-600">Image principale - Méthodes innovantes</span>
            </div>
            <Image
              src="/images/methodes-innovantes.webp"
              alt="Méthodes innovantes"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="object-cover object-center"
              quality={90}
            />
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Une innovation adaptée au rythme actuel</h2>
              <p className="text-gray-700">
                Dans un contexte où tout va plus vite, l'innovation doit permettre de suivre le rythme… sans se perdre. ViteButNotTooMuch n'est pas une méthode rigide ou théorique, mais un ensemble de pratiques adaptables qui vous aident à travailler avec fluidité, sans friction inutile. L'objectif n'est pas d'accélérer pour accélérer, mais de simplifier les processus et d'enchaîner les tâches avec plus de cohérence.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">La fragmentation intelligente</h2>
              <p className="text-gray-700">
                Cela passe, par exemple, par la fragmentation intelligente des projets : avancer petit à petit, avec des cycles courts, permet d'éviter la surcharge et les blocages mentaux. Cela permet aussi de garder une dynamique, en se concentrant sur l'essentiel à chaque étape. Travailler par séquences agiles devient alors une manière de rester créatif tout en étant efficace.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">La simplification des routines</h2>
              <p className="text-gray-700">
                Autre aspect central de la méthode : la simplification des routines. Beaucoup de tâches du quotidien peuvent être rendues plus légères grâce à des modèles, des workflows fluides, ou des ajustements ergonomiques simples. L'innovation selon ViteButNotTooMuch ne vise pas la révolution, mais l'amélioration constante.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Une culture de l'expérimentation</h2>
              <p className="text-gray-700">
                Enfin, cette approche encourage une culture de l'expérimentation : tester rapidement une idée, valider son efficacité, puis l'adapter. Plutôt que de chercher la solution parfaite d'emblée, on avance, on ajuste, on affine. C'est dans cette souplesse que se trouve la vraie innovation : celle qui s'adapte à vous.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Une nouvelle manière de travailler</h2>
              <p className="text-gray-700">
                Avec ViteButNotTooMuch, vous adoptez une nouvelle manière de travailler : plus légère, plus rapide, mais aussi plus réfléchie. Ce n'est pas une méthode imposée, mais une invitation à repenser vos propres outils, vos rythmes, et vos façons de faire. Innover, ici, signifie avancer mieux, en phase avec votre réalité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
} 