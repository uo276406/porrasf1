import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PorrasF1',
  description: 'An application to manage your F1 bets',
}

export default function RootLayout({
  children,
}) {

  
  return (
    <html lang="es">
      <body className={inter.className}>
        <header class="bg-gray-800 text-center text-white">
            <Navigation />
        </header>
        <div className="bg-gradient-to-br from-white to-blue-100">
          {children}
        </div>
        <footer class="bg-gray-800 text-center text-white">
          <Footer />
        </footer>
      </body>
    </html>
  )
}
