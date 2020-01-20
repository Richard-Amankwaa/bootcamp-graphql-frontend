import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import AUTHOR_LOGIN from './graphql'
import { Container } from './styles'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [authorLogin, { error, loading }] = useMutation(AUTHOR_LOGIN, { variables: { email, password }, onCompleted: ({ login: { token } }) => localStorage.setItem('token', token) })

  if (loading) return 'loading...'
  if (error) return error

  return (
    <Container>
      <input placeholder="email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="password" onChange={e => setPassword(e.target.value)} />
      <button type="button" onClick={authorLogin} />


    </Container>
  )
}


export default Login
