import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Home as HomeIcon, Key, Users } from 'lucide-react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-white mb-6">
              Bienvenue chez Tarn Immobilier
            </h1>
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
              Le travail d'une équipe unie, la clé de votre projet réussi
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/transaction"
                className="px-8 py-3 bg-brand-pink text-white rounded-full hover:bg-opacity-90 transition-colors"
              >
                Acheter
              </Link>
              <Link
                to="/location"
                className="px-8 py-3 bg-brand-blue text-white rounded-full hover:bg-opacity-90 transition-colors"
              >
                Louer
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-semibold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/transaction" className="group">
              <div className="p-6 rounded-xl bg-gray-50 hover:bg-brand-pink/5 transition-colors">
                <HomeIcon className="h-12 w-12 text-brand-pink mb-4" />
                <h3 className="text-xl font-semibold mb-2">Transaction</h3>
                <p className="text-gray-600">Trouvez le bien de vos rêves</p>
              </div>
            </Link>
            
            <Link to="/location" className="group">
              <div className="p-6 rounded-xl bg-gray-50 hover:bg-brand-blue/5 transition-colors">
                <Key className="h-12 w-12 text-brand-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-600">Des locations pour tous les besoins</p>
              </div>
            </Link>
            
            <Link to="/syndic" className="group">
              <div className="p-6 rounded-xl bg-gray-50 hover:bg-brand-green/5 transition-colors">
                <Building2 className="h-12 w-12 text-brand-green mb-4" />
                <h3 className="text-xl font-semibold mb-2">Syndic</h3>
                <p className="text-gray-600">Gestion de copropriété</p>
              </div>
            </Link>
            
            <Link to="/gestion" className="group">
              <div className="p-6 rounded-xl bg-gray-50 hover:bg-brand-yellow/5 transition-colors">
                <Users className="h-12 w-12 text-brand-yellow mb-4" />
                <h3 className="text-xl font-semibold mb-2">Gestion</h3>
                <p className="text-gray-600">Gestion locative professionnelle</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* About Preview Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-semibold mb-6">
                Une agence indépendante depuis 1998
              </h2>
              <p className="text-gray-600 mb-8">
                Implantés à Albi, à proximité du centre-ville, nous mettons notre expertise à votre service pour tous vos projets immobiliers.
              </p>
              <Link
                to="/agence"
                className="inline-flex items-center text-brand-pink hover:text-brand-pink/80 transition-colors"
              >
                En savoir plus
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="Notre agence"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;