import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mariage Sandrine & Alexandre | Château de Percey',
  description: 'Toutes les informations pour le mariage de Sandrine & Alexandre au Château de Percey : programme, dress code, logistique et formulaire de réponse.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans text-primary bg-light">
        {children}
      </body>
    </html>
  )
}