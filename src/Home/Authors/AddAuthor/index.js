/* eslint-disable no-param-reassign */
import React, { useReducer, useState } from 'react'
import NewAuthorInputs from './AddAuthroBtn'
import AddAuthorBtn from './AddAuthorBar'


const AddAuthor = () => {
  const reducer = (newAuthor, action) => {
    if (action.type === 'firstName') {
      newAuthor.firstName = action.payload
    } else if (action.type === 'lastName') {
      newAuthor.lastName = action.payload
    } else if (action.type === 'email') {
      newAuthor.email = action.payload
    } else if (action.type === 'age') {
      newAuthor.age = action.payload
    } else if (action.type === 'numBooksPublished') {
      newAuthor.numBooksPublished = action.payload
    } else {
      throw new Error('whu!?')
    }

    return newAuthor
  }

  const newAuthor = {
    firstName: null, lastName: null, email: null, age: null, numBooksPublished: null,
  }

  const [author, setAuthor] = useReducer(reducer, newAuthor)
  const [password, setPassword] = useState('')


  return (
    <div>
      <NewAuthorInputs setAuthor={setAuthor} setPassword={setPassword} />
      <AddAuthorBtn author={author} password={password} />

    </div>

  )
}

export default AddAuthor
