import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../context/firebase/firebaseContext'

const Search = () => {

    const [value, setValue] = useState('')
    const firebse = useContext(FirebaseContext)

    const onSubmitHandler = e => {
        e.preventDefault()
        firebse.searchNote(value)
    }

    return (
        <form className="form-inline my-2 my-lg-0" onSubmit={onSubmitHandler}>
            <input 
                className="form-control mr-sm-2" 
                type="search" 
                placeholder="Search"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
        </form>
    )
}

export default Search
