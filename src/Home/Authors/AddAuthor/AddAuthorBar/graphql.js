import gql from 'graphql-tag'

const ADD_AUTHOR = gql`
 mutation createAuthor($input: AddAuthorInput!, $password: String!){
    
    addAuthor(input: $input, password: $password){
      id
      firstName
      lastName
      email
      age
      numBooksPublished

        
    }
}

`
export default ADD_AUTHOR
