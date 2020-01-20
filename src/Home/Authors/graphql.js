import gql from 'graphql-tag'

const GET_ALLAUTHORS = gql`
query Authors {
    
    allAuthors {
      id
      firstName
      lastName

        
    }
}



`


export default GET_ALLAUTHORS
