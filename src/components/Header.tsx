import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ViteButNotTooMuch
        </Link>
        <nav className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
            Accueil
          </Link>
          <Link href="/qui-sommes-nous" className="text-gray-700 hover:text-blue-600 transition-colors">
            Qui sommes nous ?
          </Link>
          <Link href="/#features" className="text-gray-700 hover:text-blue-600 transition-colors">
            Méthode
          </Link>
          <Link href="/es-ce-que-ca-fonctionne" className="text-gray-700 hover:text-blue-600 transition-colors">
            Es ce que ça fonctionne ?
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
            Blog
          </Link>
          <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
} 