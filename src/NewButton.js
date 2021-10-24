import React from 'react'
import { Link } from 'react-router-dom'


const NewButton = () => {
        return (
             <Link to={`/hosts/new`}>
                <button>Add new host</button>
            </Link>
        )
    } 

export default NewButton