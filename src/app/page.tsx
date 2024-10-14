import { Button } from './components/ui/button'

export default function Home() {

  const handleButtonClick = () => {
    window.open('https://forms.gle/1RLgLjuV2FbgPs1h9', '_blank');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-serif mb-4">Sandrine & Alexandre</h1>
      <p className="text-xl mb-8">Rejoignez-nous pour notre célébration de mariage,</p>
      <p className="text-xl mb-8">Join us for our wedding celebration</p>
      <Button onClick={handleButtonClick}>RSVP Now</Button>
    </main>
  )
}
