import React from 'react';
import { X, Share2, Printer, Heart, FileText, MessageSquare } from 'lucide-react';

interface Property {
  id: string;
  title: string;
  price: number;
  charges?: number;
  deposit?: number;
  fees?: number;
  type: string;
  rooms?: number;
  surface?: number;
  location: string;
  description: string;
  image: string;
  features: Record<string, string | number>;
  availableDate?: string;
}

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  if (!property) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Découvrez ce bien : ${property.title}`,
        url: window.location.href,
      });
    } else {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">{property.title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6">
          <img src={property.image} alt={property.title} className="w-full h-96 object-cover rounded-lg mb-6" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                {property.price.toLocaleString()} €
                {property.charges ? ` + ${property.charges}€ charges` : ''}
              </h3>
              
              <div className="space-y-2 text-gray-600">
                <p><strong>Référence:</strong> {property.id}</p>
                <p><strong>Type:</strong> {property.type}</p>
                <p><strong>Surface:</strong> {property.surface} m²</p>
                <p><strong>Localisation:</strong> {property.location}</p>
                {property.availableDate && (
                  <p><strong>Disponible le:</strong> {property.availableDate}</p>
                )}
              </div>
            </div>
            
            <div className="space-y-4">
              {property.deposit && (
                <p><strong>Dépôt de garantie:</strong> {property.deposit}€</p>
              )}
              {property.fees && (
                <p><strong>Honoraires:</strong> {property.fees}€</p>
              )}
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Description</h3>
            <p className="text-gray-600 whitespace-pre-line">{property.description}</p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Caractéristiques</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(property.features).map(([key, value]) => (
                <div key={key} className="text-gray-600">
                  <strong>{key}:</strong> {value}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 border-t pt-6">
            <button className="flex items-center gap-2 px-4 py-2 bg-brand-pink text-white rounded-full hover:bg-pink-600">
              <FileText className="h-5 w-5" />
              Déposer mon dossier
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-50">
              <MessageSquare className="h-5 w-5" />
              Demande d'informations
            </button>
            <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-50">
              <Printer className="h-5 w-5" />
              Version imprimable
            </button>
            <button onClick={handleShare} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-50">
              <Share2 className="h-5 w-5" />
              Partager
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-50">
              <Heart className="h-5 w-5" />
              Ajouter aux favoris
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}