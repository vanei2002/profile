'use client'

import { Link } from 'react-scroll'
import './navegation.sass'

export const Navegation = () => {
  return (
    <nav>
      <span id="logo">
        <p>&lt; Vanei Mendes &#47; &gt;</p>
      </span>

      <ul id="container_links">
        <Link className="link" to="container-home" smooth>
          Home
        </Link>
        <Link className="links" to="container-tecs" smooth>
          Skils
        </Link>
        <Link className="links" to="projectAnd" smooth>
          Project
        </Link>
        <Link className="links" to="" smooth>
          Experience
        </Link>
        <Link className="links" to="" smooth>
          Contact
        </Link>
      </ul>
    </nav>
  )
}
