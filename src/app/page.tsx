import './page.sass'
import { Navegation } from '@/components/navegation/navegation'
import { HomePage } from '@/components/home/home'
import { SoftwareSkills } from '@/components/softwareSkills/softwareSkills'
import { ProjectsGitHub } from '@/components/projects/projectsGitHub'

export default function Home() {
  return (
    <main id="container">
      <Navegation />
      <HomePage />
      <SoftwareSkills />
      <ProjectsGitHub/>
    </main>
  )
}
