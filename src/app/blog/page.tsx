import Link from 'next/link';

const articles = [
  {
    id: 'notre-philosophie',
    title: 'Notre philosophie',
    description: 'Comment nous abordons l\'efficacité et la qualité',
    date: '2025-06-02',
    image: 'https://images.pexels.com/photos/32394846/pexels-photo-32394846/free-photo-of-couteau-equilibrant-un-oeuf-sur-fond-sombre.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    readTime: '4 min',
  },
  {
    id: 'le-nouveau-raal-de-la-productivite',
    title: 'Le nouveau raal de la productivité',
    description: 'Découvrez comment nous avons changé notre approche pour devenir plus efficaces',
    date: '2025-06-03',
    image: 'https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '7 min',
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