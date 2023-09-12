import './page.sass'
import { Navegation } from '@/components/navegation/navegation'
import { HomePage } from '@/components/home/home'
import { SoftwareSkills } from '@/components/softwareSkills/softwareSkills'

export default function Home() {
  return (
    <main id="container">
      <Navegation />
      <HomePage />
      <SoftwareSkills />
    </main>
  )
}
