import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['Roboto'] })

export const metadata = {
  title: 'Vegan Restaurant',
  description: '"Indulge in a delicious plant-based culinary experience at our Vegan Restaurant. Discover a delectable menu featuring a variety of innovative and mouthwatering dishes made exclusively from the finest vegan ingredients. Immerse yourself in a vibrant and eco-friendly ambiance while savoring our thoughtfully crafted meals that cater to both your taste buds and ethical choices. Join us for a truly remarkable vegan dining experience that celebrates health, sustainability, and exquisite flavors.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
