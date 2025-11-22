import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/innovations', label: 'Innovations' },
    { path: '/technology', label: 'Technology' },
    { path: '/sustainability', label: 'Sustainability' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white/95'
        } ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <img src="https://i.ibb.co/kVQQYSVz/Copy-of-Logo.png" alt="Copy-of-Logo" className="w-15  h-10 transition-transform group-hover:rotate-12" />
              <span className="text-xl font-bold text-gray-900">Orchid Solutions</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-green-600 ${
                    location.pathname === link.path
                      ? 'text-green-600'
                      : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 hover:text-green-600 ${
                    location.pathname === link.path
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src="https://i.ibb.co/kVQQYSVz/Copy-of-Logo.png" alt="Copy-of-Logo" className="w-6 h-6" />
                <span className="text-lg font-bold text-white">Orchid Solutions</span>
              </div>
              <p className="text-sm">
                Designing affordable, intelligent, and renewable innovations for a sustainable future.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.slice(0, 4).map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm hover:text-green-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><Link to="/innovations" className="text-sm hover:text-green-400 transition-colors">Innovations</Link></li>
                <li><Link to="/technology" className="text-sm hover:text-green-400 transition-colors">Technology</Link></li>
                <li><Link to="/sustainability" className="text-sm hover:text-green-400 transition-colors">Sustainability</Link></li>
                <li><Link to="/gallery" className="text-sm hover:text-green-400 transition-colors">Gallery</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>Email: info@orchidsolutions.com</li>
                <li>Phone: +91 6380891939</li>
                <li>Address: Trichy</li>
                <li>Tamil Nadu, IN 620013</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Orchid Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
