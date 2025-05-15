import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, Menu, X, User } from 'lucide-react';
import Home from './pages/Home';
import Agency from './pages/Agency';
import Transaction from './pages/Transaction';
import Location from './pages/Location';
import Syndic from './pages/Syndic';
import Gestion from './pages/Gestion';

function Navbar() {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/agence', label: 'Agence' },
    { path: '/transaction', label: 'Transaction' },
    { path: '/location', label: 'Location' },
    { path: '/syndic', label: 'Syndic' },
    { path: '/gestion', label: 'Gestion' },
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img src="https://tarn-immo.com/img/logo_site.png" alt="Tarn Immobilier" className="h-16" />
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-6 w-6 text-brand-pink" />
                <div className="hidden md:flex space-x-2">
                  <button className="text-sm font-medium text-gray-700 hover:text-brand-pink">
                    Login
                  </button>
                  <span className="text-gray-300">/</span>
                  <button className="text-sm font-medium text-gray-700 hover:text-brand-pink">
                    Sign up
                  </button>
                </div>
              </div>
              <button 
                onClick={() => setMobileMenu(!mobileMenu)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                aria-label="Menu"
              >
                {mobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          
          <nav className={`${mobileMenu ? 'flex' : 'hidden'} md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full transition duration-200 ${
                  isActive(link.path)
                    ? 'bg-brand-pink text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Tarn Immobilier</h3>
            <p className="text-gray-400">201 avenue Gambetta</p>
            <p className="text-gray-400">Albi</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                05 63 43 20 88
              </p>
              <p className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                contact@tarn-immobilier.fr
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/tarnimmobilier/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-pink transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/tarnimmobilier/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-pink transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tarn Immobilier. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agence" element={<Agency />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/location" element={<Location />} />
            <Route path="/syndic" element={<Syndic />} />
            <Route path="/gestion" element={<Gestion />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;