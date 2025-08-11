import React, { useEffect, useState } from "react"

export default function Counter({ targetNumber }) {
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
        }, 50)

        return () => clearInterval(intervalId)
    }, [targetNumber])

    return <span>{number}</span>
}
