'use client';

import Link from 'next/link'
import Image from 'next/image'
import { Calendar } from "lucide-react"
import { useState } from 'react'
import CountdownTimer from '@/app/components/CountdownTimer'
import FAQ from '@/app/components/Faq';

const NavigationBar = () => (
  <nav className="sticky top-0 bg-white shadow-md z-50">
    <div className="container mx-auto px-4 py-4 flex justify-center space-x-6">
      <Link href="#rsvp" className="text-emerald-700 hover:text-emerald-900">RSVP</Link>
      <Link href="#agenda" className="text-emerald-700 hover:text-emerald-900">Agenda</Link>
      {/* <Link href="#accommodations" className="text-emerald-700 hover:text-emerald-900">Accommodations</Link> */}
      {/* <Link href="#travel" className="text-emerald-700 hover:text-emerald-900">Travel</Link> */}
      <Link href="#faq" className="text-emerald-700 hover:text-emerald-900">FAQ</Link>
    </div>
  </nav>
)

const AgendaItem = ({ date, title, time }: { date: string; title: string; time: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="flex items-center text-lg font-semibold mb-2">
      <Calendar className="mr-2 text-emerald-700" />
      {date}
    </h3>
    <p className="text-center font-medium">{title}</p>
    <p className="text-center text-gray-600">{time}</p>
  </div>
)

const Agenda = () => (
  <section id="agenda" className="my-12 px-4 max-w-6xl mx-auto">
    <h2 className="text-3xl font-serif mb-6 text-center">Agenda du Mariage</h2>
    <div className="grid md:grid-cols-3 gap-6">
      <AgendaItem
        date="Vendredi 8 Août 2025"
        title="Arrivé au Château"
        time="Heures exactes à confirmer"
      />
      <AgendaItem
        date="Samedi 9 Août 2025"
        title="Cérémonie, Réception & Party"
        time="Heures exactes à confirmer"
      />
      <AgendaItem
        date="Dimanche 10 Août 2025"
        title="Brunch"
        time="Heures exactes à confirmer"
      />
    </div>
  </section>
)

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 pr-12">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavigationBar />

      <div className="relative w-full h-screen">
        <Image
          src="/images/image_principale.jpg"
          alt="Alexandre & Sandrine vous invitent à la célébration de mariage en Bourgogne"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-4 text-center">Alexandre et Sandrine</h1>
          <p className="text-xl md:text-2xl mb-4 text-center">Au plaisir de célébrer ce beau moment avec vous</p>
          {/* <p className="text-xl md:text-2xl mb-8 text-center">Join us for our wedding celebration</p> */}
          <Link href="https://forms.gle/1RLgLjuV2FbgPs1h9" target="_blank">
            {/* <Button className="bg-white text-black hover:bg-gray-200">Confirmer la Presence</Button> */}
          </Link>
          <p className="text-lg mt-8 text-center">Le site web est en construction et aura plus de détails dans quelques semaines</p>
          <p className="text-lg mt-8 text-center">Utilisez Google Translate pour traduire dans la langue de votre choix</p>
        </div>
      </div>

      <CountdownTimer />
      <Agenda />
      <FAQ />
    </main>
  )
}
