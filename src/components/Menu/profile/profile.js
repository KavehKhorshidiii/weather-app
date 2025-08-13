import React from "react"
import { ImBin } from "react-icons/im"

export default function profile() {
    const CitiesHistory = JSON.parse(localStorage.getItem("searchCities")) || []

    return (
        // <div className="border-2">
        //     <span className=" font-bold text-weather-end text-3xl">History</span>

        //     <table className=" border-2 border-amber-50 w-full">
        //         <thead className="text-weather-start">
        //             <tr>
        //                 <th className=" w-1/3 text-start">City Name</th>
        //                 <th className=" w-1/3">Country Name</th>
        //             </tr>
        //         </thead>

        //         <tbody className=" text-white w-full">
        //             <tr className="border">
        //                 <td className=" text-start w-1/3">Qom</td>
        //                 <td className=" text-center w-1/3">IR</td>
        //                 <td className=" text-end w-1/3 text-pink-800"><button><ImBin></ImBin></button></td>
        //             </tr>
        //         </tbody>
        //     </table>
        // </div>

        <div className="">


            <span className=" font-bold text-weather-end text-3xl">History</span>


            <div className="border-2 border-white">
                <div className=" border-white border-2 rounded-b-xl font-bold py-4 flex">
                    <span className=" w-1/3 text-start">City Name</span>
                    <span className=" w-1/3 text-center">Country Name</span>
                </div>

                <div className=" border-1 border-white my-8">
                    <div className="text-white border-2 flex justify-between">
                        <span className=" text-start w-1/3">Qom</span>
                        <span className=" text-center w-1/3">IR</span>
                        <span className=" text-end w-1/3 text-pink-800">
                            <button>
                                <ImBin></ImBin>
                            </button>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}
