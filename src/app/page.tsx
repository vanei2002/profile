import './page.sass'
import { HomePage } from '@/components/home/home'
import { SoftwareSkills } from '@/components/softwareSkills/softwareSkills'
import { ProjectsGitHub } from '@/components/projects/projectsGitHub'

export default function Home() {
  return (
    <main id="container">
      <HomePage />
      <SoftwareSkills />
      <ProjectsGitHub />
    </main>
  )
}
