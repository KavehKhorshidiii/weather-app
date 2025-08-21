import { createContext, useState } from "react"
// Create Context
export const MyContext = createContext()

export default function MyContextProvider({ children }) {
    // City coordinates
    const [coords, setCoords] = useState(null)
    // Confirmed city and country name
    const [confirmedCity, setConfirmedCity] = useState(null)
    // Show Error Alert
    const [error, setError] = useState(false)

    return <MyContext.Provider
     value={{
        error,
        setError,
        coords, 
        setCoords, 
        confirmedCity, 
        setConfirmedCity 
    }}>
        {children}
    </MyContext.Provider>
}
