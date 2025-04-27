'use client'

import React, { useEffect } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import Script from 'next/script'

// Define the type for the window.Tally object
declare global {
  interface Window {
    Tally: {
      loadEmbeds: () => void;
    }
  }
}

export default function RSVPPage() {
  useEffect(() => {
    // Load all embeds on the page
    if (typeof window !== 'undefined' && window.Tally) {
      window.Tally.loadEmbeds();
    }
  }, []);

  return (
    <main className="min-h-screen bg-light">
      {/* Navigation */}
      <Navbar />
      
      {/* Header Section */}
      {/* <section className="pt-32 pb-16 bg-secondary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl mb-6">Répondez à notre invitation</h1>
            <p className="text-lg mb-8">Nous avons hâte de célébrer ce moment spécial avec vous</p>
          </div>
        </div>
      </section> */}
      
      {/* Tally Form Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <iframe 
                data-tally-src="https://tally.so/embed/wMGka8?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                loading="lazy" 
                width="100%" 
                height="761" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0} 
                title="Logistique et Alimentation"
                onLoad={() => {
                  if (typeof window !== 'undefined' && window.Tally) {
                    window.Tally.loadEmbeds();
                  }
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      
      {/* Tally Script */}
      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
    </main>
  )
}
