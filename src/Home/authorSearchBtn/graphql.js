import gql from 'graphql-tag'

const GET_AUTHOR = gql`
query pickAuthor($input: String!){
  
  authorSearch(input: $input){
  
    firstName
    lastName
    books {
      id
      title
      publisher {
          id
          company
      }
    }
    
  }
}

`


export default GET_AUTHOR
