'use client'
import { useEffect, useState } from 'react'
import './home.sass'

export const HomePage = () => {
  const [shuffledImages, setShuffledImages]: any = useState([])

  const svgImages = ['angular-1.svg', 'aws-2.svg']

  useEffect(() => {
    const shuffled = [...svgImages]

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    setShuffledImages(shuffled)
  })
  return (
    <section id="home">
      {shuffledImages.map((imageName: any, index: any) => (
        <img
          key={index}
          src={`/images/svg/${imageName}`}
          alt={`Imagem SVG ${index}`}
        />
      ))}

      <div>
        <img src="./IMG_3798.jpg" alt="Perfil" />
      </div>

      <div className="text">
        <p>
          Olá, mundo! Sou Vanei Mendes, um Desenvolvedor Full Stack pronto para
          mergulhar no universo da tecnologia e inovação
        </p>
      </div>
    </section>
  )
}
