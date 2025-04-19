import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Invision Events | Wedding Planning & Design',
  description: 'Luxury wedding planning and event design services',
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