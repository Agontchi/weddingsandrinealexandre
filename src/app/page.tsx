import { Button } from './components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">



      <h1 className="text-4xl font-serif mb-4">Sandrine & Alexandre</h1>

      <p className="text-xl mb-8">Rejoignez-nous pour notre célébration de mariage,</p>
      <p className="text-xl mb-8">Join us for our wedding celebration</p>

      <Link href="https://forms.gle/1RLgLjuV2FbgPs1h9" target="_blank">
        <Button>Confirmer la Presence</Button>
      </Link>

      <p className="text-xl mb-8">Le site web est en construction et aura plus d'information dans quelques semaines</p>
      <Image
        src="/images/image_principale.jpg"
        alt="Your Image"
        width={500}
        height={500}
        style={{ objectFit: "cover", filter: "blur(0px)" }}
      />

    </main>
  )
}