import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

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
          </div>
        </div>
      </section>
      
      {/* Friday Evening Schedule */}
      <section className="py-16 bg-white">
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
                Le vendredi soir, nous ne servons aucun repas, donc, à moins que vous ne souhaitiez découvrir l'art du jeûne, nous vous recommandons de manger avant votre arrivée. C'est un peu comme une pré-réception gastronomique... sans nous. 😄
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
       <section className="py-16 bg-white">
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
      <section className="py-16 bg-accent">
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
                Les chambres seront attribuées en fonction des groupes familiaux et des préférences indiquées dans votre formulaire de réponse.
              </p>
              
              <div className="p-4 bg-accent text-center">
                <p className="italic">
                  La liste définitive des attributions de chambres sera communiquée une semaine avant l'événement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* Baggage Guide */}
      <section className="py-16 bg-light">
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
                      <span className="inline-flex items-center"><span className="mr-2">✓</span> Draps et taies d'oreiller</span><br/>
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
                      <span className="inline-flex items-center"><span className="mr-2">✓</span> Produits d'accueil de base (savon, shampoing)</span><br/>
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
                        <span className="ml-2">Vos produits d'hygiène habituels (complément aux produits de base fournis)</span>
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
      
      {/* Footer */}
      <Footer />
    </main>
  )
}