import { createContext, useState } from "react"


export const MyContext = createContext()



export default function MyContextProvider({ children }) {
    
    const [coords, setCoords] = useState(null) // this state
    const [ConfirmedCity, setConfirmedCity] = useState(null)
    const [Error, setError] = useState(false)
    

    return (
        <MyContext.Provider value={{Error , setError , coords , setCoords , ConfirmedCity , setConfirmedCity}}>
            {children}
        </MyContext.Provider>
    )
}
