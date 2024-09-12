import React from 'react';

export const Table = () => {
    return (
        <table className="table-auto border-collapse border border-green-500 w-full text-left">
            <thead>
                <tr>
                    <th className="border border-green-500 px-2 py-1 bg-green-100">Feature</th>
                    <th className="border border-green-500 px-2 py-1 bg-green-100">Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-green-500 px-2 break-words">Growth Rate</td>
                    <td className="border border-green-500 px-2 break-words">Fast</td>
                </tr>
                <tr>
                    <td className="border border-green-500 px-2 break-words">Mature Height</td>
                    <td className="border border-green-500 px-2 break-words">1-2 ft.</td>
                </tr>
                <tr>
                    <td className="border border-green-500 px-2 break-words">Mature Width</td>
                    <td className="border border-green-500 px-2 break-words">1-2 ft.</td>
                </tr>
                <tr>
                    <td className="border border-green-500 px-2 break-words">Sunlight</td>
                    <td className="border border-green-500 px-2 break-words">Thrives in Full Sun, Partial Shade</td>
                </tr>
                <tr>
                    <td className="border border-green-500 px-2 break-words">Foliage/Blooms</td>
                    <td className="border border-green-500 px-2 break-words">Green leaves, purple-white flowers</td>
                </tr>
                <tr>
                    <td className="border border-green-500 px-2 break-words">Uses</td>
                    <td className="border border-green-500 px-2 break-words">Medicinal, Culinary, Religious, Ornamental</td>
                </tr>
                <tr>
                    <td className="border border-green-500 px-2 break-words">Characteristics</td>
                    <td className="border border-green-500 px-2 break-words">Aromatic, attracts pollinators</td>
                </tr>
                <tr>
                    <td className="border border-green-500 px-2 break-words">Soil Conditions</td>
                    <td className="border border-green-500 px-2 break-words">Prefers well-drained soil</td>
                </tr>
            </tbody>
        </table>
    );
};
