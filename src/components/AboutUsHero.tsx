export default function AboutUsHero() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
          Qui sommes-nous ?
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
            Une équipe, une vision, une mission
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed">
            <span className="font-bold text-blue-600">ViteButNotTooMuch</span>, c'est plus qu'un nom accrocheur. C'est une philosophie de travail, un état d'esprit, un mouvement.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Dans un monde où tout s'accélère, où l'on valorise la vitesse au détriment de la qualité, nous avons décidé de faire autrement. Nous avons décidé de prouver que oui, on peut aller vite, mais sans jamais négliger le travail bien fait.
          </p>
        </div>

        <div className="mt-16 relative h-64 md:h-80 w-full bg-blue-200 rounded-lg mx-auto max-w-4xl">
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              loading="lazy"
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="équipe qui travaille ensemble" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 