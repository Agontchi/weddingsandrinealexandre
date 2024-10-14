import { Button } from './components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar } from "lucide-react"

const NavigationBar = () => (
  <nav className="sticky top-0 bg-white shadow-md z-50">
    <div className="container mx-auto px-4 py-4 flex justify-center space-x-6">
      <Link href="#rsvp" className="text-emerald-700 hover:text-emerald-900">RSVP</Link>
      <Link href="#agenda" className="text-emerald-700 hover:text-emerald-900">Agenda</Link>
      {/* <Link href="#accommodations" className="text-emerald-700 hover:text-emerald-900">Accommodations</Link> */}
      {/* <Link href="#travel" className="text-emerald-700 hover:text-emerald-900">Travel</Link> */}
      {/* <Link href="#faq" className="text-emerald-700 hover:text-emerald-900">FAQ</Link> */}
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
    <h2 className="text-3xl font-serif mb-6 text-center">Weekend Agenda</h2>
    <div className="grid md:grid-cols-3 gap-6">
      <AgendaItem
        date="Vendredi 8 Aout 2025 | Friday, August 8th, 2025 "
        title="Arrival & Dinner"
        time="TBD"
      />
      <AgendaItem
        date="Samedi 9 Aout 2025 | Saturday, August 9th, 2025"
        title="Ceremony & Reception"
        time="TBD"
      />
      <AgendaItem
        date="Dimanche 10 Aout 2025 |Sunday, August 10th, 2025"
        title="Brunch"
        time="TBD"
      />
    </div>
  </section>
)

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavigationBar />

      <div className="relative w-full h-screen">
        <Image
          src="/images/image_principale.jpg"
          alt="Wedding Couple"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-4 text-center">Sandrine & Alexandre</h1>
          <p className="text-xl md:text-2xl mb-4 text-center">Rejoignez-nous pour notre célébration de mariage,</p>
          <p className="text-xl md:text-2xl mb-8 text-center">Join us for our wedding celebration</p>
          <Link href="https://forms.gle/1RLgLjuV2FbgPs1h9" target="_blank">
            <Button className="bg-white text-black hover:bg-gray-200">Confirmer la Presence</Button>
          </Link>
          <p className="text-lg mt-8 text-center">Le site web est en construction et aura plus de détails dans quelques semaines</p>
        </div>
      </div>

      <Agenda />
    </main>
  )
}