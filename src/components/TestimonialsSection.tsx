import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Ce n'est pas une méthode miracle. C'est juste une façon de penser différente, plus logique, plus fluide. Depuis que je suis ViteButNotTooMuch, je suis beaucoup plus efficace, mais surtout plus détendu.",
    author: "Lucie M.",
    role: "consultante en communication"
  },
  {
    quote: "J'ai enfin arrêté de tout faire à la dernière minute. J'ai appris à mieux anticiper et à mieux prioriser. C'est fou à quel point ça change la vie.",
    author: "Hamid T.",
    role: "développeur freelance"
  },
  {
    quote: "Je pensais qu'aller vite voulait forcément dire bâcler. Maintenant je sais qu'on peut aller vite et bien… tant qu'on suit la bonne méthode.",
    author: "Sandra V.",
    role: "chef de projet"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ce que disent nos utilisateurs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">
                <FaQuoteLeft className="w-8 h-8" />
              </div>
              <blockquote className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">— {testimonial.author}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-lg text-white text-center">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3 relative h-48 w-full bg-blue-500 rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  loading="lazy"
                  src="https://images.pexels.com/photos/19392555/pexels-photo-19392555/free-photo-of-noir-et-blanc-mains-gens-personnes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="témoignages" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="lg:w-2/3 text-left">
              <h3 className="text-2xl font-bold mb-4">
                Rejoignez des milliers d'utilisateurs satisfaits
              </h3>
              <p className="text-xl">
                Découvrez pourquoi tant de professionnels font confiance à <span className="font-bold">ViteButNotTooMuch</span> pour transformer leur façon de travailler.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 