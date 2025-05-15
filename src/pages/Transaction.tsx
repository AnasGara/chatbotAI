import React, { useState } from 'react';
import { Home, MapPin, Euro, Building2 } from 'lucide-react';
import PropertyModal from '../components/PropertyModal';

const properties = [
  {
    id: 'V0001',
    title: 'Appartement Trebas',
    price: 34500,
    type: 'Appartement',
    rooms: 2,
    surface: 33,
    location: 'TREBAS (81340)',
    description: 'Trebas - appartement t2 avec terrasse et une place de stationnement cet appartement de 32,76 m² comprend une pièce de vie avec coin cuisine donnant sur la terrasse, une chambre et une salle de bains.',
    image: 'https://tarn-immo.com/photobox/tar_TARNIMMO_rat/transaction/photo/encompromis-1--13161142629480577778.jpg',
    features: {
      'Surface du séjour': '17 m²',
      'Nombre de chambres': 1,
      'Salle de bain': 1,
      'Etat Général': 'Bon état',
      'Chauffage': 'Individuel Electrique',
      'Eau chaude': 'Individuel'
    }
  },
  {
    id: 'V0002',
    title: 'Appartement Trebas',
    price: 34500,
    type: 'Appartement',
    rooms: 2,
    surface: 32,
    location: 'TREBAS (81340)',
    description: 'Trebas - appartement t2 avec terrasse et une place de stationnement situé au rez-de-chaussée de l\'immeuble, cet appartement de 32,23 m² comprend une pièce de vie avec coin cuisine donnant sur la terrasse, une chambre et une salle de bains.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    features: {
      'Nombre de chambres': 1,
      'Salle de bain': 1,
      'Etat Général': 'Bon état',
      'Nombre de terrasses': 1,
      'Chauffage': 'Individuel Electrique',
      'Eau chaude': 'Ballon électrique'
    }
  },
  {
    id: 'V0003',
    title: 'Maison Arthes',
    price: 78600,
    type: 'Maison',
    rooms: 3,
    surface: 67,
    location: 'ARTHES (81160)',
    description: 'Arthes - maison t3 avec garage a proximité de tous les commerces à pied, vous trouverez en rez-de-chaussée, une cuisine, un séjour, un wc et une salle d\'eau (sur un demi niveau) À l\'étage : deux chambres dont une avec balcon un garage non attenant à la maison menuiseries double vitrage + volets roulants électriques prévoir des travaux de rafraichissements (cuisine, salle d\'eau, électricité...)',
    image: 'https://tarn-immo.com/photobox/tar_TARNIMMO_rat/transaction/photo/10-2449532329073514380.jpg',
    features: {
      'Nombre de chambres': 2,
      'Etat Général': 'Bon état',
      'Chauffage': 'Individuel Electrique',
      'Type de Cuisine': 'Sans cuisine',
      'Nombre de salles d\'eau': 1,
      'Nombre de Garages': 1,
      'Nombre de terrasses': 1,
      'Mitoyenneté': '1 côté',
      'Couverture': 'Tuiles'
    }
  },
  {
    id: 'V0004',
    title: 'Terrain Lescure-d\'Albigeois',
    price: 92250,
    type: 'Terrain',
    surface: 1777,
    location: 'LESCURE D\'ALBIGEOIS (81380)',
    description: 'Terrain lescure 1777 m² viabilisé - terrain lescure d\'albigeois de 1777 m² constructible au calme et entièrement plat. ce terrain est viabilisé (eau, électricité...) rocade et zone commerciale à moins de 3 minutes. commerces, écoles, docteur accessibles à pied',
    image: 'https://tarn-immo.com/photobox/tar_TARNIMMO_rat/transaction/photo/9--3408032263278355833.jpg',
    features: {
      'Surface terrain': '1777 m²',
      'Viabilité': 'Oui',
      'Assainissement': 'Oui',
      'Catégorie': 'Terrain à bâtir'
    }
  },
  {
    id: 'V0005',
    title: 'Appartement Albi',
    price: 104850,
    type: 'Appartement',
    rooms: 1,
    surface: 35,
    location: 'ALBI (81000)',
    description: 'Albi appartement t1 coup de coeur - proche du pont vieux, ce bel appartement lumineux de 35,04 m² se compose d\'une pièce de vie avec coin cuisine et d\'une salle d\'eau. vendu meublé et libre de toute location. les petits plus : - une vue imprenable sur le tarn - une cave - appartement en très bon état - un parking gratuit à proximité',
    image: 'https://tarn-immo.com/photobox/tar_TARNIMMO_rat/transaction/photo/encompromis-1--16285920704589154919.jpg',
    features: {
      'Surface Habitable': '35 m²',
      'Numéro Etage': 2,
      'Salle d\'eau': 1,
      'Nombre d\'étages': 2,
      'Etat Général': 'Très bon état',
      'Chauffage': 'Individuel Gaz',
      'Eau chaude': 'Chaudière'
    }
  }
];

function Transaction() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Nos Biens à Vendre</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div 
            key={property.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition hover:scale-[1.02]"
            onClick={() => setSelectedProperty(property)}
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-brand-pink mr-2" />
                  {property.location}
                </div>
                {property.surface > 0 && (
                  <div className="flex items-center">
                    <Home className="h-5 w-5 text-brand-pink mr-2" />
                    {property.surface} m²
                  </div>
                )}
                <div className="flex items-center">
                  <Building2 className="h-5 w-5 text-brand-pink mr-2" />
                  {property.type}
                </div>
                <div className="flex items-center text-lg font-semibold">
                  <Euro className="h-5 w-5 text-brand-pink mr-2" />
                  {property.price.toLocaleString()} €
                </div>
              </div>
              <div className="mt-4">
                <button 
                  className="w-full px-4 py-2 bg-brand-pink text-white rounded-full hover:bg-pink-600 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProperty(property);
                  }}
                >
                  Voir le détail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProperty && (
        <PropertyModal 
          property={selectedProperty} 
          onClose={() => setSelectedProperty(null)} 
        />
      )}
    </div>
  );
}

export default Transaction;