import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <h4 className="text-xl font-bold mb-4">ViteButNotTooMuch</h4>
            <p className="text-gray-400 mb-4">
              Le site de ceux qui veulent aller vite… mais bien.
            </p>
            <p className="text-gray-400">
              Efficacité. Qualité. Équilibre.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/qui-sommes-nous" className="text-gray-400 hover:text-white transition-colors">Qui sommes-nous ?</Link></li>
              <li><Link href="/es-ce-que-ca-fonctionne" className="text-gray-400 hover:text-white transition-colors">Est-ce que ça fonctionne vraiment ?</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Guides</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Webinaires</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Légal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Mentions légales</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Politique de confidentialité</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Conditions d'utilisation</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            &copy; {currentYear} ViteButNotTooMuch. Tous droits réservés.
          </p>
          
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 