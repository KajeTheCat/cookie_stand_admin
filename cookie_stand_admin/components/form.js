import useResource from "../hooks/useResource";
import { useAuth } from '../contexts/auth';

export default function CookieStandForm({ handleSubmit }) {
  
    const { user } = useAuth();
    const { resources, createResource } = useResource();

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
        <form onSubmit={handleSubmit}className="flex flex-col items-center p-5 text-xl font-semibold bg-teal justify-center w-4/6 mx-auto mt-8 rounded-md border-2 border-limegreen">
            <fieldset>
              <legend></legend>

              <label name='location' className="text-xs w-full">ADD LOCATION
              <input placeholder='location' name='location' className="w-full m-4" />
              </label>


              <button className="bg-darkgreen w-1/2 hover:bg-black hover:text-white rounded-md">CREATE STAND</button>

              
              <div className="flex flex-row">


              <label name='minimum' className="text-xs w-full">MINIMUM CUSTOMERS PER HOUR
              <input placeholder='0' name='minimum' className="w-full m-4"/>
              </label>


              <label name='maximum' className="text-xs w-full">MAXIMUM CUSTOMERS PER HOUR
              <input placeholder='0' name='maximum' className="w-full m-4" />
              </label>


              <label name='average' className="text-xs w-full">AVERAGE COOKIES PER SALE
              <input placeholder='0' name='average' className="w-full m-4" />
              </label>


              </div>
            </fieldset>
        </form>
    );
}
