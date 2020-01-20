import gql from 'graphql-tag'


const AUTHOR_LOGIN = gql`
    mutation Login($email: String!, $password: String!){
  login(email: $email, password: $password) {
    token
    author {
      id
      email
    }
  }
    
        
    }
`

export default AUTHOR_LOGIN
