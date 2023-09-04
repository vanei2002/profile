import './navegation.sass'

export const Navegation = () => {
  return (
    <nav>
      <span id="logo">
        <p>&lt; Vanei Mendes &#47; &gt;</p>
      </span>

      <ul id="container_links">
        <li className="links">Home</li>
        <li className="links">Project</li>
        <li className="links">Skils</li>
        <li className="links">Experience</li>
        <li className="links">Contact</li>
      </ul>
    </nav>
  )
}
