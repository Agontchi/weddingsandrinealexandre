import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import GuideDressCode from '@/app/components/GuideDressCode'

export default function PreparationPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Navigation */}
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-secondary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl mb-6">Votre guide pour notre week-end de mariage</h1>
            <p className="text-lg mb-8">Tout ce que vous devez savoir sur notre célébration au Château de Percey</p>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-2">
              {/* <Link href="/ceremonie/rsvp" className="btn bg-white text-secondary border-white hover:bg-transparent hover:text-white mx-0 md:mx-2">
                Répondez maintenant
              </Link> */}
              <Link href="#logistics" className="btn border-white text-white hover:bg-white hover:text-secondary mx-0 md:mx-2">
                Voir les détails logistiques
              </Link>
              <Link href="#guide-bagages" className="btn border-white text-white hover:bg-white hover:text-secondary mx-0 md:mx-2">
                Voir le guide des bagages
              </Link>
              <Link href="#dresscode" className="btn border-white text-white hover:bg-white hover:text-secondary mx-0 md:mx-2">
                Voir le dress code
              </Link>
              <Link href="#otherinfo" className="btn border-white text-white hover:bg-white hover:text-secondary mx-0 md:mx-2">
                Autres Infos
              </Link>

            </div>
          </div>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl mb-6">Bienvenue à notre week-end de mariage</h2>
              <p className="text-lg mb-4">
                Nous sommes ravis de vous avoir avec nous pour notre célébration de mariage au magnifique Château de Percey. 
                Nous avons créé ce guide pour vous aider à vous préparer pour le week-end et rendre votre expérience aussi agréable que possible.
              </p>
              <p className="italic">
                Veuillez lire attentivement toutes les sections car elles contiennent des informations importantes pour votre séjour.
              </p>
            </div>
            
            <div className="relative h-64 md:h-96 mb-12">
              <Image 
                src="/images/preparation_chateau.png" 
                alt="Château de Percey" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Weekend Schedule */}
<section id="schedule" className="py-16 bg-accent">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-center mb-12">Calendrier du week-end</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Friday */}
              <div className="bg-white p-8 shadow-md">
                <h3 className="font-serif text-2xl mb-4 text-center">Vendredi</h3>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold mb-1">19:00 - 20:00+</p>
                  <p className="mb-4">Arrivé et Accueil</p>
                  
                  <p className="font-semibold mb-1">20:00 - 22:00</p>
                  <p className="mb-4">Réunion de bienvenue</p>
                  
                  <div className="mt-6 p-4 bg-accent text-sm">
                    <p className="font-semibold mb-2">Note importante :</p>
                    <p>Veuillez manger avant d&apos;arriver car aucun dîner formel ne sera servi. Vous êtes invités à apporter de la nourriture à consommer au château.</p>
                  </div>
                </div>
              </div>
              
              {/* Saturday */}
              <div className="bg-white p-8 shadow-md">
                <h3 className="font-serif text-2xl mb-4 text-center">Samedi</h3>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold mb-1">08:00 - 12:00</p>
                  <p className="mb-4">Petit déjeuner offert au château</p>
                  
                  <p className="font-semibold mb-1">14:00 - 15:30</p>
                  <p className="mb-4">Cérémonie à l&apos;église de Saint-Florentin</p>
                  
                  <p className="font-semibold mb-1">17:30 - 19:00</p>
                  <p className="mb-4">Cocktail</p>
                  
                  <p className="font-semibold mb-1">19:00 - 04:00</p>
                  <p className="mb-4">Dîner et Fête</p>
                </div>
              </div>
              
              {/* Sunday */}
              <div className="bg-white p-8 shadow-md">
                <h3 className="font-serif text-2xl mb-4 text-center">Dimanche</h3>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold mb-1">10:00 - 13:00</p>
                  <p className="mb-4">Brunch offert au château</p>
                  
                  <p className="font-semibold mb-1">13:00 - 16:00</p>
                  <p className="mb-4">Départ</p>
                  
                  <div className="mt-6 p-4 bg-accent text-sm">
                    <p>Vous pouvez rester au château jusqu&apos;à 16h00.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Logistics Section */}
      <section id="logistics" className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-center mb-12">Informations logistiques</h2>
            
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
                  <p className="mt-2 text-sm italic">Veuillez indiquer vos besoins de transport dans le formulaire de réponse.</p>
                </div>
              </div>
            </div>
            
            {/* Carpooling
            <div className="bg-secondary text-white p-8 rounded-lg mb-12">
              <h3 className="font-serif text-2xl mb-4 text-center">Covoiturage</h3>
              <p className="mb-4 text-center">
                Pour réduire notre impact environnemental et faciliter les déplacements, nous encourageons le covoiturage.
              </p>
              <div className="text-center">
                <Link 
                  href="/ceremonie/rsvp" 
                  className="btn inline-block bg-white text-secondary border-white hover:bg-transparent hover:text-white"
                >
                  Enregistrez votre voiture ou trouvez un trajet
                </Link>
              </div>
            </div> */}
            
            {/* Accommodation */}
            <div className="mb-12">
              <h3 className="font-serif text-2xl mb-6 text-center">Hébergement</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                <div className="bg-accent p-6">
                  <h4 className="font-semibold text-lg mb-2">Au château</h4>
                  <p className="mb-4">
                    Le château dispose de 65 lits pour les invités. L&apos;hébergement au château est attribué en fonction des groupes familiaux et des reponses reçues dans le formulaire de réponse de l&apos;invitation.
                  </p>
                  <p className="text-sm">
                    Le plan des chambres sera disponible sur la page plans. 
                  </p>
                  <Link href="/ceremonie/plans" className="btn inline-block bg-white text-secondary border-white hover:bg-transparent hover:text-white mt-4">
                    Voir le plan des chambres
                  </Link>

                </div>
                
                {/* <div className="bg-accent p-6">
                  <h4 className="font-semibold text-lg mb-2">Options à proximité</h4>
                  <p className="mb-4">
                    Pour les invités qui ne séjournent pas au château, nous vous envoyons les informations sur les hébergements au plus tard un mois avant le mariage.
                  </p>
                </div> */}
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
      
      
      {/* What to Bring & Dress Code */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-center mb-12">Guide de préparation</h2>
            
            {/* Dress Code */}
            <div id="dresscode" className="bg-white p-8 shadow-md mb-12">
              <h3 className="font-serif text-2xl mb-6 text-center">Code vestimentaire de la fin de semaine</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="relative h-80 mb-4">
                    <Image 
                      src="/images/dresscodevendredi.png" 
                      alt="Tenue du vendredi" 
                      fill
                      className="object-contain bg-white"
                    />
                  </div>
                  <h4 className="font-semibold mb-2">Vendredi</h4>
                  <p>Élégant décontracté</p>
                </div>
                
                <div className="text-center">
                  <div className="relative h-80 mb-4">
                    <Image 
                      src="/images/dresscodesamedi2.png" 
                      alt="Tenue du samedi" 
                      fill
                      className="object-contain bg-white"
                    />
                  </div>
                  <h4 className="font-semibold mb-2">Samedi</h4>
                  <p>Tenue formelle</p>
                </div>
                
                <div className="text-center">
                  <div className="relative h-80 mb-4">
                    <Image 
                      src="/images/dresscodedimanche.png" 
                      alt="Tenue du dimanche" 
                      fill
                      className="object-contain bg-white"
                    />
                  </div>
                  <h4 className="font-semibold mb-2">Dimanche</h4>
                  <p>Chic décontracté</p>
                </div>
              </div>
              
              <div className="p-4 bg-accent">
                <p className="italic text-center">
                  Les terrains du château peuvent être inégaux, nous recommandons donc des chaussures confortables, notamment pour les activités en plein air.
                </p>
              </div>
            </div>

            {/* Dress Code */}
            <GuideDressCode />
            
            {/* What to Bring */}
            {/* <div className="bg-white p-8 shadow-md">
              <h3 className="font-serif text-2xl mb-6 text-center">Ce qu&apos;il faut apporter</h3>
              
              <div className="text-center">
                <p className="mb-6">Pour vous aider à préparer votre séjour, nous avons créé un guide détaillé des bagages.</p>
                
                <Link 
                  href="/ceremonie/preparations#guide-bagages" 
                  className="btn bg-secondary text-white border-secondary hover:bg-transparent hover:text-secondary inline-flex items-center"
                >
                  <span>Voir le guide des bagages</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                
                <div className="p-4 bg-accent mt-8">
                  <p className="text-sm">
                    <strong>Note :</strong> Les serviettes et les draps seront fournis pour les invités qui séjournent au château.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      
      {/* Activities & Amenities */}
      <section id="otherinfo" className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-center mb-12">Activités et équipements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* At the Château */}
              <div className="bg-accent p-6">
                <h3 className="font-serif text-xl mb-4">Au château</h3>
                <ul className="list-disc pl-5">
                  <li className="mb-2">Piscine</li>
                  <li className="mb-2">Promenades dans les jardins</li>
                  <li className="mb-2">Pétanque</li>
                  <li className="mb-2">Faire coucou à Margeritte et Clementine</li>
                </ul>
              </div>          
              
              {/* Nearby Attractions */}
              <div className="bg-accent p-6">
                <h3 className="font-serif text-xl mb-4">Attractions à proximité</h3>
                <p className="mb-4">
                  Si vous prolongez votre séjour dans la région :
                </p>
                <ul className="list-disc pl-5">
                  <li className="mb-2">Caves à vin locales</li>
                  <li className="mb-2">Villages historiques</li>
                  <li className="mb-2">Sentiers de randonnée</li>
                  <li className="mb-2">Marchés locaux</li>
                </ul>
                <p className="text-sm mt-2">
                  Regardez Google Maps pour des recommandations !
                </p>
              </div>
            </div>
            
            {/* Meals & Dietary Requirements */}
            <div className="bg-secondary text-white p-8 rounded-lg">
              <h3 className="font-serif text-2xl mb-6 text-center">Repas et régimes alimentaires</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3">Repas fournis</h4>
                <ul className="list-disc pl-5">
                  <li className="mb-2">Samedi : Petit déjeuner, Cocktail, Dîner</li>
                  <li className="mb-2">Dimanche : Brunch</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3">Arrivée vendredi</h4>
                <p>
                  Veuillez noter qu&apos;aucun dîner formel ne sera servi vendredi. Nous vous recommandons de manger avant d&apos;arriver ou d&apos;apporter de la nourriture à consommer au château. Amenez vos spiritueux pour la soirée.
                </p>
              </div>

              <div className="mb-6">
              <h4 className="font-semibold text-lg mb-3">Samedi matin</h4>
                <p>
              Un petit déjeuner est offert avec croissants, pains au chocolat, œufs et autres accompannements.
              Si vous avez un grand appétit, nous vous invitons à amener votre propre nourriture (vous pourrez la stocker dans le frigo) ou à aller manger dans les environs.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Régimes alimentaires</h4>
                <p className="mb-4">
                  Nous ferons de notre mieux pour accommoder les restrictions et allergies alimentaires. Verifier le plan de table pour voir si nous avons bien noté vos alergies et restrictions alimentaires.
                </p>
                <div className="text-center">
                  <Link 
                    href="/ceremonie/plans#plansdetable" 
                    className="btn bg-white text-secondary border-white hover:bg-transparent hover:text-white"
                  >
                    Voir le plan de table
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* RSVP & Information Form */}
      {/* <section id="rsvp" className="py-16 bg-accent">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-center mb-6">Formulaire de réponse et d&apos;information</h2>
            <p className="text-center mb-8">
              Veuillez compléter ce formulaire avant le 15 mai 2025 pour nous aider à finaliser les arrangements.
            </p>
            
            <div className="bg-white p-8 shadow-md">
              <div className="mb-8 text-center">
                <a 
                  href="/ceremonie/rsvp" 
                  target="_blank" 
                  className="btn bg-secondary text-white border-secondary hover:bg-transparent hover:text-secondary"
                >
                  Ouvrir le formulaire
                </a>
              </div>
              
              <div className="text-sm">
                <h4 className="font-semibold mb-2">Le formulaire collectera des informations sur :</h4>
                <ul className="list-disc pl-5">
                  <li className="mb-1">Arrangements de transport</li>
                  <li className="mb-1">Options de covoiturage (offrant/demandant des trajets)</li>
                  <li className="mb-1">Restrictions alimentaires</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-center mb-12">Questions ?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center p-6 border border-gray-200">
                <h3 className="font-serif text-xl mb-4">Point de contact de mariage</h3>
                <h1 className="mb-2">Helena Gontcharova</h1>
                <p className="mb-2">+33 6 19 31 58 55</p>
                <p className="mb-4">helenafr23@yahoo.fr</p>
                <p className="text-sm italic">Uniquement en cas d&apos;urgence</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200">
                <h3 className="font-serif text-xl mb-4">Contact du couple</h3>
                <h1 className="mb-2">Alexandre Gontcharov</h1>
                <p className="mb-2">+33 6 52 56 91 66</p>
                <p className="mb-2">+1 (514) 431 4934</p>
                <p className="mb-4">gontchi@gmail.com</p>
                <h1 className="mb-2">Sandrine Carey</h1>
                <p className="mb-4">+1 (438) 990 6039</p>
                <p className="mb-4">sandrinecarey@hotmail.com</p>
                <p className="text-sm italic">Pour les questions personnelles et demandes spéciales</p>
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