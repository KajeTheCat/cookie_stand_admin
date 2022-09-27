import { hours } from "../components/data.js"

export default function Table({ salesData }) {
    console.log(salesData)
    return (
        <table className="bg-darkgreen w-1/2 mx-auto my-4">
            <thead>
                <tr>
                    <th>Location</th>
                    {hours.map((time, idx) => {
                        return (<th key={idx}>
                            {time}
                        </th>)
                    })}
                    <th>Totals</th>
                </tr>
            </thead>
            <tbody>
                {salesData.map((store, idx) => {
                    return (<tr key={idx}>
                        <td>{store?.location}</td>
                        {store?.hourlySales.map((sales, idx) => {
                            return (<td key={idx}>
                                {sales}
                            </td>)
                        })}
                    </tr>)
                })}
            </tbody>
        </table>
    )
}