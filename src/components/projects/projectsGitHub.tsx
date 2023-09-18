import './projectsgithub.sass'

export const ProjectsGitHub = () => {
  //   const arrayLinks: string[] = [
  //     'https://mata-mosquito-pink.vercel.app',
  //     'https://spotify-cs5rdz5za-vanei2002.vercel.app',
  //     'https://portifolio-languages.vercel.app',
  //   ]

  return (
    <section id="projectAnd">
      <h1>Project and Desing</h1>

      <section id="carrosel">
        <div id="container-proj">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="./spotfy.png" alt="" />

          <div id="text-proj">
            <h1>Spotfy</h1>
            <p>
              Uma breve descrição do site e fundamentos para chamar atenção do
              leitor/ recrutador
            </p>

            <div>
              <a href="#">Desing</a>
              <a href="#">Visite o SIte</a>
              <a href="#">Codigo</a>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
