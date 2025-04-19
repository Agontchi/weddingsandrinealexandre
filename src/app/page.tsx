import Image from 'next/image'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import CountdownTimer from '@/app/components/CountdownTimer'

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
              <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-widest mb-2">Invision Events</h1>
              <p className="text-sm uppercase tracking-wider mb-0">Wedding Planning & Design</p>
            </div>
            
            <div className="mt-auto mb-16 text-white">
              <p className="uppercase tracking-widest text-xs md:text-sm mb-2">Scroll to begin</p>
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
              
              <button className="btn hover:bg-primary hover:text-white">
                D&eacute;couvrir nos horaires d&eacute;taill&eacute;s
              </button>
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
      
      {/* Testimonial Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto px-4 relative">
            <div className="testimonial-content text-center">
              <p className="italic font-serif text-base md:text-lg leading-relaxed mb-6">
                I don&apos;t even want to imagine what our wedding day would have looked like without Courtney Wolf and the Invision team. Even the week of the wedding I had minor ideas in my head, and Courtney&apos;s response to executing them was always &quot;Of Course!&quot; The day of the wedding we were not left out but not to worry about a single thing because we knew we were in such great hands and everything would be taken care of, and it was! Wedding planning can be stressful but Invision made it seamless and fun to plan. Courtney, genuinely helps if you go to work with Invision. Thank you Courtney and Invision Events for making May 5th 2018 a dream and the greatest day of our lives!!
              </p>
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
              <p className="italic font-serif text-base md:text-lg leading-relaxed mb-6">
                Pour toute question, n&apos;h&eacute;sitez pas &agrave; nous contacter &agrave; l&apos;adresse &quot;contact@alexsandrine2025.com&quot; ou par t&eacute;l&eacute;phone au &quot;06 00 00 00 00&quot;.
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