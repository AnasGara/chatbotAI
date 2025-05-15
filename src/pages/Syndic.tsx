import React from 'react';
import { Building2, Shield, Users, ClipboardCheck } from 'lucide-react';

function Syndic() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Syndic de Copropriété</h1>
      
      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-gray-600">
          Notre service de syndic de copropriété assure la gestion d'une quarantaine de copropriétés, 
          allant de 5 à 140 lots principaux. Nous nous engageons à fournir un service professionnel 
          et personnalisé pour répondre aux besoins spécifiques de chaque copropriété.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <Building2 className="h-12 w-12 text-brand-pink mb-4" />
          <h3 className="text-xl font-semibold mb-2">Gestion Administrative</h3>
          <p className="text-gray-600">
            Organisation des assemblées générales, suivi des décisions, gestion des contrats
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <Shield className="h-12 w-12 text-brand-pink mb-4" />
          <h3 className="text-xl font-semibold mb-2">Gestion Technique</h3>
          <p className="text-gray-600">
            Suivi des travaux, maintenance des équipements, interventions d'urgence
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ClipboardCheck className="h-12 w-12 text-brand-pink mb-4" />
          <h3 className="text-xl font-semibold mb-2">Gestion Comptable</h3>
          <p className="text-gray-600">
            Budget prévisionnel, appels de fonds, suivi des comptes
          </p>
        </div>
      </div>

      <div className="bg-brand-pink/5 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Contactez notre service syndic</h2>
        <p className="text-gray-600 mb-6">
          Pour toute demande concernant la gestion de votre copropriété, n'hésitez pas à nous contacter.
        </p>
        <a 
          href="tel:0563432088"
          className="inline-flex items-center px-6 py-3 bg-brand-pink text-white rounded-full hover:bg-pink-600 transition-colors"
        >
          Nous contacter
        </a>
      </div>
    </div>
  );
}

export default Syndic;