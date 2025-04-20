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
            <div className="flex justify-center">
              <Link href="#rsvp" className="btn bg-white text-secondary border-white hover:bg-transparent hover:text-white mx-2">
                Répondez maintenant
              </Link>
              <Link href="#dresscode" className="btn border-white text-white hover:bg-white hover:text-secondary mx-2">
                Voir le dress code
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
                  <p className="font-semibold mb-1">16:00 - 20:00</p>
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
                  
                  <p className="font-semibold mb-1">13:45 - 15:00</p>
                  <p className="mb-4">Cérémonie à l&apos;église de Saint-Florentin</p>
                  
                  <p className="font-semibold mb-1">17:00 - 19:00</p>
                  <p className="mb-4">Cocktail</p>
                  
                  <p className="font-semibold mb-1">19:00 - 04:00</p>
                  <p className="mb-4">Dîner et Fête</p>
                </div>
              </div>
              
              {/* Sunday */}
              <div className="bg-white p-8 shadow-md">
                <h3 className="font-serif text-2xl mb-4 text-center">Dimanche</h3>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold mb-1">09:00 - 13:00</p>
                  <p className="mb-4">Brunch offert au château</p>
                  
                  <p className="font-semibold mb-1">13:00 - 16:00</p>
                  <p className="mb-4">Départ</p>
                  
                  <div className="mt-6 p-4 bg-accent text-sm">
                    <p>Vous pouvez rester au château jusqu&apos;au 16h00.</p>
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
                    Le château dispose de 65 lits pour les invités. L&apos;hébergement au château sera attribué en fonction des groupes familiaux et de la distance parcourue.
                  </p>
                  <p className="text-sm">
                    Veuillez indiquer vos préférences d&apos;hébergement dans le formulaire de réponse. Nous confirmerons vos détails d&apos;hébergement avant [date].
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
                    <li className="mb-1">[B&amp;B Name] - 3km du lieu</li>
                  </ul>
                  <p className="mt-2 text-sm italic">
                    Utilisez le code &quot;WEDDING2025&quot; lors de la réservation pour bénéficier d&apos;un tarif spécial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Transport vers l'église */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 h-full">
              <div className="relative h-80 md:h-full min-h-[300px] rounded-lg overflow-hidden">
                <Image 
                  src="/images/trajet_chateau_eglise.png" 
                  alt="Carte du trajet Château → Église" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <Link
                href="https://maps.app.goo.gl/aGwQVFPZ5KWnHaTy5"
                target="_blank"
                className="text-primary hover:underline mb-4"
              >
                Itinéraire Château → Église (Google Maps)
              </Link>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="font-serif text-3xl text-center md:text-left mb-8">Transport du château à l&apos;église</h2>
              <p className="mb-4 text-center md:text-left">
                La cérémonie religieuse aura lieu à l&apos;église de Saint-Florentin&nbsp;:
                <br />
                <strong>Place Louis Dubost, 89600 Saint-Florentin, France</strong>
              </p>

              <p className="mb-4">
                L&apos;utilisation de votre propre voiture est fortement conseillée pour vous rendre à l&apos;église depuis le château. Si vous ne venez pas en voiture et que vous ne savez pas comment vous rendre à l&apos;église, merci de nous le faire savoir en bas du formulaire de réponse afin que nous puissions vous assigner une voiture.
              </p>
              <div className="p-4 bg-accent text-sm rounded mb-4">
                <p className="font-semibold mb-2">Important&nbsp;:</p>
                <p>Le trajet entre le château et l&apos;église dure environ 10-15 minutes en voiture. Merci d&apos;organiser votre déplacement à l&apos;avance pour arriver à l&apos;heure à la cérémonie. Visez 13h45 pour être assis dans l&apos;église.</p>
              </div>
              <div className="text-center md:text-left mb-8">
                <a 
                  href="#rsvp" 
                  className="btn bg-secondary text-white border-secondary hover:bg-transparent hover:text-secondary"
                >
                  Trouvez un lift
                </a>
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
            <div className="bg-white p-8 shadow-md">
              <h3 className="font-serif text-2xl mb-6 text-center">Ce qu&apos;il faut apporter</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">Essentiels</h4>
                  <ul className="list-disc pl-5 mb-4">
                    <li className="mb-2">Vêtements adaptés à la météo (vérifiez la prévision)</li>
                    <li className="mb-2">Chaussures confortables pour les terrains du château</li>
                    <li className="mb-2">Maillot de bain (pour ceux qui prévoient d&apos;utiliser la piscine)</li>
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
                  <li className="mb-2">Pétanque</li>
                  <li className="mb-2">Faire coucou à Margeritte et Clementine</li>
                </ul>
              </div>
              
              {/* Saturday Activities */}
              <div className="bg-accent p-6">
                <h3 className="font-serif text-xl mb-4">Samedi libre</h3>
                <p className="mb-4">
                  Samedi matin, vous pouvez visiter la région de Chablis:
                </p>
                <ul className="list-disc pl-5">
                  <li className="mb-1">Petit déjeuner au château (10:00)</li>
                  <li className="mb-1">Dégustation de vin (11:30)</li>
                  <li className="mb-1">Préparations à la cérémonie (12:30)</li>
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
              Un petit déjeuner est offert avec croissants, pains au chocolat et œufs que vous pourrez préparer vous-même dans la cuisine du château.
              Si vous avez un grand appétit, nous vous invitons à amener votre propre nourriture (vous pourrez la stocker dans le frigo) ou à aller manger dans les environs.
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
            <h2 className="font-serif text-3xl text-center mb-6">Formulaire de réponse et d&apos;information</h2>
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
                  <li className="mb-1">Arrangements de transport</li>
                  <li className="mb-1">Options de covoiturage (offrant/demandant des trajets)</li>
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