import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo */}
          <div className="flex justify-center md:justify-start items-center">
            <div className="relative w-32 h-32 border border-gray-200 rounded-full flex items-center justify-center">
              <div className="absolute inset-2 rounded-full border border-gray-100 flex items-center justify-center">
                <span className="font-serif text-2xl">A&S</span>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="text-center md:text-left">
            <h3 className="uppercase tracking-widest text-sm font-sans mb-6">Navigation</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Link href="/pages/notre-histoire" className="block text-sm mb-3 uppercase hover:text-gray-500">Notre Histoire</Link>
                <Link href="/pages/nos-voeux" className="block text-sm mb-3 uppercase hover:text-gray-500">Nos Voeux</Link>
              </div>
              <div>
                <Link href="/ceremonie/preparations" className="block text-sm mb-3 uppercase hover:text-gray-500">Préparations</Link>
                <Link href="/ceremonie/plans" className="block text-sm mb-3 uppercase hover:text-gray-500">Plans</Link>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/contact" className="block text-sm mb-2 uppercase hover:text-gray-500">Questions</Link>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div>
            <div className="grid grid-cols-3 gap-2">
              {/* {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="relative aspect-square">
                  <Image 
                    src={`/images/gallery-${num}.jpg`} 
                    alt={`Gallery image ${num}`} 
                    fill
                    className="object-cover"
                  />
                </div>
              ))} */}
            </div>
            
            {/* Social Icons */}
            {/* <div className="flex justify-center mt-6 space-x-4">
              <a href="https://facebook.com" className="text-gray-600 hover:text-primary">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="https://instagram.com" className="text-gray-600 hover:text-primary">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                </svg>
              </a>
              <a href="https://pinterest.com" className="text-gray-600 hover:text-primary">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.217-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"></path>
                </svg>
              </a>
            </div> */}
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center mt-12 text-xs text-gray-500">
          <p>©Alexandre et Sandrine 2025</p>
        </div>
      </div>
    </footer>
  )
}