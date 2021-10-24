import React from 'react'
import { MyConsumer } from './MyContext';
import NewButton from './NewButton'
import HostLink from './HostLink'

const Hosts= () => {
    return (
        <MyConsumer>
        {context => {
            console.log(context)
               const hostList = context.hosts?.map(h => <HostLink key={h.id} host={h} />)
                return(
                    <div>
                        <h3>Dax Hosts</h3> 
                        <hr/>
                        {hostList}
                        <br/>
                        <br/>
                        <NewButton />    
                    </div>
                )
            }
        }
        </MyConsumer>
    )
}

export default Hosts