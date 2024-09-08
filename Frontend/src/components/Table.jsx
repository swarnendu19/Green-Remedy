import React from 'react'

export const Table = () => {
    return (
        <table className="table-auto border-collapse border border-green-500 w-full text-left">
            <thead>
                <tr>
                    <th className="border border-green-500 px-2 py-1 bg-green-100">Song</th>
                    <th className="border border-green-500 px-2 py-1 bg-green-100">Artist</th>
                    <th className="border border-green-500 px-2 py-1 bg-green-100">Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-green-500 px-2 break-words">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td className="border border-green-500 px-2 break-words">Malcolm Lockyer</td>
                    <td className="border border-green-500 px-2 break-words">1961</td>
                </tr>
                <tr>
                    <td className="border border-green-500 px-2 break-words">Witchy Woman</td>
                    <td className="border border-green-500 px-2 break-words">The Eagles</td>
                    <td className="border border-green-500 px-2 break-words">1972</td>
                </tr>
                <tr>
                    <td className="border border-green-500 px-2 break-words">Shining Star</td>
                    <td className="border border-green-500 px-2 break-words">Earth, Wind, and Fire</td>
                    <td className="border border-green-500 px-2 break-words">1975</td>
                </tr>
            </tbody>
        </table>
    )
}
