import React, { useState, useEffect } from 'react'

const MyContext = React.createContext();

export default MyContext;

const MyProvider = (props) => {
    const [hosts, setHosts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/daxHosts")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setHosts(data)
        })
    }, [])

    const addHost = (host) => {
       
        fetch("http://localhost:3001/daxHosts", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(host) 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setHosts([...hosts, data])
        })
    }

    return (<MyContext.Provider value={{
            hosts: hosts, 
         addHost: addHost
        }}>{props.children}
        </MyContext.Provider>)
    
}

const MyConsumer = MyContext.Consumer

export  { MyProvider, MyConsumer };
