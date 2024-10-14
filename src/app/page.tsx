import { Button } from './components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-serif mb-4">Sandrine & Alexandre</h1>
      <p className="text-xl mb-8">Join us for our wedding celebration</p>
      <Button>RSVP Now</Button>
    </main>
  )
}