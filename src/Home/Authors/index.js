import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import GET_ALLAUTHORS from './graphql'
import { Container } from './styles'
import AddAuthor from './AddAuthor'

const Authors = () => {
  const { loading, error, data } = useQuery(GET_ALLAUTHORS)

  if (loading) return <p>loading</p>
  if (error) return `Error: ${error}`
  const authorData = data.allAuthors
  return (
    <Container>

      <AddAuthor />

      {authorData.map(e => (
        <li>
          {e.fristName}
          {' '}
          {e.lastName}
        </li>
      ))}


    </Container>
  )
}


export default Authors
