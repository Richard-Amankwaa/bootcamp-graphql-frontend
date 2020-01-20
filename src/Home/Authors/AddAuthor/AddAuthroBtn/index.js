import React from 'react'


const NewAuthorInputs = ({ setAuthor, setPassword }) => (
  <div>
    <input placeholder="firstname" onChange={e => setAuthor({ type: 'firstName', payload: e.target.value })} />
    <input placeholder="lastname" onChange={e => setAuthor({ type: 'lastName', payload: e.target.value })} />
    <input placeholder="email" onChange={e => setAuthor({ type: 'email', payload: e.target.value })} />
    <input placeholder="age" onChange={e => setAuthor({ type: 'age', payload: Number(e.target.value) })} />
    <input placeholder="number of books published" onChange={e => setAuthor({ type: 'numBooksPublished', payload: Number(e.target.value) })} />
    <input placeholder="password" onChange={e => setPassword(e.target.value)} />

  </div>
)


export default NewAuthorInputs
