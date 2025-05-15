import React, { useState } from 'react';
import { Home, MapPin, Euro, Building2 } from 'lucide-react';
import PropertyModal from '../components/PropertyModal';

const properties = [
  {
    id: 'L0001',
    title: 'Parking / Garage en location à Albi',
    price: 71,
    deposit: 71,
    fees: 71,
    type: 'Parking / Garage',
    surface: 0,
    location: 'ALBI (81000)',
    description: 'Garage ferme - albi secteur maladrerie, garage à louer !!! non soumis au dpe les informations sur les risques auxquels ce bien est exposé sont disponibles sur le site géorisques : www.georisques.gouv.fr pour toute information complémentaire merci de contacter le 06 08 87 21 16.',
    image: 'https://tarn-immo.com/photobox/tar_TARNIMMO_rat/location/photo/IMG_7225-16682926757153514937.jpg',
    features: {
      'Type de Parking': 'Externe',
      'Niveau': 318,
      'Etat général': 'Très bon état',
      'Catégorie': 'Parking'
    },
    availableDate: '08/06/2025'
  },
  {
    id: 'L0002',
    title: 'Appartement Cagnac-les-mines',
    price: 396,
    charges: 55,
    deposit: 396,
    fees: 396,
    type: 'Appartement',
    rooms: 2,
    surface: 36,
    location: 'CAGNAC LES MINES (81130)',
    description: 'Cagnac les mines t2 - appartement de type deux dans résidence au calme. coin cuisine aménagée, séjour, salle de bains, chambre avec rangements deux places de parking et agréable terrasse.',
    image: 'https://tarn-immo.com/photobox/tar_TARNIMMO_rat/location/photo/IMG_0307-6938653941513583875.jpg',
    features: {
      'Nombre de pièces': 2,
      'Surface Habitable': '36 m²',
      'Nombre de chambres': 1,
      'Salle de bain': 1,
      'Catégorie': 'Appartement',
      'Nombre d\'étages': 1,
      'Etat Général': 'Très bon état',
      'Nombre de terrasses': 1,
      'Chauffage': 'Individuel Electrique',
      'Eau chaude': 'Ballon électrique'
    }
  },
  {
    id: 'L0003',
    title: 'Appartement en location à Albi',
    price: 400,
    charges: 44,
    deposit: 400,
    fees: 319,
    type: 'Appartement',
    rooms: 1,
    surface: 29,
    location: 'ALBI (81000)',
    description: 'Albi fac studio avec parking - dans une résidence récente proche fac, studio avec meubles mis à disposition une entrée avec placard, coin cuisine équipé, pièce de vie lumineuse et un coin nuit. une salle d\'eau avec douche à l\'italienne cet appartement dispose également d\'une place de parking privative',
    image: 'https://tarn-immo.com/photobox/tar_TARNIMMO_rat/location/photo/90-IMG_0934-2053973688317571436.jpg',
    features: {
      'Nombre de pièces': 1,
      'Surface Habitable': '29 m²',
      'Numéro Etage': 2,
      'Salle d\'eau': 1,
      'Catégorie': 'Appartement récent',
      'Nombre d\'étages': 3,
      'Etat Général': 'Très bon état',
      'Chauffage': 'Individuel',
      'Eau chaude': 'Collective',
      'Ascenseur': 'Oui'
    }
  },
  {
    id: 'L0004',
    title: 'Appartement Cagnac-les-mines',
    price: 408,
    charges: 50,
    deposit: 408,
    fees: 385,
    type: 'Appartement',
    rooms: 2,
    surface: 35,
    location: 'CAGNAC LES MINES (81130)',
    description: 'Cagnac les mines t2 dans résidence - un appartement de type deux situé au 1er étage d\'une petite résidence au calme comprenant séjour coin cuisine aménagé une chambre une salle de bains avec wc. une terrasse et deux places de parking.',
    image: 'https://tarn-immo.com/photobox/tar_TARNIMMO_rat/location/photo/90-IMG_4775-5066310274136155330.jpg',
    features: {
      'Nombre de pièces': 2,
      'Surface Habitable': '35 m²',
      'Nombre de chambres': 1,
      'Numéro Etage': 1,
      'Salle d\'eau': 1,
      'Catégorie': 'Appartement',
      'Etat Général': 'Bon état',
      'Nombre de terrasses': 1,
      'Chauffage': 'Individuel Electrique',
      'Eau chaude': 'Ballon électrique'
    }
  },
  {
    id: 'L0005',
    title: 'Appartement Albi',
    price: 418,
    charges: 40,
    deposit: 836,
    fees: 308,
    type: 'Appartement',
    rooms: 1,
    surface: 28,
    location: 'ALBI (81000)',
    description: 'Albi fac studio meuble avec parking - a deux pas de la fac charmant studio meublé et équipé dans résidence sécurisée avec une place de parking privative une entrée avec placard, coin cuisine pièce de vie coin nuit et une salle d\'eau avec douche à l\'italienne',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    features: {
      'Nombre de pièces': 1,
      'Surface Habitable': '28 m²',
      'Numéro Etage': 3,
      'Salle d\'eau': 1,
      'Catégorie': 'Appartement',
      'Nombre d\'étages': 3,
      'Année de construction': 2022,
      'Etat Général': 'Très bon état',
      'Chauffage': 'Individuel Electrique',
      'Eau chaude': 'Collective',
      'Ascenseur': 'Oui'
    },
    availableDate: '01/06/2025'
  },
  {
    id: 'L0006',
    title: 'Appartement Albi',
    price: 420,
    charges: 28,
    deposit: 840,
    fees: 319,
    type: 'Appartement',
    rooms: 1,
    surface: 29,
    location: 'ALBI (81000)',
    description: 'Albi studio meuble secteur fac - charmant studio meublé de 29 m² dans une résidence récente sécurisée avec place de parking privative a deux pas de la fac',
    image: 'https://tarn-immo.com/photobox/tar_TARNIMMO_rat/location/photo/20180822_102841-7991969811759214910.jpg',
    features: {
      'Nombre de pièces': 1,
      'Surface Habitable': '29 m²',
      'Numéro Etage': 3,
      'Salle d\'eau': 1,
      'Catégorie': 'Appartement récent',
      'Nombre d\'étages': 3,
      'Année de construction': 2013,
      'Etat Général': 'Bon état',
      'Nombre de Balcons': 1,
      'Chauffage': 'Individuel Electrique',
      'Eau chaude': 'Ballon électrique',
      'Ascenseur': 'Oui'
    }
  }
];

function Location() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Nos Locations</h1>
      
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
                  {property.price} €{property.charges ? ` + ${property.charges}€ cc` : ''}
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

export default Location;