import useResource from "../hooks/useResource";
import { useAuth } from '../contexts/auth';

export default function CookieStandForm({ handleSubmit }) {

    function handleSubmit(event) {
      event.preventDefault();
      const location = event.target.location.value;
      const min = event.target.minCustomers.value;
      const max = event.target.maxCustomers.value;
      const avg = event.target.avgCookies.value;
      const data = {
        location: location,
        minCustomers: min,
        maxCustomers: max,
        avgCookies: avg,
        hourlySales: SalesPerHour(min, max, avg),
      };
      setsalesData([...salesData, data]);
    }
  
    function SalesPerHour(min, max, avg) {
      let randomSales = []
      for (let i = 0; i <= 13; i++) {
        let randomNumber = Math.floor((Math.random() * (max - min + 1) + min) * avg);
        randomSales.push(randomNumber);
      }
      return randomSales
    };

    const { user } = useAuth();
    const { resources, createResource } = useResource();

    function handleSubmit(event) {
        event.preventDefault();
        const info = {
            location: event.target.location.value,
            minimum_customers_per_hour: parseInt(event.target.minimum.value),
            maximum_customers_per_hour: parseInt(event.target.maximum.value),
            average_cookies_per_sale: parseFloat(event.target.average.value),
            owner: user.id,
        };
        createResource(info);

    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Create Cookie Stand</legend>
                <input placeholder='location' name='location' />
                <input placeholder='minimum' name='minimum' />
                <input placeholder='maximum' name='maximum' />
                <input placeholder='average' name='average' />
                <button>create</button>
            </fieldset>
        </form>
    );
}

/////////////
// export default function Form({ eventHandler }) {
    
//     return (
//         <form onSubmit={eventHandler} className="flex flex-col items-center p-5 text-xl font-semibold bg-teal justify-center w-4/6 mx-auto mt-8 rounded-md border-2 border-limegreen">
//             <div className="flex flex-row items-center w-4/6">
//                 <div className="flex flex-col items-center w-full p-2">
//                     <label>ADD LOCATION</label>
//                     <input type="text" placeholder="  Cookie Stand Location" text="grey" name="location" className="w-full m-4" />
//                 </div>
//                 <div className="flex flex-row">
//                     <button className="bg-darkgreen w-full hover:bg-black hover:text-white">
//                         CREATE STAND
//                     </button>
//                 </div>
//             </div>
//             <div className="flex justify-between items-center w-full">
//                 <div className="rounded-md flex flex-col items-center text=grey text-sm py-3 px-8 w-2/4">
//                     <label>MINIMUM CUSTOMERS PER HOUR</label>
//                     <input type="text" placeholder="  0" name="minCustomers" className="w-full m-4" />
//                 </div>
//                 <div className="rounded-md flex flex-col items-center text=grey text-sm py-3 px-8 w-2/4">
//                     <label>MAXIMUM CUSTOMERS PER HOUR</label>
//                     <input type="text" placeholder="  0" name="maxCustomers" className="w-full m-4" />
//                 </div>
//                 <div className="rounded-md flex flex-col items-center text=grey text-sm py-3 px-8 w-2/4">
//                     <label>AVERAGE COOKIES PER SALE</label>
//                     <input type="text" placeholder="  0" name="avgCookies" className="w-full m-4" />
//                 </div>
//             </div>
//         </form>
//     )
// }