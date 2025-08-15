import React from "react"

export default function spinner() {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-weather-end rounded-full animate-spin"></div>
        </div>
    )
}
