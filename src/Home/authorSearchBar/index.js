import React from 'react'

const AuthorSearchBar = ({setAuthor}) => {

    return <input placeholder="Search by book title or author first or last name" onChange={e => setAuthor(e.target.value)} />


}

export default AuthorSearchBar