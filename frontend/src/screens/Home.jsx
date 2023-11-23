import { useEffect, useState } from "react"

export default function Home() {
    const [name, setName] = useState("")

    useEffect(() => {
        fetch('http://localhost:3000/teste')
          .then(response => response.json())
          .then(data => setName(data.name))
    }, []) 

    return (
        <h1>{name}</h1>
        form
    )
}
