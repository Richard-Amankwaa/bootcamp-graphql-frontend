import React, { useState } from 'react'
import AuthorSearchBtn from './authorSearchBtn'
import AuthorSearchBar from './authorSearchBar'
import { Container } from './styles'


const SearchBar = () => {
  const [author, setAuthor] = useState('')

  return (
    <Container>
      <AuthorSearchBar setAuthor={setAuthor} />

      <AuthorSearchBtn author={author} />


    </Container>
  )
}


export default SearchBar
