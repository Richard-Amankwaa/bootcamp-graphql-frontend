import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useParams } from 'react-router-dom'
import { Container } from './styles'
import GET_PUBLISHER from './graphql'

const PublisherSearch = () => {
  const { id } = useParams()
  // eslint-disable-next-line no-console
  console.log(id)
  const { loading, error, data } = useQuery(GET_PUBLISHER, { variables: { id } })

  if (loading) return <p>loading</p>
  if (error) return `Error: ${error}`
  const publisher = data.publisherById
  return (
    <Container>
      <p>{publisher.company}</p>
      <p>{publisher.numBooksPublished}</p>
      <p>{publisher.phoneNumber}</p>
      <ul>
Books Published
        {publisher.books.map(e => <li>{e.title}</li>)}
      </ul>


    </Container>
  )
}

export default PublisherSearch
