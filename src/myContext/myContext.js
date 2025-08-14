import react, { createContext, useState } from "react"

export const myContext = createContext()


export default function MyProvider({ children }) {
    
    const [coords, setCoords] = useState(null) // this state

    return (
        <myContext value={{coords , setCoords}}>
            {children}
        </myContext>
    )
}
