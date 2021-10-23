import React, { useState, useEffect } from 'react'

const MyContext = React.createContext({ host: [] });

const API_URL = "http://localhost:3001/hosts"; // Name variables as CAPITOL_CASE when defining constants (Never change throughout lifecycle of application)

const MyProvider = (props) => {
    const [hosts, setHosts] = useState([])

    useEffect(() => {
        fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setHosts(data)
        })
    }, [])

    const addHost = (host) => {
        console.log(host)
        fetch(API_URL, {
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

    return (
        <MyContext.Provider value={{hosts, addHost}}>
            {props.children()}
        </MyContext.Provider>
    )
}

const MyConsumer = MyContext.Consumer

export { MyProvider, MyConsumer };
