import Head from "next/head";
import { useState } from 'react';

import Header from "../components/header.js";
import Form from "../components/form.js";
import Table from "../components/table.js";
import Footer from "../components/footer.js";

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

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main>
        <Form eventHandler={eventHandler} />
        <Table salesData={salesData} />
      </main>
      <Footer salesData={salesData} />
    </div>
  );
};