import { hours } from "../components/data.js"

export default function Table({ salesData }) {
    // console.log(salesData)

    function totalHourlySales(salesData) {
        const totalSalesArray = []
        for(let i = 0; i < salesData.length; i++){
            for(let j = 0; j < salesData[i].hourlySales.length; j++){
                if (!totalSalesArray[j]){
                    totalSalesArray[j] = salesData[i].hourlySales[j]
                } 
                else{
                totalSalesArray[j] += salesData[i].hourlySales[j]
                }
            }
        }
        return totalSalesArray
    }

    const totalsarray = totalHourlySales(salesData)

    return (
        <table className="bg-darkgreen w-4/6 mx-auto my-4 border-2 border-darkgreen">
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
            <tbody className="bg-teal">
                {salesData.map((store, idx) => {
                    return (<tr key={idx}>
                        <td>{store?.location}</td>
                        {store?.hourlySales.map((sales, idx) => {
                            return (<td key={idx}>
                                {sales}
                            </td>)
                        })}
                        <td>{store?.hourlySales.reduce((num, sum) => num + sum, 0)}</td>
                    </tr>)
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td>Totals</td>
                    {totalsarray.map((salesPerH, idx) => {
                        return (<td key={idx}>
                            {salesPerH}
                        </td>)
                    })}
                    <td>{totalsarray.reduce((num, sum) => num + sum, 0)}</td>
                </tr>
            </tfoot>
        </table>
    )
}