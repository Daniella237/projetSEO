export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            À propos de <span className="text-blue-600">ViteButNotTooMuch</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Notre mission est de vous aider à trouver l'équilibre parfait entre rapidité et qualité.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Notre histoire</h3>
            <p className="text-lg text-gray-700">
              ViteButNotTooMuch est né d'un constat simple : dans un monde où tout va toujours plus vite, 
              la qualité est souvent sacrifiée au profit de la rapidité. Nous avons créé cette plateforme pour 
              prouver qu'il est possible d'allier les deux.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900">Notre philosophie</h3>
            <p className="text-lg text-gray-700">
              Nous croyons fermement qu'il n'est pas nécessaire de choisir entre aller vite et faire bien. 
              Avec les bonnes méthodes et le bon état d'esprit, vous pouvez accomplir plus tout en maintenant 
              une qualité irréprochable.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900">Notre approche</h3>
            <p className="text-lg text-gray-700">
              Basée sur des années de recherche et d'expérience, l'approche ViteButNotTooMuch 
              combine des techniques de productivité éprouvées et des méthodes innovantes pour 
              vous aider à atteindre vos objectifs sans compromettre la qualité.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Nos chiffres clés</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600">+40%</p>
                  <p className="text-lg text-gray-700">de productivité moyenne</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600">-25%</p>
                  <p className="text-lg text-gray-700">de stress au travail</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600">10k+</p>
                  <p className="text-lg text-gray-700">utilisateurs satisfaits</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600">95%</p>
                  <p className="text-lg text-gray-700">taux de satisfaction</p>
                </div>
              </div>
            </div>
            
            <blockquote className="italic text-gray-700 border-l-4 border-blue-600 pl-4">
              "ViteButNotTooMuch a transformé ma façon de travailler. J'accomplis maintenant plus de tâches 
              en moins de temps, tout en maintenant une qualité qui me rend fier de mon travail."
              <footer className="mt-2 font-semibold">— Thomas D., entrepreneur</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
} 