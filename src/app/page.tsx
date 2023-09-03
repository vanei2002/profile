import './page.sass'
import { Navegation } from '@/components/navegation/navegation'
import { HomePage } from '@/components/home/home'

export default function Home() {
  return (
    <main id="container">
      <Navegation />
      <HomePage />
    </main>
  )
}
