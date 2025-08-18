import { useEffect, useState } from "react"
import { useContext } from "react"
import { MyContext } from "../myContext/myContextProvider"

export default function ErrorAlert() {
    const { error, setError } = useContext(MyContext)
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        setCounter(0)

        // Start error progress bar when error is triggered
        const errorInterval = setInterval(() => {
            setCounter((prevNum) => {
                if (prevNum === 100) {
                    clearInterval(errorInterval)
                    return prevNum
                }
                return prevNum + 1
            })
        }, 35)

        return () => clearInterval(errorInterval)
    }, [error])

    // When progress reaches 100%, disable error
    useEffect(() => {
        if (counter === 100) {
            setError(false)
        }
    }, [counter])

    return (
        <div className={`w-56 ${error ? "visited" : "invisible"} overflow-hidden z-50 h-10 absolute justify-between right-2 rounded-lg flex items-center px-3 bg-red-600 top-2 `}>
            <span className="text-lg text-white">Error</span>
            <div style={{ width: `${counter}%` }} className=" absolute left-0  bg-white bottom-0 h-1 "></div>
        </div>
    )
}
