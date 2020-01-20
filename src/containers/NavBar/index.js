import React from 'react'
import { StyledLink } from './styles'


const NavBar = () => (
  <div>
    <StyledLink to="/">

      <button>Home</button>
    </StyledLink>
    <StyledLink to="/search"><button>AuthorSearch</button></StyledLink>
    <StyledLink to="/authors">
      <button>Authors and Registration</button>

    </StyledLink>

  </div>


)
export default NavBar
