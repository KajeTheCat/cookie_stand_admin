import Head from "next/head"
import { useState } from 'react'

import Header from "../components/header.js"
import Form from "../components/form.js"
import Table from "../components/table.js"
import Footer from "../components/footer.js"

export default function Home() {

  const [salesData, setsalesData] = useState([]);

  function eventHandler(event) {
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
      hourlySales: SalesPerHour(min,max,avg),
      totalSales: totalSales(),
    };
    setsalesData([...salesData,data]);
  }

  function SalesPerHour(min,max,avg) {
    let randomSales = []
    for(let i = 0; i <= 13; i++){
      let randomNumber = Math.floor((Math.random() * (max - min + 1) + min) * avg);
      randomSales.push(randomNumber);
    }
    return randomSales
  };

  function totalSales() {

  };

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header/>
      <main>
        <Form eventHandler={eventHandler} />
        <div className="flex flex-col items-center m-8 text-2xl">
          <h1>No Cookie Stands Available</h1>
          <p className="flex pt-10">{JSON.stringify(salesData)}</p>
        </div>
        <Table salesData={salesData} />
      </main>
      <Footer />
    </div>
  );
};