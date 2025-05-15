import React from 'react';
import { Users, Award, Clock, Heart, MapPin, Phone, Mail, Calendar } from 'lucide-react';

export default function Agency() {
  const founders = [
    {
      name: "Céline RIGAL CHEVANNE",
      role: "Gérante",
      description: "Plus de 15 ans d'expérience, supervise l'ensemble des activités et en particulier le syndic de copropriété",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Adeline VERDEIL",
      role: "Co-gérante",
      description: "Présente depuis 2006 au sein de l'entreprise, en charge de la gestion locative",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Samantha DI BERARDINO",
      role: "Co-gérante",
      description: "Présente depuis 2012 au sein de l'entreprise, en charge de la transaction",
      image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const team = [
    { name: "Fanny SIMON", role: "Accueil et assistante de gestion" },
    { name: "Emilie JIMENEZ", role: "Assistance commerciale Transaction" },
    { name: "Madeleine MEBARKI GEY", role: "Assistante location" },
    { name: "Camille BORIES", role: "Assistante en copropriété" },
    { name: "Seyha PAN", role: "Assistante copropriété" },
    { name: "Manon MURAT", role: "Assistante location" },
  ];

  const schedule = [
    { day: "Lundi", hours: "14H00 - 18H00" },
    { day: "Mardi", hours: "9H00 - 18H00 (non stop)" },
    { day: "Mercredi", hours: "9H00 - 18H00 (non stop)" },
    { day: "Jeudi", hours: "9H00 - 18H00 (non stop)" },
    { day: "Vendredi", hours: "9H00 - 18H00 (non stop)" },
    { day: "Samedi", hours: "9H00 - 12H00" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Situation Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Sa situation</h2>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <p className="text-lg text-gray-600 mb-4">
            TARN IMMOBILIER est une agence indépendante créée en 1998.
          </p>
          <p className="text-lg text-gray-600">
            Nous sommes implantés à Albi, à proximité du centre-ville : 201 avenue Gambetta Albi.
          </p>
        </div>
      </section>

      {/* Activities Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Nos activités</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Syndic de copropriété</h3>
            <p className="text-gray-600">L'agence est syndic d'une quarantaine de copropriétés allant de 5 à 140 lots principaux.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Gestion locative</h3>
            <p className="text-gray-600">Plus de 480 lots sont gérés par notre service.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Location et Transaction</h3>
            <p className="text-gray-600">Nos services location et transaction sont présentes afin de renouveler régulièrement leurs offres.</p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Direction</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src={founder.image} 
                alt={founder.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{founder.name}</h3>
                <p className="text-brand-pink mb-2">{founder.role}</p>
                <p className="text-gray-600 text-sm">{founder.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre équipe</h2>
        <p className="text-lg text-gray-600 mb-8">Notre équipe vous conseille dans différents domaines :</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-brand-pink">{member.role}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-600">
            Nous évitons le cloisonnement des services et mettons les qualités de chacun en commun ; tant professionnelles que générationnelles.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Nos valeurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <Award className="h-12 w-12 text-brand-pink mx-auto mb-2" />
                <p className="font-semibold">Professionnalisme</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-brand-pink mx-auto mb-2" />
                <p className="font-semibold">Écoute</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-brand-pink mx-auto mb-2" />
                <p className="font-semibold">Proactivité</p>
              </div>
              <div className="text-center">
                <Heart className="h-12 w-12 text-brand-pink mx-auto mb-2" />
                <p className="font-semibold">Synergie</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Professionnalisme et rigueur, écoute et conseils, dynamisme et bonne humeur.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Nos engagements</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-brand-pink mr-2">•</span>
                Adhésion à la FNAIM (Fédération Nationale des Agents Immobiliers) avec accès à un service juridique performant
              </li>
              <li className="flex items-start">
                <span className="text-brand-pink mr-2">•</span>
                Charte qualité accueil-écoute-conseil délivrée par la CCI du Tarn depuis 2015
              </li>
              <li className="flex items-start">
                <span className="text-brand-pink mr-2">•</span>
                Label préférence commerce renouvelé tous les 2 ans
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Nos horaires</h2>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {schedule.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 border-b border-gray-100">
                <span className="font-semibold">{item.day}</span>
                <span className="text-gray-600">{item.hours}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-gray-600 mb-4">
              Nous privilégions le contact avec nos clients et attachons beaucoup d'importance à réaliser notre tâche au quotidien tout en recherchant à améliorer et développer les services que nous vous proposons (mise en place d'un extranet gratuit pour l'ensemble des propriétaires, ….).
            </p>
            <p className="text-gray-600 mb-4">
              Toute l'équipe est prête à vous accueillir et à vous faire bénéficier des services que nous avons développés.
            </p>
            <p className="text-gray-600 font-semibold">
              A bientôt.
            </p>
            <p className="text-gray-600">
              L'équipe de TARN IMMOBILIER
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <div className="bg-brand-pink/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Venez nous rencontrer</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-brand-pink mr-2" />
              <span>201 avenue Gambetta, Albi</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-brand-pink mr-2" />
              <a href="tel:0563432088" className="hover:text-brand-pink">05 63 43 20 88</a>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-brand-pink mr-2" />
              <a href="mailto:contact@tarn-immobilier.fr" className="hover:text-brand-pink">contact@tarn-immobilier.fr</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}