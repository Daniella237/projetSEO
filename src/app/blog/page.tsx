import Link from 'next/link';

const articles = [
  {
    id: 'qui-sommes-nous',
    title: 'Qui sommes-nous ?',
    description: 'Découvrez l\'histoire et la mission de ViteButNotTooMuch',
    date: '2024-03-20',
    image: '/images/qui-sommes-nous.jpg',
    readTime: '5 min',
  },
  {
    id: 'notre-philosophie',
    title: 'Notre philosophie',
    description: 'Comment nous abordons l\'efficacité et la qualité',
    date: '2024-03-21',
    image: '/images/notre-philosophie.jpg',
    readTime: '4 min',
  },
  {
    id: 'notre-equipe',
    title: 'Notre équipe',
    description: 'Rencontrez les personnes derrière ViteButNotTooMuch',
    date: '2024-03-22',
    image: '/images/notre-equipe.jpg',
    readTime: '6 min',
  },
];

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Notre Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link 
            href={`/blog/${article.id}`} 
            key={article.id}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 overflow-hidden rounded-lg">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600 mb-4">{article.description}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{article.date}</span>
              <span>{article.readTime} de lecture</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
} 