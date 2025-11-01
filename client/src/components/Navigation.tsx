import { useState } from 'react';
import { useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { APP_LOGO, APP_TITLE } from '@/const';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'cs');
  const [location] = useLocation();

  const toggleLanguage = () => {
    const newLang = language === 'cs' ? 'en' : 'cs';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
    document.documentElement.lang = newLang;
  };

  const navItems = [
    { path: '/', label: { cs: 'Domů', en: 'Home' } },
    { path: '/about', label: { cs: 'O nás', en: 'About Us' } },
    { path: '/animals', label: { cs: 'Zvířecí obyvatelé', en: 'Animal Residents' } },
    { path: '/virtual-adoption', label: { cs: 'Virtuální adopce', en: 'Virtual Adoption' } },
    { path: '/events', label: { cs: 'Události', en: 'Events' } },
    { path: '/contact', label: { cs: 'Kontakt', en: 'Contact' } },
    { path: '/crypto-donation', label: { cs: 'Přispět kryptem', en: 'Donate with Crypto' } },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            {APP_LOGO && <img src={APP_LOGO} alt={APP_TITLE} className="h-10 w-10" />}
            <span className="font-bold text-lg text-green-900 hidden sm:inline">{APP_TITLE}</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors ${
                  location === item.path
                    ? 'text-green-700 border-b-2 border-green-700'
                    : 'text-gray-700 hover:text-green-700'
                }`}
              >
                {item.label[language as 'cs' | 'en']}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 bg-green-100 text-green-700 rounded font-medium text-sm hover:bg-green-200"
            >
              {language === 'cs' ? 'EN' : 'CZ'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium"
            >
              {language === 'cs' ? 'EN' : 'CZ'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-700"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`block px-4 py-2 rounded text-sm font-medium transition-colors ${
                  location === item.path
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label[language as 'cs' | 'en']}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
