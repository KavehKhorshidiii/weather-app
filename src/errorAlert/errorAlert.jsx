import React, { useEffect, useState } from "react"
import { useContext } from "react" //

import { MyContext } from "../myContext/myContextProvider"

export default function ErrorAlert() {
    const { Error, setError } = useContext(MyContext)
    const [counter, setCounter] = useState(0)

    useEffect(() => {

        setCounter(0)

        if (!Error) {
            return
        }

        let errorInterval = setInterval(() => {
            setCounter((prevNum) => {
                if (prevNum === 100) {
                    clearInterval(errorInterval)
                    return prevNum
                }
                return prevNum + 1
            })
        }, 35)

        return () => clearInterval(errorInterval)
    }, [Error])


    useEffect(() => {
        if (counter === 100) {
            setError(false)
        }
    }, [counter])


    return (
        <div className={`w-56 ${Error ? "visited" : "invisible"} overflow-hidden z-50 h-10 absolute justify-between right-2 rounded-lg flex items-center px-3 bg-red-600 top-2 `}>
            <span className="text-lg text-white">Error</span>
            <div style={{ width: `${counter}%` }} className=" transition-transform absolute left-0  bg-white bottom-0 h-1 "></div>
        </div>
    )
}
