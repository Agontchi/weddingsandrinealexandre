import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import dynamic from 'next/dynamic'

// Dynamically import the SeatingPlan component with no SSR
const SeatingPlan = dynamic(
  () => import('@/app/components/SeatingPlan'),
  { ssr: false }
)

export default function PlansPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Navigation */}
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-secondary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl mb-6">Plans et détails du week-end</h1>
            <p className="text-lg mb-8">Informations importantes pour notre célébration au Château de Percey</p>
            
            {/* Navigation Icons */}
            <div className="max-w-3xl mx-auto mt-12">
              <div className="mb-6">
                <p className="text-lg font-medium mb-3">Avant l&apos;arrivée</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="#adresse" className="flex flex-col items-center group">
                    <div className="w-16 h-16 rounded-full bg-white text-secondary flex items-center justify-center mb-2 transform transition-transform group-hover:scale-110 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Adresse</span>
                  </a>
                  
                  <a href="#guide-bagages" className="flex flex-col items-center group">
                    <div className="w-16 h-16 rounded-full bg-white text-secondary flex items-center justify-center mb-2 transform transition-transform group-hover:scale-110 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Bagages</span>
                  </a>
                  <a href="#regles" className="flex flex-col items-center group">
                    <div className="w-16 h-16 rounded-full bg-white text-secondary flex items-center justify-center mb-2 transform transition-transform group-hover:scale-110 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Règles</span>
                  </a>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-lg font-medium mb-3">Vendredi</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="#vendredi" className="flex flex-col items-center group">
                    <div className="w-16 h-16 rounded-full bg-white text-secondary flex items-center justify-center mb-2 transform transition-transform group-hover:scale-110 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Programme</span>
                  </a>
                </div>
                <a href="#chambres" className="flex flex-col items-center group">
                    <div className="w-16 h-16 rounded-full bg-white text-secondary flex items-center justify-center mb-2 transform transition-transform group-hover:scale-110 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Chambres</span>
                  </a>
              </div>
              
              <div className="mb-6">
                <p className="text-lg font-medium mb-3">Samedi</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="#samedi" className="flex flex-col items-center group">
                    <div className="w-16 h-16 rounded-full bg-white text-secondary flex items-center justify-center mb-2 transform transition-transform group-hover:scale-110 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Programme</span>
                  </a>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-lg font-medium mb-3">Dimanche</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="#dimanche" className="flex flex-col items-center group">
                    <div className="w-16 h-16 rounded-full bg-white text-secondary flex items-center justify-center mb-2 transform transition-transform group-hover:scale-110 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Programme</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Friday Evening Schedule */}
      <section id="vendredi" className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl mb-6">Début des festivités</h2>
              <p className="font-serif italic text-2xl mb-4">vendredi 8 août</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
              <div className="text-center md:text-right md:w-1/3">
                <p className="font-semibold text-xl">7:00 PM</p>
              </div>
              
              <div className="flex items-center justify-center md:w-1/6">
                <div className="flex items-center">
                  <Image 
                    src="/images/cheers.svg" 
                    alt="Champagne glasses" 
                    width={40} 
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="md:w-1/2">
                <p className="font-semibold text-xl">ARRIVÉE DES INVITÉS AU CHÂTEAU</p>
              </div>
            </div>
            
            <div className="bg-light p-8 rounded-lg mb-12">
              <h3 className="font-serif text-2xl mb-6 text-center">Attention, avis à tous les gourmands et les amateurs de soirée</h3>
              
              <p className="mb-4 text-center">
                Le vendredi soir, nous ne servons aucun repas, donc, à moins que vous ne souhaitiez découvrir l&apos;art du jeûne, nous vous recommandons de manger avant votre arrivée. C&apos;est un peu comme une pré-réception gastronomique... sans nous. 😄
              </p>
              
              <p className="mb-4 text-center">
                Si vous souhaitez tout de même lever le coude et trinquer, on vous conseille de venir avec votre propre alcool 🍷
              </p>
              
              <div className="text-center mt-8">
                <p className="font-serif text-xl mb-2">On a très hâte de vous voir !</p>
                <p className="font-serif text-lg">Sandrine et Alexandre (les maîtres du vendredi soir... ou presque).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Château Address and Location */}
       <section id="adresse" className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-center mb-12">Adresse du château</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Location */}
              <div>
                <h3 className="font-serif text-2xl mb-4">Le lieu</h3>
                <p className="mb-4">
                  <strong>Château de Percey</strong><br />
                  1 Rue nationale, 89360 <br />
                  Percey, France
                </p>
                <div className="mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2407.641889628783!2d3.8191460809344036!3d47.96329761959889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ee60934f3f9f07%3A0x48e2187b21f20ce7!2sChateau%20de%20Percey!5e1!3m2!1sen!2sca!4v1745100551424!5m2!1sen!2sca"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Carte Google Maps du Château de Percey"
                  ></iframe>
                </div>
                
                <div className="mt-4 flex flex-col gap-2">
                  <Link 
                    href="https://maps.app.goo.gl/Eka8L4YYPTvpzond9" 
                    target="_blank" 
                    className="text-primary hover:underline"
                  >
                    Voir sur Google Maps →
                  </Link>
                  <Link
                    href="https://maps.app.goo.gl/aGwQVFPZ5KWnHaTy5"
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    Itinéraire Château → Église (Google Maps)
                  </Link>
                </div>
              </div>
              
              {/* Transportation */}
              <div>
                <h3 className="font-serif text-2xl mb-4">Options de transport</h3>
                <div className="space-y-3">
                  
                  <p><strong>Aéroport Roissy Charles de Gaulle</strong> : 191 KM via A5 : 2H15 en voiture.</p>
                  <p><strong>Paris</strong> : péage Fleury en Bière / Auxerre péage Nord 169 km : puis 30 minutes de voiture direction St Florentin, Percey.</p>
                  <p><strong>Avallon</strong> : 72 km via D957 : 1H10 en voiture.</p>
                  <p><strong>Dijon Centre</strong> : 57 km via D28 et autoroute de Lorraine/Bourgogne : 1H30 en voiture.</p>
                  <p><strong>Lyon</strong> : 309 KM via autoroute A6 : 3H15 en voiture.</p>
                  
                </div>
                <div className="p-4 bg-accent mt-4">
                  <h4 className="font-semibold mb-2">Transport en commun :</h4>
                  <ul className="list-disc pl-5">
                  <p><strong>Gare Paris Bercy</strong> → <strong>Gare St Florentin-Vergigny</strong> : 1H30 en train puis 10 minutes en voiture.</p>
                  <p><strong>Lyon Part-Dieu</strong> → <strong>Gare St Florentin-Vergigny</strong> : 3H30 en train.</p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Room Plans */}
      <section id="chambres" className="py-16 bg-accent">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-center mb-12">Plan des chambres</h2>
            
            <div className="bg-white p-8 shadow-md mb-12">
              <h3 className="font-serif text-2xl mb-6 text-center">Hébergement au château</h3>
              
              <p className="mb-8 text-center">
                Le château dispose de plusieurs chambres réparties sur différents étages. Voici le plan des chambres pour vous aider à vous orienter pendant votre séjour.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-8">
                <div>
                  <div className="relative w-full mb-4">
                    <Image 
                      src="/images/plan_du_chateau.png" 
                      alt="Plan du chateau" 
                      width={1200}
                      height={800}
                      className="w-full h-auto mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 shadow-md">
              <h3 className="font-serif text-2xl mb-6 text-center">Attribution des chambres</h3>
              
              <p className="mb-6 text-center">
                Les chambres seront attribuées en fonction des groupes familiaux et du principe premier arrivé premier servi lors de réponses des formulaires. La plupart des chambres seront partagées.
              </p>
              
              <div className="p-4 bg-accent text-center">
                <p className="italic">
                  La liste définitive des attributions de chambres sera communiquée lors de votre arrivée au château.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* Baggage Guide */}
      <section id="guide-bagages" className="py-16 bg-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-center mb-12">Guide des bagages pour votre séjour</h2>
            
            <div className="bg-white p-8 shadow-md mb-12 border-l-4 border-primary" style={{ backgroundImage: "linear-gradient(to right, rgba(220, 220, 220, 0.1) 1px, transparent 1px)", backgroundSize: "25px 100%" }}>
              <h3 className="font-serif text-2xl mb-6 text-center">Guide des bagages pour votre séjour au Château de Percey</h3>
              
              <div className="mb-8">
                
                
                <div className="mb-8">
                <h4 className="font-semibold text-xl mb-4 bg-secondary text-white py-2 px-4 inline-block">FOURNI PAR LE CHÂTEAU</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                  <div>
                    <h5 className="font-semibold mb-2">Catégorie</h5>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Articles fournis</h5>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2 border-b border-gray-200">
                  <div>
                    <p>Linge de maison</p>
                  </div>
                  <div className="md:col-span-2">
                    <p>
                      <span className="inline-flex items-center"><span className="mr-2">✓</span> Serviettes de toilette</span><br/>
                      <span className="inline-flex items-center"><span className="mr-2">✓</span> Draps et taies d&apos;oreiller</span><br/>
                      <span className="inline-flex items-center"><span className="mr-2">✓</span> Couvertures supplémentaires</span>
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2 border-b border-gray-200">
                  <div>
                    <p>Équipements</p>
                  </div>
                  <div className="md:col-span-2">
                    <p>
                      <span className="inline-flex items-center"><span className="mr-2">✓</span> Sèche-cheveux (disponible dans chaque chambre et salle de bain)</span><br/>
                      <span className="inline-flex items-center"><span className="mr-2">✓</span> Fer à repasser et tables à repasser (plusieurs disponibles)</span><br/>
                      <span className="inline-flex items-center"><span className="mr-2">✓</span> Produits d&apos;accueil de base (savon, shampoing)</span><br/>
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2 border-b border-gray-200">
                  <div>
                    <p>Services</p>
                  </div>
                  <div className="md:col-span-2">
                    <p>
                      <span className="inline-flex items-center"><span className="mr-2">✓</span> Wifi gratuit</span>
                    </p>
                  </div>
                </div>
              </div>
              <h4 className="font-semibold text-xl mb-4 bg-primary text-white py-2 px-4 inline-block">À APPORTER OBLIGATOIREMENT</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                  <div>
                    <h5 className="font-semibold mb-2">Catégorie</h5>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Articles</h5>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2 border-b border-gray-200">
                  <div>
                    <p>Piscine</p>
                  </div>
                  <div className="md:col-span-2">
                    <p>
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-primary" />
                        <span className="ml-2">Maillots de bain</span>
                      </label><br/>
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-primary" />
                        <span className="ml-2">Serviettes de piscine</span>
                      </label>
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2 border-b border-gray-200">
                  <div>
                    <p>Hygiène personnelle</p>
                  </div>
                  <div className="md:col-span-2">
                    <p>
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-primary" />
                        <span className="ml-2">Votre trousse de toilette complète</span>
                      </label><br/>
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-primary" />
                        <span className="ml-2">Vos produits d&apos;hygiène habituels (complément aux produits de base fournis)</span>
                      </label><br/>
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-primary" />
                        <span className="ml-2">Médicaments personnels</span>
                      </label><br/>
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-primary" />
                        <span className="ml-2">Lunettes de soleil</span>
                      </label><br/>
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-primary" />
                        <span className="ml-2">Crème solaire</span>
                      </label><br/>
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-primary" />
                        <span className="ml-2">Démaquillant et produits de beauté personnels</span>
                      </label>
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2 border-b border-gray-200">
                  <div>
                    <p>Coiffure et beauté</p>
                  </div>
                  <div className="md:col-span-2">
                    <p>
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-primary" />
                        <span className="ml-2">Appareils pour les cheveux (sèche-cheveux disponible dans chaque chambre)</span>
                      </label><br/>
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-primary" />
                        <span className="ml-2">Produits coiffants</span>
                      </label><br/>
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-primary" />
                        <span className="ml-2">Accessoires cheveux</span>
                      </label>
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2 border-b border-gray-200">
                  <div>
                    <p>Accessoires</p>
                  </div>
                  <div className="md:col-span-2">
                    <p>
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-primary" />
                        <span className="ml-2">Evantails et vaporisateurs rafraichissants</span>
                      </label><br/>
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-primary" />
                        <span className="ml-2">Sac à main ou pochette pour la soirée</span>
                      </label><br/>
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-primary" />
                        <span className="ml-2">Chargeurs pour vos appareils électroniques</span>
                      </label>
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2 border-b border-gray-200">
                  <div>
                    <p>Documents</p>
                  </div>
                  <div className="md:col-span-2">
                    <p>
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-primary" />
                        <span className="ml-2">Témoins uniquement : passeport obligatoire</span>
                      </label>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="font-semibold text-xl mb-4 bg-accent py-2 px-4 inline-block">RECOMMANDATIONS SPÉCIALES BOURGOGNE</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                  <div>
                    <h5 className="font-semibold mb-2">Suggestion</h5>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Détails</h5>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2 border-b border-gray-200">
                  <div>
                    <p>Météo</p>
                  </div>
                  <div className="md:col-span-2">
                    <p>Vérifiez les prévisions avant le départ - la Bourgogne peut être imprévisible</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2 border-b border-gray-200">
                  <div>
                    <p>Chaussures</p>
                  </div>
                  <div className="md:col-span-2">
                    <p>Privilégiez des chaussures confortables pour visiter les jardins du château</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 shadow-md">
              <h3 className="font-serif text-2xl mb-6 text-center">🛒 COMMERCES À PROXIMITÉ</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div>
                  <h5 className="font-semibold mb-2">Distance</h5>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Direction</h5>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Commerces disponibles</h5>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2 border-b border-gray-200">
                <div>
                  <p>6 km</p>
                </div>
                <div>
                  <p>À gauche en sortant (direction Flogny-la-Chapelle)</p>
                </div>
                <div>
                  <p>• Tabac<br/>• Presse<br/>• Boulangerie<br/>• Fromages</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2 border-b border-gray-200">
                <div>
                  <p>8 km</p>
                </div>
                <div>
                  <p>À droite en sortant (direction Saint-Florentin)</p>
                </div>
                <div>
                  <p>• Tabac<br/>• Presse<br/>• Grande surface</p>
                </div>
              </div>
              
              <div className="text-center mt-6 italic">
                <p>Parfait pour les achats de dernière minute ou les envies gourmandes !</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Saturday Schedule */}
      <section id="samedi" className="py-16 bg-accent">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl mb-6">Jour de la célébration</h2>
              <p className="font-serif italic text-2xl mb-4">samedi 9 août</p>
            </div>
            
            <div className="bg-white p-8 shadow-md mb-12">
              <h3 className="font-serif text-2xl mb-6 text-center">Programme de la journée</h3>
              
              <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="md:w-1/4 text-center md:text-right">
                    <p className="font-semibold text-xl">Matinée</p>
                  </div>
                  <div className="md:w-3/4">
                    <p className="font-semibold text-xl mb-2">Petit déjeuner, visite de la région</p>
                    <p>Petit déjeuner Français fourni: Café, Thé, Croissants, Pain au chocolat</p>
                    <p>Nous vous conseillons de visiter Chablis et les environs</p>
                    <p>Si vous êtes de grand mangeurs on vous invite a luncher dans les environs</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="md:w-1/4 text-center md:text-right">
                    <p className="font-semibold text-xl">14:00</p>
                  </div>
                  <div className="md:w-3/4">
                    <p className="font-semibold text-xl mb-2">Arrivée et Accueil à L'Église de Saint Florentin</p>
                    <p>Arrivez en avance, donc prévoyez un peu de temps pour vous y rendre</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="md:w-1/4 text-center md:text-right">
                    <p className="font-semibold text-xl">14:30-15:30</p>
                  </div>
                  <div className="md:w-3/4">
                    <p className="font-semibold text-xl mb-2">Cérémonie religieuse</p>
                    <p>Église de Saint Florentin. Notre prêtre orthodoxe Père Rémi fera la cérémonie</p>
                    <p>S&apos;il vous plait, n&apos;apportez pas d&apos;appareil photo, vivez le moment, notre photographe sera là pour immortaliser ce moment</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="md:w-1/4 text-center md:text-right">
                    <p className="font-semibold text-xl">17:30</p>
                  </div>
                  <div className="md:w-3/4">
                    <p className="font-semibold text-xl mb-2">Cocktail de réception</p>
                    <p>Dans les jardins du château et dans la salle de réception</p>
                    <p>Des surprises vous attendent</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="md:w-1/4 text-center md:text-right">
                    <p className="font-semibold text-xl">19:00</p>
                  </div>
                  <div className="md:w-3/4">
                    <p className="font-semibold text-xl mb-2">Dîner</p>
                    <p>Dans la salle de réception du château, l&apos;orangerie</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="md:w-1/4 text-center md:text-right">
                    <p className="font-semibold text-xl">22:00</p>
                  </div>
                  <div className="md:w-3/4">
                    <p className="font-semibold text-xl mb-2">Soirée dansante</p>
                    <p>Jusqu'au bout de la nuit !</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 shadow-md mt-12">
              <h3 className="font-serif text-2xl mb-6 text-center">Plan de table</h3>
              <p className="text-center mb-6">
                Trouvez votre place pour le dîner en entrant votre nom ci-dessous.
              </p>
              
              <SeatingPlan />
            </div>
          </div>
        </div>
      </section>
      
      {/* Sunday Schedule */}
      <section id="dimanche" className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl mb-6">Jour de départ</h2>
              <p className="font-serif italic text-2xl mb-4">dimanche 10 août</p>
            </div>
            
            <div className="bg-light p-8 shadow-md mb-12">
              <h3 className="font-serif text-2xl mb-6 text-center">Programme de la journée</h3>
              
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="md:w-1/4 text-center md:text-right">
                    <p className="font-semibold text-xl">10:00 - 12:00</p>
                  </div>
                  <div className="md:w-3/4">
                    <p className="font-semibold text-xl mb-2">Brunch</p>
                    <p>Dans les jardins du château (si le temps le permet) ou dans la salle à manger</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="md:w-1/4 text-center md:text-right">
                    <p className="font-semibold text-xl">13:00 - 16:00</p>
                  </div>
                  <div className="md:w-3/4">
                    <p className="font-semibold text-xl mb-2">Départ</p>
                    <p>Libération des chambres et aurevoir</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Règles à suivre */}
      <section id="regles" className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-center mb-12">Règles à suivre 💛</h2>
            
            <div className="bg-light p-8 shadow-md rounded-lg">
              <p className="mb-6 text-center">
                Nous voulons que cette journée soit remplie de rires, de regards complices et de beaux souvenirs — pour nous, et pour vous aussi !
              </p>
              
              <div className="flex items-center justify-center mb-8">
                <div className="bg-secondary text-white p-3 rounded-full">
                  <Image 
                    src="/images/camera-slash.svg" 
                    alt="Appareil photo" 
                    width={40} 
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
              
              <p className="mb-4 text-center font-semibold">
                📸 Un photographe sera présent toute la journée du samedi pour capturer tous ces moments précieux. Pour l&apos;aider à faire son travail (et pour que vous soyez tous magnifiques sur les photos !), nous vous demandons gentiment de limiter l&apos;utilisation de vos téléphones pendant l&apos;événement.
              </p>
              
              <p className="mb-6 text-center">
                L&apos;idée n&apos;est pas d&apos;interdire les photos, mais de favoriser la spontanéité, les vrais échanges, et surtout… d&apos;éviter d&apos;avoir une galerie entière de photos de dos penchés sur des écrans 😅
              </p>
                            
              <div className="text-center mt-8">
                <p className="font-serif text-xl mb-2">Merci de jouer le jeu et de vous laisser porter par l&apos;instant —</p>
                <p className="font-serif text-lg">on vous promet, les souvenirs seront encore plus beaux ✨</p>
              </div>
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h4 className="font-semibold text-xl mb-4 text-center">Autres règles importantes</h4>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <p><strong>Drogues de tout genre sont interdites.</strong> Tolérance zéro lors de notre événement.</p>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <p><strong>Aucune violence physique ou verbale ne sera tolérée.</strong> Nous vous prions de traiter le lieu et les invités avec respect.</p>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <p><strong>Vous êtes des adultes, nous comptons sur vous pour être à l&apos;heure. Suivez les horaires de la journée sur ce siteweb et aidez les autres.</strong></p>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}