import React from 'react'
import {MyConsumer} from './MyContext';

const Host = (props) => {
    return (
        <MyConsumer>
        {context => {
            console.log(context)
            if (context.hosts?.length === 0 ) {
                return (
                    <h5>Loading....</h5>
                )
            } else {
                const host = context.hosts?.find(h => `${h.id}` === props.match.params.id)
    
                return (
                    <div>
                        <h2>{host.name}</h2>
                      
                        <hr />
                        <h3>Date of Death:</h3>
                        <h3>{host.dateOfDeath}</h3>
                        <br />
                        <h4>Gender:</h4>
                        <h4>{host.gender}</h4>
                    </div>
                )
            }
        }}
        </MyConsumer>
    )
}

export default Host