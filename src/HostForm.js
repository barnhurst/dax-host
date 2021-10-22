import React, { useState } from 'react'
import MyContext from './MyContext';

const HostForm = (props) =>{
    const [host, setHost] = useState({
        hostName: "",
        dateOfDeath: "",
        gender: ""
    }) 
    return (
        <MyContext.Consumer>
            {context =>  {
                const handleChange = (e) => {
                    setHost(
                        {...host, [e.target.name]: e.target.value}
                    );
                }
            
                const handleSubmit = (e) => {
                    e.preventDefault()
                    const newHost = {
                        hostName: host.hostName,
                        dateOfDeath: host.dateOfDeath,
                        gender: host.gender
                    }
                    context.addHost(newHost)
                    props.history.push('/hosts')
                }
                return (
                    <div>
                        
                        <form onSubmit={handleSubmit}>
                            <label>Name:</label><br />
                            <input name="hostName" onChange={handleChange} value={host.hostName} type="text" /><br />
                            <label>Date of Death:</label><br />
                            <textarea name="dateOfDeath" onChange={handleChange} value={host.dateOfDeath} /><br />
                            <label>Gender:</label><br />
                            <textarea name="gender" onChange={handleChange} value={host.gender} /><br />
                            <input type="submit" />
                        </form>
                    </div>
                )}
            }
        </MyContext.Consumer>
    )
}

export default HostForm