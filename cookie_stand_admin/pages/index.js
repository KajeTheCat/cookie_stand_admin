import Head from "next/head"
import { useState } from 'react'

export default function Home() {
  //define use state hook(initial state, use state hook function)
  //define event handler
    //prevent default
    //define 4 variables that contains data from input tags
    //define js object(use data 4 variables as values to keys)
    //define variable to stringify js obj(JSON.stringify(obj))
    //pass stringified json to use state hook function

  const [initState,StateFunction] = useState('');

  function eventHandler(event) {
    event.preventDefault();
    const location = event.target.location.value;
    const min = event.target.minCustomers.value;
    const max = event.target.maxCustomers.value;
    const avg = event.target.avgCookies.value;
    const data = {
      location:location,
      minCustomers:min,
      maxCustomers:max,
      avgCookies:avg,
    };
    const stringJson = JSON.stringify(data);
    StateFunction(stringJson);
  }

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <header className="p-2 text-2xl font-mono font-semibold bg-darkgreen text-black">
        <h1>Cookie Stand Admin</h1>
      </header>
      <main>
        <form onSubmit={eventHandler} className="flex flex-col items-center p-5 text-xl font-semibold bg-limegreen justify-center w-4/6 mx-auto mt-8 rounded-md">
          Create Cookie Stand
          <div className="flex items-center w-full p-2">
            <label>Location</label>
            <input name="location" className="w-full m-4"/>
          </div>  
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col items-center font py-5 w-1/4">
              <label>Minimum Customers per Hour</label>
              <input name="minCustomers" className="w-full m-4"/>
            </div>
            <div className="flex flex-col items-center font py-5 w-1/4">
              <label>Maximum Customers per Hour</label>
              <input name="maxCustomers" className="w-full m-4"/>
            </div>
            <div className="flex flex-col items-center font py-5 w-1/4">
              <label>Average Cookies per Sale</label>
              <input name="avgCookies" className="w-full m-4"/>
            </div>
            <button className="bg-darkgreen px-20 py-5 hover:bg-black hover:text-white">
              Create
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center m-8 ">
          <h1>Report Table Coming Soon...</h1>
          <p className="flex pt-10">{initState}</p>
        </div>
      </main>
      <footer className="pl-5 pb-2 pt-2 font-mono bg-darkgreen text-black">
        <h3>&#169;2021</h3>
      </footer>
    </div>
  );
}

// button 