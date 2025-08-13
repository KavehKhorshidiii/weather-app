import React from "react"

export default function profile() {
    const CitiesHistory = JSON.parse(localStorage.getItem("searchCities")) || []

    return (
        <div className="border-2">
            <span className=" font-bold text-weather-end text-3xl">History</span>

            <table className=" border-2 border-amber-50 w-full">
                <thead className="text-weather-start">
                    <tr>
                        <th className=" w-1/3 text-start">City Name</th>
                        <th className=" w-1/3">Country Name</th>
                        <th className=" w-1/3 text-end">Button</th>
                    </tr>
                </thead>


                <tbody className=" text-white w-full ">
                    <tr>
                        <td className=" text-start w-1/3">Qom</td>
                        <td className=" text-center w-1/3">IR</td>
                        <td className=" text-end w-1/3 text-pink-800"><button>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
