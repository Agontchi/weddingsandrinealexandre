import React from 'react'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

export default function QuestionsPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Navigation */}
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-secondary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl mb-6">Questions fréquentes</h1>
            <p className="text-lg mb-8">Toutes les réponses à vos questions sur notre week-end de mariage</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">

            {/* Gifts Questions */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl mb-8 text-center">Cadeaux</h2>
              
              <div className="space-y-6">
                <div className="bg-primary text-white p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-3">Que pouvons-nous vous offrir comme cadeau ?</h3>
                  <p className="mb-4">
                    Comme vous le savez peut-être, nous vivons à Montréal — ce qui rend les valises (et les retours !) un peu compliqués…
                  </p>
                  <p className="mb-4">
                    Nous vous demandons simplement d'éviter les objets physiques, 
                    car nous ne pourrons malheureusement pas les emporter avec nous.
                  </p>
                  <p>
                    Une cagnotte sera mise à disposition. 
                    Elle nous aidera à réaliser un projet qui nous tient à cœur (comme notre voyage de noces, ou notre futur chez-nous).
                    
                  </p>
                  <p>
                  Nous vous remercions pour votre générosité! 
                  </p>
                </div>
              </div>
            </div>

            
            {/* Logistics Questions */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl mb-8 text-center">Logistique et transport</h2>
              
              <div className="space-y-6">
                <div className="bg-accent p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-3">Comment se rendre au Château de Percey ?</h3>
                  <p className="mb-4">
                    Le château se trouve à 1 Rue nationale, 89360 Percey, France. Plusieurs options s&apos;offrent à vous :
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>En voiture :</strong> Depuis Paris (169 km, 2h15), Lyon (309 km, 3h15), ou Dijon (57 km, 1h30)</li>
                    <li><strong>En train :</strong> Gare de Saint-Florentin-Vergigny puis 10 minutes en voiture</li>
                    <li><strong>Aéroport :</strong> Roissy Charles de Gaulle (191 km, 2h15 en voiture)</li>
                  </ul>
                </div>

                <div className="bg-accent p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-3">Y a-t-il des possibilités de covoiturage ?</h3>
                  <p>
                    Nous encourageons le covoiturage pour réduire notre impact environnemental. 
                    Veuillez indiquer dans le formulaire de réponse si vous pouvez offrir des places ou si vous cherchez un trajet.
                  </p>
                </div>

                <div className="bg-accent p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-3">Comment se rendre de l&apos;église au château le samedi ?</h3>
                  <p>
                    L&apos;église de Saint-Florentin se trouve à 10-15 minutes en voiture du château. 
                    Nous avons le nombre de voitures nécessaire pour transporter tous les invités.
                  </p>
                </div>
              </div>
            </div>

            {/* Accommodation Questions */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl mb-8 text-center">Hébergement</h2>
              
              <div className="space-y-6">
                <div className="bg-accent p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-3">Comment sont attribuées les chambres au château ?</h3>
                  <p>
                    Le château dispose de 65 lits répartis dans plusieurs chambres. L&apos;attribution se fait en fonction des groupes familiaux 
                    et selon le principe &quot;premier arrivé, premier servi&quot; lors des réponses aux formulaires. 
                    La plupart des chambres sont partagées. Le plan des chambres sera disponible sur la page plans.
                  </p>
                </div>

                <div className="bg-accent p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-3">Que fournit le château ?</h3>
                  <p className="mb-3">Le château met à disposition :</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Draps, taies d&apos;oreiller et serviettes de toilette</li>
                    <li>Sèche-cheveux dans chaque chambre</li>
                    <li>Fer à repasser et tables à repasser</li>
                    <li>Produits d'accueil de base (savon, shampoing)</li>
                    <li>Wifi gratuit</li>
                  </ul>
                </div>

                <div className="bg-accent p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-3">Que dois-je apporter obligatoirement ?</h3>
                  <p className="mb-3">N&apos;oubliez pas d&apos;apporter :</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Maillots de bain et serviettes de piscine</li>
                    <li>Votre trousse de toilette complète</li>
                    <li>Médicaments personnels</li>
                    <li>Produits de beauté et coiffure</li>
                    <li>Chargeurs pour vos appareils électroniques</li>
                  </ul>
                  <Link href="/ceremonie/preparations#guide-bagages" className="inline-block mt-3 text-primary hover:underline">
                    Voir le guide des bagages →
                  </Link>
                </div>
              </div>
            </div>

            {/* Schedule Questions */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl mb-8 text-center">Programme du week-end</h2>
              
              <div className="space-y-6">
                <div className="bg-accent p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-3">Y a-t-il un repas prévu le vendredi soir ?</h3>
                  <p>
                    <strong>Non, aucun repas n&apos;est servi le vendredi soir.</strong> Nous vous recommandons de manger avant votre arrivée. 
                    Vous êtes invités à apporter de la nourriture à consommer au château si vous le souhaitez. 
                    Si vous voulez trinquer, n&apos;hésitez pas à apporter votre propre alcool ! 🍷
                  </p>
                </div>

                <div className="bg-accent p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-3">À quelle heure commence la cérémonie le samedi ?</h3>
                  <p>
                    La cérémonie religieuse commence à 14h30 à l&apos;église de Saint-Florentin. 
                    Nous vous recommandons d&apos;arriver avant 14h00 et partir vers 13h30 pour être installés à temps. 
                    Prévoyez du temps pour le trajet depuis le château (10-15 minutes en voiture).
                  </p>
                </div>

                <div className="bg-accent p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-3">Puis-je prendre des photos pendant la cérémonie ?</h3>
                  <p>
                    <strong>Non, nous vous demandons de ne pas apporter d&apos;appareil photo pendant la cérémonie.</strong> 
                    Notre photographe professionnel sera présent pour immortaliser ce moment. 
                    Nous souhaitons que vous viviez pleinement cet instant avec nous ! 📸
                  </p>
                </div>

                <div className="bg-accent p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-3">Jusqu'à quelle heure puis-je rester le dimanche ?</h3>
                  <p>
                    Vous pouvez rester au château jusqu'à 16h00 le dimanche. 
                    Le brunch sera servi de 10h00 à 12h00, suivi des au revoir jusqu'au départ.
                  </p>
                </div>
              </div>
            </div>

            {/* Dress Code Questions */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl mb-8 text-center">Tenue vestimentaire</h2>
              
              <div className="space-y-6">
                <div className="bg-accent p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-3">Quel est le dress code pour le mariage ?</h3>
                  <p>
                    Pour plus de détails sur la tenue vestimentaire recommandée, consultez la section dress code 
                    sur notre page de préparations. Nous recommandons une tenue élégante et confortable 
                    adaptée à une célébration en extérieur et en intérieur.
                  </p>
                  <Link href="/ceremonie/preparations#dresscode" className="inline-block mt-3 text-primary hover:underline">
                    Voir le guide dress code →
                  </Link>
                </div>
              </div>
            </div>

            
            {/* Activities Questions */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl mb-8 text-center">Activités et équipements</h2>
              
              <div className="space-y-6">
                <div className="bg-accent p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-3">Quelles activités sont disponibles au château ?</h3>
                  <p className="mb-3">Le château dispose de plusieurs équipements :</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Piscine extérieure</li>
                    <li>Jardins pour se promener</li>
                    <li>Espaces de détente</li>
                    <li>Salle de réception (l'orangerie)</li>
                  </ul>
                  <p className="mt-3">
                    Le samedi matin, nous vous recommandons de visiter Chablis et les environs si vous le souhaitez.
                  </p>
                </div>

                <div className="bg-accent p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-3">Y a-t-il un déjeuner prévu le samedi ?</h3>
                  <p>
                    Un petit déjeuner français sera fourni (café, thé, croissants, pain au chocolat). 
                    Si vous êtes de grands mangeurs, nous vous invitons à déjeuner dans les environs avant la cérémonie.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Questions */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl mb-8 text-center">Contact et questions supplémentaires</h2>
              
              <div className="space-y-6">
                <div className="bg-secondary text-white p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-3">J&apos;ai une question qui n&apos;est pas listée ici</h3>
                  <p className="mb-4">
                    N&apos;hésitez pas à nous contacter directement si vous avez des questions spécifiques 
                    ou des besoins particuliers concernant votre séjour.
                  </p>
                  <p>
                    Vous pouvez également consulter nos autres pages pour plus d'informations détaillées :
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 mt-4">
                    <Link href="/ceremonie/preparations" className="btn bg-white text-secondary border-white hover:bg-transparent hover:text-white">
                      Guide de préparation
                    </Link>
                    <Link href="/ceremonie/plans" className="btn border-white text-white hover:bg-white hover:text-secondary">
                      Plans et détails
                    </Link>
                  </div>
                </div>
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
