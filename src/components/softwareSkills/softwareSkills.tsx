/* eslint-disable react/no-unescaped-entities */
'use client'
import { useEffect } from 'react'
import Aos from 'aos'
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import './softwareskills.sass'

import 'aos/dist/aos.css'

export const SoftwareSkills = () => {
  useEffect(() => {
    Aos.init()
    Prism.highlightAll()
  }, [])

  return (
    <section id="container-tecs">
      <h1>My Software Skills</h1>

      <div data-aos-offset="600" data-aos-duration="500" data-aos="fade-left">
        <pre>
          <code className="language-javascript code">
            {`// Habilidades em Desenvolvimento Web: const desenvolvimentoWeb:

            const desenvolvimentoWeb: string [ ] = [
                "Angular: Experiência em desenvolvimento com Angular.",
                "Next.js: Utilização do Next.js para aplicações web reativas.",
                "React.js: Construção de interfaces interativas com React.js.",
                "HTML/CSS: Desenvolvimento de interfaces responsivas usando HTML e CSS.",
                "Sass: Estilização avançada com Sass.",
                "Bootstrap: Criação de interfaces responsivas com Bootstrap.",
                "TypeScript (TS): Trabalho com TypeScript para tipagem estática.",
                "JavaScript (JS): Programação front-end e back-end em JavaScript."
            ];`}
          </code>
        </pre>
      </div>

      <div
        id="div-right"
        data-aos-offset="350"
        data-aos-duration="500"
        data-aos="fade-right"
      >
        <pre>
          <code className="language-javascript code">
            {`// Habilidades em Desenvolvimento Back-End:

            const desenvolvimentoBackend: string [ ] = [
                "Node.js: Desenvolvimento de servidores com Node.js.",
                "Express.js: Uso do Express.js para construir APIs.",
                "Nest.js: Conhecimento em desenvolvimento back-end com Nest.js.",
                "MongoDB: Uso do MongoDB como banco de dados NoSQL.",
                "PostgreSQL: Gerenciamento de dados em sistemas PostgreSQL.",

            ];`}
          </code>
        </pre>
      </div>

      <div data-aos-offset="300" data-aos-duration="500" data-aos="fade-left">
        <pre>
          <code className="language-javascript code">
            {`// Outras Habilidades

            const outrasHabilidades: string [ ] = [
                "GitHub: Contribuições em projetos de código aberto no GitHub.",
                "Figma: Design de interfaces de usuário com Figma.",
                "AWS: Implantação e gerenciamento de aplicativos em serviços AWS.",
            
            ];`}
          </code>
        </pre>
      </div>
    </section>
  )
}
