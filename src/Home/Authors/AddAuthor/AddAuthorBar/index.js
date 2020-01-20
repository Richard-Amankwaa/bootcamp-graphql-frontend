import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import ADD_AUTHOR from './graphql'
import GET_ALLAUTHORS from '../../graphql'


const AddAuthorBtn = ({ author, password }) => {
  const [addAuthor, { error, loading }] = useMutation(ADD_AUTHOR, {
    variables: { input: author, password },
    update: (client, { data: { addAuthor } }) => {
      try {
        const data = client.readQuery({ query: GET_ALLAUTHORS })

        data.allAuthors = [...data.allAuthors, addAuthor]

        client.writeQuery({ query: GET_ALLAUTHORS, data })
      } catch (error) {

      }
    },
  })


  return (
    <div>
      {loading ? 'Loading...' : <button type="button" onClick={addAuthor}>Click Me!</button>}
      { error && `${error}` }

    </div>
  )
}
export default AddAuthorBtn
