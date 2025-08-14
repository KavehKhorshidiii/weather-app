import { createContext, useState } from "react"


export const MyContext = createContext()



export default function MyContextProvider({ children }) {
    
    const [coords, setCoords] = useState(null) // this state
    const [ConfirmedCity, setConfirmedCity] = useState(null)
    

    return (
        <MyContext.Provider value={{coords , setCoords , ConfirmedCity , setConfirmedCity}}>
            {children}
        </MyContext.Provider>
    )
}
