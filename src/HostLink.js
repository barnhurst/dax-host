import React from 'react'
import { Link } from 'react-router-dom'

const HostLink = ({host}) => {
        return (
            <div>
                <Link key={host.id} to={`/hosts/${host.id}`} >
                    <li>{host.name}</li>
                </Link>

            </div>
            
        )
    } 

export default HostLink