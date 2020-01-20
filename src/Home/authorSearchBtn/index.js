import React from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import GET_AUTHOR from './graphql'
import { StyledLink } from './styles'

const AuthorSearchBtn = ({ author }) => {
  const [getAuthor, {
    loading, data, error, called,
  }] = useLazyQuery(GET_AUTHOR, { variables: { input: author } })


  if (loading) return <p>wait a minute...</p>
  if (error) return `Error: ${error}`

  if (!called) return <button onClick={getAuthor} />


  return (
    <div>
      {data.authorSearch[0].firstName}
      {' '}
      {data.authorSearch[0].lastName}
      {data.authorSearch[0].books.map(e => (
        <div>
          <p>
            {e.title}
            {' '}
was published by
          </p>
          <StyledLink to={`/publisher/${e.publisher.id}`}>{e.publisher.company}</StyledLink>
        </div>
      ))}
    </div>
  )
}


export default AuthorSearchBtn
