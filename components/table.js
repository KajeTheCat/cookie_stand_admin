import { hours } from "../components/data.js"

export default function CookieStandTable({ stands, deleteStand }) {
    return (
        <table className="my-8 bg-darkgreen w-4/6 mx-auto my-4 border-2 border-darkgreen">
            <thead>
                <tr>
                    <th className="p-2">Location</th>
                    {hours.map((time, idx) => {
                        return (<th key={idx} className="border p-2">
                            {time}
                        </th>)
                    })}
                    <th>Totals</th>
                </tr>
            </thead>
            <tbody className="bg-teal">
                {stands &&
                    stands.map(stand => (
                        <CookieStandRow key={stand.id} info={stand} deleteStand={deleteStand} />
                    ))}
            </tbody>
            <tfoot>

            </tfoot>
        </table>
    );
}

function CookieStandRow({ info, deleteStand }) {

    if (info.hourly_sales.length == 0) {
        info.hourly_sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    return (
        <tr>
            <td className="border">{info.location} <button onClick={() => deleteStand(info.id)}>[x]</button></td>
            {info.hourly_sales.map((slot, index) => <td key={index} className="border p-2">{slot}</td>)}
            <td className="border p-2">{info.hourly_sales.reduce((num, sum) => num + sum, 0)}</td>
        </tr>
    );
}
