import { useEffect, useState } from "react"

export default function Home() {
    const [name, setName] = useState("")

    useEffect(() => {
        fetch('http://localhost:3000/teste/1')
          .then(response => response.json())
          .then(data => setName(data.name))
    }, []) 

    function send() {
        fetch('http://localhost:3000/teste', { age: 2, id: 3, name: name })
    }

    return (
        <>
            <h1>{name}</h1>
            <form action="POST">
                <input type="text" value={name} />
                <button onSubmit={send} type="submit">envia p pai</button>
            </form>
        </>
    )
}
