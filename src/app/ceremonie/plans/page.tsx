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
            <h1 className="font-serif text-3xl md:text-5xl mb-6">Plans et détails du week-end</h1>
            <p className="text-lg mb-8">Informations importantes pour notre célébration au Château de Percey</p>
            
            {/* Structured Navigation */}
            <div className="mt-8">
              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                  {/* Overview */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h3 className="font-serif text-lg mb-3 text-center">Vue d'ensemble</h3>
                    <div className="space-y-2">
                      <Link href="#schedule" className="block text-sm hover:text-accent transition-colors">
                        📅 Calendrier complet
                      </Link>
                    </div>
                  </div>
                  
                  {/* Friday */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h3 className="font-serif text-lg mb-3 text-center">Vendredi 8 août</h3>
                    <div className="space-y-2">
                      <Link href="#vendredi" className="block text-sm hover:text-accent transition-colors">
                        🍾 Arrivée & Accueil
                      </Link>
                      <Link href="#chambres" className="block text-sm hover:text-accent transition-colors">
                        🏰 Plan des chambres
                      </Link>
                    </div>
                  </div>
                  
                  {/* Saturday */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h3 className="font-serif text-lg mb-3 text-center">Samedi 9 août</h3>
                    <div className="space-y-2">
                      <Link href="#samedi" className="block text-sm hover:text-accent transition-colors">
                        💒 Cérémonie & Fête
                      </Link>
                      <Link href="#plansdetable" className="block text-sm hover:text-accent transition-colors">
                        🍽️ Plan des tables
                      </Link>
                    </div>
                  </div>
                  
                  {/* Sunday & Rules */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h3 className="font-serif text-lg mb-3 text-center">Dimanche & Infos</h3>
                    <div className="space-y-2">
                      <Link href="#dimanche" className="block text-sm hover:text-accent transition-colors">
                        🥐 Brunch & Départ
                      </Link>
                      <Link href="#regles" className="block text-sm hover:text-accent transition-colors">
                        📋 Règles importantes
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile Navigation */}
              <div className="md:hidden">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h3 className="font-serif text-lg mb-4 text-center">Navigation rapide</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="#schedule" className="flex items-center justify-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                      <span className="text-sm text-center">
                        📅<br />Calendrier
                      </span>
                    </Link>
                    <Link href="#vendredi" className="flex items-center justify-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                      <span className="text-sm text-center">
                        🍾<br />Vendredi
                      </span>
                    </Link>
                    <Link href="#chambres" className="flex items-center justify-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                      <span className="text-sm text-center">
                        🏰<br />Chambres
                      </span>
                    </Link>
                    <Link href="#samedi" className="flex items-center justify-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                      <span className="text-sm text-center">
                        💒<br />Samedi
                      </span>
                    </Link>
                    <Link href="#plansdetable" className="flex items-center justify-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                      <span className="text-sm text-center">
                        🍽️<br />Tables
                      </span>
                    </Link>
                    <Link href="#dimanche" className="flex items-center justify-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                      <span className="text-sm text-center">
                        🥐<br />Dimanche
                      </span>
                    </Link>
                    <Link href="#regles" className="flex items-center justify-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                      <span className="text-sm text-center">
                        📋<br />Règles
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
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
                    <p className="font-semibold text-xl mb-2">Arrivée et Accueil à L&apos;Église de Saint Florentin</p>
                    <p>Arrivez en avance, donc prévoyez un peu de temps pour vous y rendre</p>
                  </div>
                </div>

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
                                {/* <a 
                                  href="/ceremonie/rsvp" 
                                  className="btn bg-secondary text-white border-secondary hover:bg-transparent hover:text-secondary"
                                >
                                  Trouvez un lift
                                </a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

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
                    <p>Jusqu&apos;au bout de la nuit !</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 shadow-md mt-12" id="plansdetable">
              <h3 className="font-serif text-2xl mb-6 text-center">Plan de table</h3>
              <p className="text-center mb-6">
                Trouvez votre place pour le dîner en entrant votre nom ci-dessous.
              </p>
              
              <SeatingPlan/>
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