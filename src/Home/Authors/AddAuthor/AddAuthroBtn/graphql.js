import gql from 'graphql-tag'

const GET_AUTHOR = gql`
query pickAuthor($input: String!){
  
  authorSearch(input: $input){
  
    
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
