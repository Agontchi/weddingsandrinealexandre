import React from 'react';
import { Heart, Sparkles, Brush, AlertCircle } from 'lucide-react';

const GuideDressCode = () => {
  return (
    <section id="dress-code" className="py-16 bg-accent">
      <div className="container-custom">
        <h2 className="section-title mb-6">Guide Vestimentaire du Samedi</h2>
        
        <div className="flex justify-center items-center gap-2 mb-10">
          <Heart className="text-secondary" size={20} />
          <h3 className="font-serif text-2xl">Romantique & Chic</h3>
          <Heart className="text-secondary" size={20} />
        </div>
        
        <p className="text-center max-w-3xl mx-auto mb-10">
          Chers invités, nous sommes ravis de vous accueillir pour notre célébration au magnifique Château de Percey. 
          Pour compléter l'élégance romantique de notre lieu et créer une atmosphère harmonieuse, 
          nous vous prions de bien vouloir respecter les consignes vestimentaires suivantes :
        </p>
        
        {/* Elegant divider */}
        <div className="flex justify-center mb-12">
          <div className="w-24 h-px bg-secondary"></div>
        </div>
        
        {/* Two columns layout */}
        <div className="bg-light p-8 shadow-md max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Men's attire - Left column */}
            <div className="dress-code-column">
              <div className="flex items-center mb-6">
                <Sparkles className="text-secondary mr-3" size={20} />
                <h3 className="font-serif text-xl">Pour les Messieurs</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="font-sans uppercase tracking-widest text-xs mb-3 text-secondary">Recommandé :</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-2"></span>
                    <span>Costumes de couleurs claires (beige, gris clair, bleu pastel, rose poudré)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-2"></span>
                    <span>Chemises crème ou de couleurs pâles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-2"></span>
                    <span>Costumes en lin ou costumes légers et bien taillés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-2"></span>
                    <span>Mocassins élégants, chaussures oxford ou chaussures habillées</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-2"></span>
                    <span>Accessoires subtils (pochettes, pinces à cravate, boutons de manchette)</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-sans uppercase tracking-widest text-xs mb-3 text-secondary">Merci d'éviter :</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-2"></span>
                    <span>Tenues décontractées (jeans, t-shirts, sweats à capuche, baskets)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-2"></span>
                    <span>Imprimés animaliers ou motifs trop prononcés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-2"></span>
                    <span>Tenues western/cowboy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-2"></span>
                    <span>Chaussures de sport</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-2"></span>
                    <span>Tenues entièrement noires (trop sobres pour notre célébration)</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Women's attire - Right column */}
            <div className="dress-code-column">
              <div className="flex items-center mb-6">
                <Sparkles className="text-secondary mr-3" size={20} />
                <h3 className="font-serif text-xl">Pour les Dames</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="font-sans uppercase tracking-widest text-xs mb-3 text-secondary">Recommandé :</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-2"></span>
                    <span>Robes de cocktail élégantes aux couleurs claires ou vives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-2"></span>
                    <span>Robes longues fluides aux teintes pastel ou vibrantes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-2"></span>
                    <span>Combinaisons sophistiquées aux couleurs douces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-2"></span>
                    <span>Chiffon, soie ou autres tissus fins</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-2"></span>
                    <span>Motifs floraux délicats (pas d'imprimés animaliers)</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-sans uppercase tracking-widest text-xs mb-3 text-secondary">Merci d'éviter :</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-2"></span>
                    <span>Tenues entièrement blanches (réservées à la mariée)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-2"></span>
                    <span>Tenues formelles entièrement noires</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-2"></span>
                    <span>Imprimés animaliers ou motifs trop prononcés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-2"></span>
                    <span>Tenues décontractées (jeans, t-shirts, sweats à capuche)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-2"></span>
                    <span>Chaussures de sport ou baskets décontractées</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Notes section */}
          <div className="mt-6">
            <div className="bg-accent p-6 border-l-4 border-secondary">
              <div className="flex items-start">
                <AlertCircle className="text-secondary mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-serif text-lg mb-2">Notes importantes</p>
                  <ul className="space-y-2">
                    <li>
                      Les chemises blanches sont parfaitement acceptables pour les messieurs lorsqu'elles sont associées à un costume de couleur.
                    </li>
                    <li>
                      Les costumes noirs sont déconseillés car ils donnent une impression trop formelle/sobre, mais les costumes bleu marine sont les bienvenus.
                    </li>
                    <li>
                      Les tenues entièrement blanches sont réservées à la mariée.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Color palette section */}
          <div className="mt-10">
            <div className="flex items-center justify-center mb-6">
              <Brush className="text-secondary mr-3" size={20} />
              <h3 className="font-serif text-xl">Palette de Couleurs Suggérée</h3>
            </div>
            
            <p className="text-center mb-6">
              Nous encourageons nos invités à adopter une palette de couleurs harmonieuse :
            </p>
            
            <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
              <div className="space-y-2">
                <h4 className="font-sans uppercase tracking-widest text-xs text-center text-secondary">Pastels</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-[#F8D7DB]" title="Rose poudré"></div>
                  <div className="w-12 h-12 rounded-full bg-[#CAE5F5]" title="Bleu ciel"></div>
                  <div className="w-12 h-12 rounded-full bg-[#D4EDDA]" title="Vert menthe"></div>
                  <div className="w-12 h-12 rounded-full bg-[#E4D7F5]" title="Lavande"></div>
                </div>
                <p className="text-center text-xs">Rose poudré, bleu ciel, vert menthe, lavande</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-sans uppercase tracking-widest text-xs text-center text-secondary">Neutres doux</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-[#F9F6EE] border border-gray-200" title="Crème"></div>
                  <div className="w-12 h-12 rounded-full bg-[#F5F5DC]" title="Beige"></div>
                  <div className="w-12 h-12 rounded-full bg-[#F7E7CE]" title="Champagne"></div>
                  <div className="w-12 h-12 rounded-full bg-[#E5E5E5]" title="Gris clair"></div>
                </div>
                <p className="text-center text-xs">Crème, beige, champagne, gris clair</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-sans uppercase tracking-widest text-xs text-center text-secondary">Teintes vives</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-[#FF7F50]" title="Corail"></div>
                  <div className="w-12 h-12 rounded-full bg-[#CCCCFF]" title="Pervenche"></div>
                  <div className="w-12 h-12 rounded-full bg-[#F9D949]" title="Jaune doré"></div>
                  <div className="w-12 h-12 rounded-full bg-[#9CAF88]" title="Sauge"></div>
                </div>
                <p className="text-center text-xs">Corail, pervenche, jaune doré, sauge</p>
              </div>
            </div>
            
            <div className="bg-accent p-4 text-center">
              <p>Veuillez éviter les verts forêt foncés, les bleus marine, et les noirs, ainsi que les néons trop vifs ou les métallisés flashy. Cela dit si votre tenue de cœur se trouve dans ces nuances foncées, l'essentiel, reste votre présence à nos côtés</p>
            </div>
          </div>
          
          {/* Closing note */}
          <div className="mt-10 text-center">
            <p className="italic mb-4">
              Le cadre du Château de Percey appelle à une tenue élégante et raffinée qui complète son ambiance romantique. 
              Nous vous remercions de nous aider à créer une célébration belle et cohérente grâce à vos choix vestimentaires attentionnés.
            </p>
            
            <div className="mt-6">
              <p className="font-serif">Avec amour et gratitude,</p>
              <p className="font-serif italic">Sandrine & Alexandre</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideDressCode;