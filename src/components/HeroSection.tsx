import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            <span className="text-blue-600">ViteButNotTooMuch</span> - Allez vite, mais allez bien !
          </h1>
          
          <p className="text-xl text-gray-700 max-w-lg">
            Découvrez comment optimiser votre productivité sans sacrifier la qualité. 
            ViteButNotTooMuch, votre ressource incontournable pour trouver le parfait équilibre.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#features" 
              className="px-8 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors text-center"
            >
              Découvrir nos méthodes
            </Link>
            <Link 
              href="#contact" 
              className="px-8 py-3 bg-white border border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors text-center"
            >
              Nous contacter
            </Link>
          </div>
        </div>
        
        <div className="md:w-1/2 relative h-72 md:h-96 w-full">
          <div className="absolute inset-0 bg-blue-600 rounded-lg opacity-10"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              loading="lazy"
              src="https://images.pexels.com/photos/7148691/pexels-photo-7148691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="personne qui travaille" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 