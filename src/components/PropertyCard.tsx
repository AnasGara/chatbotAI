import React from 'react';
import { MapPin, Euro, Building2, Home } from 'lucide-react';

interface Property {
  id: string;
  title: string;
  price: number;
  charges?: number;
  type: string;
  surface?: number;
  location: string;
  image: string;
}

interface PropertyCardProps {
  property: Property;
  onClick: () => void;
}

export default function PropertyCard({ property, onClick }: PropertyCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-[1.02] hover:shadow-xl"
      onClick={onClick}
    >
      <div className="relative">
        <span className="absolute top-2 left-2 bg-brand-pink text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
          Ref: {property.id}
        </span>
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">{property.title}</h3>
        <div className="space-y-3 text-gray-600">
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
            {property.price.toLocaleString()} €{property.charges ? ` + ${property.charges}€ cc` : ''}
          </div>
        </div>
        <div className="mt-6">
          <button 
            className="w-full px-4 py-3 bg-brand-pink text-white rounded-full hover:bg-pink-600 transition-colors shadow-md hover:shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            Voir le détail
          </button>
        </div>
      </div>
    </div>
  );
}