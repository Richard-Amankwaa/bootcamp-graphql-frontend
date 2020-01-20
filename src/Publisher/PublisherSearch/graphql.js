import gql from 'graphql-tag'


const GET_PUBLISHER = gql`
    query findPublisher($id: ID!){
    
        publisherById(id: $id){
            id
            company
            numBooksPublished
            phoneNumber
            
            books {
            id
            title
            }
            
        }
    }


`

export default GET_PUBLISHER
