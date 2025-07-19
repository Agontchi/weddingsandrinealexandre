import Image from 'next/image'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import CountdownTimer from '@/app/components/CountdownTimer'
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image 
            src="/images/image_principale.jpg" 
            alt="Wedding couple embracing" 
            fill 
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        
        <div className="relative z-10 h-full">
          {/* Top Navigation */}
          <Navbar />
          
          {/* Hero Content */}
          <div className="flex flex-col items-center justify-center h-full pt-12 px-4 text-center">
            <div className="bg-white bg-opacity-95 p-8 md:p-12 logo-container max-w-md">
              <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-widest mb-2">Un Mariage au Château de Percey</h1>
              <p className="text-sm uppercase tracking-wider mb-0">8,9 et 10 août 2025</p>
            </div>
            
            <div className="mt-auto mb-16 text-white">
              <p className="uppercase tracking-widest text-xs md:text-sm mb-2">Faites défiler pour commencer</p>
              <div className="h-12 w-px bg-white mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Left image */}
            <div className="relative h-90 md:h-full">
              <Image 
                src="/images/chalet_avec_loutres.jpg" 
                alt="Chalet avec loutre" 
                fill
                className="object-cover"
              />
            </div>
            
            {/* Center content */}
            <div className="flex flex-col items-center justify-center p-8 md:p-12 border border-gray-200">
              <div className="mb-8">
                <h2 className="font-serif text-2xl text-center mb-2">
                  <span className="inline-block">A&amp;S</span>
                  <span className="inline-block mx-1"></span>
                </h2>
              </div>
              
              <h3 className="font-serif text-xl md:text-2xl uppercase tracking-wide text-center mb-4">
                Une union<br />
                Transatlantique
              </h3>
              
              <p className="text-center text-sm leading-relaxed mb-8">
              C&apos;est une immense joie que nous vous convions &agrave; partager ce moment unique et pr&eacute;cieux &agrave; nos c&ocirc;t&eacute;s nous serions ravis de vous compter parmi nous pour un week-end souvenirs inoubliable entour&eacute; de ceux qui nous aimons dans un lieu emprunt de charme et d&apos;histoire
              </p>
              
              <div className="text-center">
                <Link href="/ceremonie/preparations" legacyBehavior>
                  <a className="btn inline-block hover:bg-primary hover:text-white">
                    Comment se préparer au mariage ?
                  </a>
                </Link>
              </div>
            </div>
            
            {/* Right image */}
            <div className="relative h-96 md:h-full">
              <Image 
                src="/images/rest_loutres.jpeg" 
                alt="Wedding lounge area" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Countdown Timer */}
      <CountdownTimer />
      
      {/* Ceremony Links Section */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-8 text-primary">Informations sur la cérémonie</h2>
            <p className="text-lg mb-12 text-gray-700">Découvrez tous les détails pour notre grand jour</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Preparations Link */}
              <Link href="/ceremonie/preparations" className="group">
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-4">💍</div>
                  <h3 className="font-serif text-xl mb-3 text-primary group-hover:text-secondary transition-colors">Préparations</h3>
                  <p className="text-gray-600">Tout ce qu'il faut savoir pour se préparer à notre mariage</p>
                </div>
              </Link>
              
              {/* Plans Link */}
              <Link href="/ceremonie/plans" className="group">
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-4">📋</div>
                  <h3 className="font-serif text-xl mb-3 text-primary group-hover:text-secondary transition-colors">Plans & Détails</h3>
                  <p className="text-gray-600">Programme du week-end, plans des tables et règles importantes</p>
                </div>
              </Link>
              
              {/* Questions Link */}
              <Link href="/ceremonie/questions" className="group">
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-4">❓</div>
                  <h3 className="font-serif text-xl mb-3 text-primary group-hover:text-secondary transition-colors">Questions</h3>
                  <p className="text-gray-600">Réponses aux questions fréquemment posées</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Poem Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto px-4 relative">
            <div className="testimonial-content text-center">
              <blockquote lang="fr" className="poem-text">
                <p className="italic font-serif text-lg md:text-xl leading-relaxed whitespace-pre-line text-white mb-6">
                  Sous la plume d&apos;un Pouchkine renaissant,<br/>
                  L&apos;union sacrée, telle une icône d&apos;or,<br/>
                  Brille dans l&apos;église aux coupoles d&apos;argent.<br/>
                  Deux âmes s&apos;unissent en un seul accord.
                </p>
                <p className="italic font-serif text-lg md:text-xl leading-relaxed whitespace-pre-line text-white mb-6">
                  Les couronnes orthodoxes sur leurs fronts,<br/>
                  Symboles d&apos;un amour pur et éternel,<br/>
                  Tandis que l&apos;encens s&apos;élève en volutes blondes,<br/>
                  Et que les chœurs chantent un hymne solennel.
                </p>
                <p className="italic font-serif text-lg md:text-xl leading-relaxed whitespace-pre-line text-white mb-6">
                  Comme le tsar et la tsarine d&apos;antan,<br/>
                  Ils se tiennent, mains jointes, devant l&apos;autel,<br/>
                  Leur amour, plus fort que le temps qui s&apos;étend,<br/>
                  Est béni par le prêtre, gardien du ciel.
                </p>
                <p className="italic font-serif text-lg md:text-xl leading-relaxed whitespace-pre-line text-white mb-0">
                  Ainsi, dans la tradition des anciens,<br/>
                  Deux cœurs deviennent un, liés à jamais,<br/>
                  Par les rites sacrés des orthodoxiens,<br/>
                  Un mariage, comme un poème parfait.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto px-4 relative">
            <div className="testimonial-content text-center">
              <p className="italic font-serif text-base md:text-lg leading-relaxed mb-6">
                Nous sommes ravis de vous accueillir &agrave; notre mariage et esp&eacute;rons que vous passerez un moment inoubliable en notre compagnie. C&apos;est un honneur de partager ce jour sp&eacute;cial avec vous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}