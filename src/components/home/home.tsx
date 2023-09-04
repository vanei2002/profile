'use client'
import { useEffect, useState } from 'react'
import './home.sass'

export const HomePage = () => {
  // Animação dos icones

  const [iconPositions, setIconPositions] = useState<
    { x: number; y: number }[]
  >([])

  const widthHome = 1600
  const heightHome = 640

  const technology: string[] = [
    'angular.svg',
    'aws.svg',
    'bootstrap.svg',
    'css.svg',
    'figma.svg',
    'github.svg',
    'javascript.svg',
    'mongo.svg',
    'nest-js.svg',
    'postgresql.svg',
    'react.svg',
    'sass.svg',
    'typescript.svg',
    'vector.svg',
  ]

  useEffect(() => {
    const positions = technology.map(() => ({
      x: Math.random() * (widthHome - 100),
      y: Math.random() * (heightHome - 100),
    }))

    setIconPositions(positions)

    const interval = setInterval(() => {
      const positions = technology.map(() => ({
        x: Math.random() * (widthHome - 100),
        y: Math.random() * (heightHome - 100),
      }))

      setIconPositions(positions)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Animação do Texto
  const [text, setText] = useState<string>('')
  const phrase = `< Olá, sou Vanei Mendes, um apaixonado Desenvolvedor Full Stack. 
  Minha jornada é guiada pela busca constante de inovação e excelência no vasto universo da tecnologia. 
  Estou aqui para criar soluções incríveis e transformar ideias em realidade. 
  Vamos explorar juntos as possibilidades infinitas da tecnologia e criar algo extraordinário! / >`
  const speed = 110
  let index = -1

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < phrase.length) {
        setText((prevText) => prevText + phrase.charAt(index))
        index++
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [])

  // Efeito do cursor
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const parallaxOffsetX = -mousePosition.x / 25
  const parallaxOffsetY = -mousePosition.y / 25

  const backgroundStyle = {
    transform: `translate(${parallaxOffsetX}px, ${parallaxOffsetY}px)`,
  }

  return (
    <section>
      <div id="home">
        <div className="profile" style={backgroundStyle}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="./IMG_3798.jpg" alt="Perfil" />
        </div>

        <div className="text">
          <p>{text}</p>
        </div>
      </div>

      <div id="icons">
        {technology.map((imageName, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={index}
            className={`icon ${imageName}`}
            src={`./images/${imageName}`}
            alt={`Imagem SVG ${index}`}
            style={{
              position: `absolute`,
              left: `${iconPositions[index]?.x}px`,
              top: `${iconPositions[index]?.y}px`,
              visibility:
                iconPositions.length === technology.length
                  ? 'visible'
                  : 'hidden',
            }}
          />
        ))}
      </div>
    </section>
  )
}
