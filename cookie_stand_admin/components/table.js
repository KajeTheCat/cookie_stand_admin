import { hours } from "../components/data.js"

export default function Table({ SalesPerHour }) {
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

            </tbody>
        </table>
    )
}