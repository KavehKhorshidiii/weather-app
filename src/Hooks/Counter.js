import React, { useEffect, useState } from "react"

//counter weather status number
export default function Counter({ targetNumber, timerSpeed }) {
    const [number, setNumber] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNumber((prev) => {
                if (prev + 1 >= targetNumber) {
                    clearInterval(intervalId)
                    return targetNumber
                }
                return prev + 1
            })
        }, timerSpeed)

        return () => clearInterval(intervalId)
    }, [targetNumber, timerSpeed])

    return <span>{number}</span>
}
