import React from 'react';
import { ClipboardList, PenTool as Tool, UserCheck, Shield } from 'lucide-react';

function Gestion() {
  const sections = [
    {
      title: "La gestion courante",
      items: [
        "L'envoie des avis d'échéances, l'encaissement des loyers et charges",
        "Le suivi des encaissements",
        "La révision annuelle des loyers",
        "La gestion des provisions sur charges et la régularisation annuelle",
        "Assurances :",
        "-vérification de l'assurance du locataire",
        "-vérification de l'assurance propriétaire non occupant",
        "Le suivi annuel des entretiens chaudières et cheminées",
        "La tenue de la comptabilité propriétaire",
        "L'aide à la déclaration des revenus fonciers",
        "Le rapport de gérance propriétaire mensuel détaillé",
        "Le virement mensuel des fonds perçus"
      ]
    },
    {
      title: "Le suivi des travaux",
      items: [
        "L'analyse de l'origine du problème (charge locative, propriétaire, garantie)",
        "La demande de devis",
        "Le suivi des travaux",
        "Le paiement des factures"
      ]
    },
    {
      title: "Le suivi des changements de locataires",
      items: [
        "L'acceptation et le contrôle de validité du congé",
        "L'information du départ locataire et la mise en location du bien dans les meilleurs délais",
        "Le décompte et la restitution du dépôt de garantie au locataire",
        "La déclaration du départ auprès de la perception",
        "Le suivi et l'analyse des diagnostics obligatoires en location",
        "La visite conseil (pré-état des lieux de sortie)"
      ]
    },
    {
      title: "Le suivi des sinistres",
      items: [
        "La déclaration, notre présence lors de l'expertise, l'établissement de devis, le suivi des travaux, l'encaissement des indemnités, le paiement des factures"
      ]
    },
    {
      title: "Le suivi des impayés",
      items: [
        "Le recouvrement des créances, le suivi du dossier transmis à l'huissier",
        "L'assurance garantie loyers impayés et détériorations immobilières"
      ]
    },
    {
      title: "Nos plus",
      items: [
        "Votre accès extranet",
        "L'application « toc toc toc » pour tout nous signaler en temps réel",
        "Notre disponibilité, notre écoute et nos conseils"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">LA GESTION LOCATIVE</h1>
      <p className="text-xl text-gray-600 mb-12">Nos missions</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-brand-pink mb-4">{section.title}</h2>
            <ul className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <li 
                  key={itemIndex} 
                  className={`flex items-start ${item.startsWith('-') ? 'ml-6' : ''}`}
                >
                  <span className="h-6 w-6 text-brand-pink mr-2">•</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-brand-pink/5 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Confiez-nous la gestion de votre bien</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Notre équipe de professionnels est à votre disposition pour vous accompagner 
          dans la gestion de votre patrimoine immobilier.
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

export default Gestion;