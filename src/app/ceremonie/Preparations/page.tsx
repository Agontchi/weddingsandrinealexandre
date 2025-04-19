import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

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
            <div className="flex justify-center">
              <Link href="#rsvp" className="btn bg-white text-secondary border-white hover:bg-transparent hover:text-white mx-2">
                Répondez maintenant
              </Link>
              <Link href="#logistics" className="btn border-white text-white hover:bg-white hover:text-secondary mx-2">
                Voir les détails logistiques
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
                src="/images/chateau-exterior.jpg" 
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
                  <p className="font-semibold mb-1">16:00 - 20:00</p>
                  <p className="mb-4">Arrivée et enregistrement</p>
                  
                  <p className="font-semibold mb-1">20:00 - 22:00</p>
                  <p className="mb-4">Réunion de bienvenue</p>
                  
                  <div className="mt-6 p-4 bg-accent text-sm">
                    <p className="font-semibold mb-2">Note importante :</p>
                    <p>Veuillez manger avant d'arriver car aucun dîner formel ne sera servi. Vous êtes invités à apporter de la nourriture à consommer au château.</p>
                  </div>
                </div>
              </div>
              
              {/* Saturday */}
              <div className="bg-white p-8 shadow-md">
                <h3 className="font-serif text-2xl mb-4 text-center">Samedi</h3>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold mb-1">08:00 - 10:00</p>
                  <p className="mb-4">Petit déjeuner</p>
                  
                  <p className="font-semibold mb-1">16:00</p>
                  <p className="mb-4">Cérémonie</p>
                  
                  <p className="font-semibold mb-1">17:00</p>
                  <p className="mb-4">Cocktail</p>
                  
                  <p className="font-semibold mb-1">19:00</p>
                  <p className="mb-4">Dîner et réception</p>
                </div>
              </div>
              
              {/* Sunday */}
              <div className="bg-white p-8 shadow-md">
                <h3 className="font-serif text-2xl mb-4 text-center">Dimanche</h3>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold mb-1">09:00 - 11:00</p>
                  <p className="mb-4">Déjeuner</p>
                  
                  <p className="font-semibold mb-1">12:00</p>
                  <p className="mb-4">Départ</p>
                  
                  <div className="mt-6 p-4 bg-accent text-sm">
                    <p>Les séjours prolongés doivent être organisés à l'avance via notre formulaire de réponse.</p>
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
                  [Full Address]<br />
                  Percey, France
                </p>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image 
                    src="/images/map.jpg" 
                    alt="Carte du château" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4">
                  <Link 
                    href="https://maps.google.com" 
                    target="_blank" 
                    className="text-primary hover:underline"
                  >
                    Voir sur Google Maps →
                  </Link>
                </div>
              </div>
              
              {/* Transportation */}
              <div>
                <h3 className="font-serif text-2xl mb-4">Options de transport</h3>
                
                <h4 className="font-semibold text-lg mb-2">Depuis Paris</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li className="mb-2">En train : Prenez le TGV depuis la gare de Lyon à [Nearest Station]. Le trajet dure environ 2 heures.</li>
                  <li className="mb-2">En voiture : Le trajet depuis Paris est d'environ 3 heures via l'autoroute A6.</li>
                </ul>
                
                <h4 className="font-semibold text-lg mb-2">Depuis la gare</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li className="mb-2">Des services de taxi sont disponibles à la gare.</li>
                  <li className="mb-2">Nous organiserons un service de navette à des heures spécifiques (voir horaire ci-dessous).</li>
                </ul>
                
                <div className="p-4 bg-accent mt-4">
                  <h4 className="font-semibold mb-2">Horaire de la navette (vendredi) :</h4>
                  <ul className="list-disc pl-5">
                    <li>14:00 - Depuis [Station Name]</li>
                    <li>16:00 - Depuis [Station Name]</li>
                    <li>18:00 - Depuis [Station Name]</li>
                  </ul>
                  <p className="mt-2 text-sm italic">Veuillez indiquer vos besoins de transport dans le formulaire de réponse.</p>
                </div>
              </div>
            </div>
            
            {/* Carpooling */}
            <div className="bg-secondary text-white p-8 rounded-lg mb-12">
              <h3 className="font-serif text-2xl mb-4 text-center">Covoiturage</h3>
              <p className="mb-4 text-center">
                Pour réduire notre impact environnemental et faciliter les déplacements, nous encourageons le covoiturage.
              </p>
              <div className="text-center">
                <Link 
                  href="#rsvp" 
                  className="btn bg-white text-secondary border-white hover:bg-transparent hover:text-white"
                >
                  Enregistrez votre voiture ou trouvez un trajet
                </Link>
              </div>
            </div>
            
            {/* Accommodation */}
            <div className="mb-12">
              <h3 className="font-serif text-2xl mb-6 text-center">Hébergement</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-accent p-6">
                  <h4 className="font-semibold text-lg mb-2">Au château</h4>
                  <p className="mb-4">
                    Le château dispose de 65 lits pour les invités. L'hébergement au château sera attribué en fonction des groupes familiaux et de la distance parcourue.
                  </p>
                  <p className="text-sm">
                    Veuillez indiquer vos préférences d'hébergement dans le formulaire de réponse. Nous confirmerons vos détails d'hébergement avant [date].
                  </p>
                </div>
                
                <div className="bg-accent p-6">
                  <h4 className="font-semibold text-lg mb-2">Options à proximité</h4>
                  <p className="mb-4">
                    Pour les invités qui ne séjournent pas au château, nous avons négocié des tarifs spéciaux dans les hébergements suivants :
                  </p>
                  <ul className="list-disc pl-5">
                    <li className="mb-1">[Hotel Name 1] - 5km du lieu</li>
                    <li className="mb-1">[Hotel Name 2] - 8km du lieu</li>
                    <li className="mb-1">[B&B Name] - 3km du lieu</li>
                  </ul>
                  <p className="mt-2 text-sm italic">
                    Utilisez le code "WEDDING2025" lors de la réservation pour bénéficier d'un tarif spécial.
                  </p>
                </div>
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
            <div className="bg-white p-8 shadow-md mb-12">
              <h3 className="font-serif text-2xl mb-6 text-center">Code vestimentaire</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="relative h-48 mb-4">
                    <Image 
                      src="/images/friday-attire.jpg" 
                      alt="Tenue du vendredi" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-semibold mb-2">Vendredi</h4>
                  <p>Élégant décontracté</p>
                </div>
                
                <div className="text-center">
                  <div className="relative h-48 mb-4">
                    <Image 
                      src="/images/saturday-attire.jpg" 
                      alt="Tenue du samedi" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-semibold mb-2">Samedi</h4>
                  <p>Tenue formelle</p>
                </div>
                
                <div className="text-center">
                  <div className="relative h-48 mb-4">
                    <Image 
                      src="/images/sunday-attire.jpg" 
                      alt="Tenue du dimanche" 
                      fill
                      className="object-cover"
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
            
            {/* What to Bring */}
            <div className="bg-white p-8 shadow-md">
              <h3 className="font-serif text-2xl mb-6 text-center">Ce qu'il faut apporter</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">Essentiels</h4>
                  <ul className="list-disc pl-5 mb-4">
                    <li className="mb-2">Vêtements adaptés à la météo (vérifiez la prévision)</li>
                    <li className="mb-2">Chaussures confortables pour les terrains du château</li>
                    <li className="mb-2">Maillot de bain (pour ceux qui prévoient d'utiliser la piscine)</li>
                    <li className="mb-2">Produits de toilette personnels</li>
                    <li className="mb-2">Médicaments nécessaires</li>
                    <li className="mb-2">Chargeur de téléphone</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Articles suggérés</h4>
                  <ul className="list-disc pl-5 mb-4">
                    <li className="mb-2">Veste légère ou châle pour le soir</li>
                    <li className="mb-2">Crème solaire et lunettes de soleil</li>
                    <li className="mb-2">Appareil photo</li>
                    <li className="mb-2">Un livre ou des jeux pour les moments de loisir</li>
                    <li className="mb-2">Gourde réutilisable</li>
                  </ul>
                  
                  <div className="p-4 bg-accent mt-4">
                    <p className="text-sm">
                      <strong>Note :</strong> Les serviettes et les draps seront fournis pour les invités qui séjournent au château.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Activities & Amenities */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-center mb-12">Activités et équipements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* At the Château */}
              <div className="bg-accent p-6">
                <h3 className="font-serif text-xl mb-4">Au château</h3>
                <ul className="list-disc pl-5">
                  <li className="mb-2">Piscine</li>
                  <li className="mb-2">Promenades dans les jardins</li>
                  <li className="mb-2">Bibliothèque</li>
                  <li className="mb-2">Salle de jeux</li>
                </ul>
              </div>
              
              {/* Saturday Activities */}
              <div className="bg-accent p-6">
                <h3 className="font-serif text-xl mb-4">Samedi libre</h3>
                <p className="mb-4">
                  Samedi matin, nous avons organisé des activités optionnelles :
                </p>
                <ul className="list-disc pl-5">
                  <li className="mb-2">Visite guidée du château (10:00)</li>
                  <li className="mb-2">Dégustation de vin (11:30)</li>
                  <li className="mb-2">Déjeuner pique-nique (13:00)</li>
                </ul>
                <p className="text-sm mt-2">
                  Inscrivez-vous pour les activités dans le formulaire de réponse.
                </p>
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
                  Demandez-nous des recommandations !
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
                  <li className="mb-2">Dimanche : Déjeuner</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3">Arrivée vendredi</h4>
                <p>
                  Veuillez noter qu'aucun dîner formel ne sera servi vendredi. Nous vous recommandons de manger avant d'arriver ou d'apporter de la nourriture à consommer au château. Des rafraîchissements légers seront disponibles pendant la réunion de bienvenue.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-3">Régimes alimentaires</h4>
                <p className="mb-4">
                  Nous ferons de notre mieux pour accommoder les restrictions et allergies alimentaires. Veuillez indiquer toute exigence spéciale dans le formulaire de réponse.
                </p>
                <div className="text-center">
                  <Link 
                    href="#rsvp" 
                    className="btn bg-white text-secondary border-white hover:bg-transparent hover:text-white"
                  >
                    Soumettre vos exigences alimentaires
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* RSVP & Information Form */}
      <section id="rsvp" className="py-16 bg-accent">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-center mb-6">Formulaire de réponse et d'information</h2>
            <p className="text-center mb-8">
              Veuillez compléter ce formulaire avant [date limite] pour nous aider à finaliser les arrangements.
            </p>
            
            <div className="bg-white p-8 shadow-md">
              <div className="mb-8 text-center">
                <a 
                  href="https://forms.google.com/your-form-link" 
                  target="_blank" 
                  className="btn bg-secondary text-white border-secondary hover:bg-transparent hover:text-secondary"
                >
                  Ouvrir le formulaire Google
                </a>
              </div>
              
              <div className="text-sm">
                <h4 className="font-semibold mb-2">Le formulaire collectera des informations sur :</h4>
                <ul className="list-disc pl-5">
                  <li className="mb-1">Confirmation de présence</li>
                  <li className="mb-1">Arrangements de transport</li>
                  <li className="mb-1">Options de covoiturage (offrant/demandant des trajets)</li>
                  <li className="mb-1">Préférences d'hébergement</li>
                  <li className="mb-1">Restrictions alimentaires</li>
                  <li className="mb-1">Inscriptions aux activités</li>
                  <li className="mb-1">Exigences spéciales</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-center mb-12">Questions ?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center p-6 border border-gray-200">
                <h3 className="font-serif text-xl mb-4">Coordonnatrice de mariage</h3>
                <p className="mb-2">[Coordinator Name]</p>
                <p className="mb-2">[Phone Number]</p>
                <p className="mb-4">[Email Address]</p>
                <p className="text-sm italic">Pour les questions logistiques et la coordination le jour J</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200">
                <h3 className="font-serif text-xl mb-4">Contact du couple</h3>
                <p className="mb-2">[Your Names]</p>
                <p className="mb-2">[Phone Number]</p>
                <p className="mb-4">[Email Address]</p>
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