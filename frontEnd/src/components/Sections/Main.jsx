import React, { useState, useEffect, PureComponent } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SimpleBarChart } from '../Fragments/SimpleBarChart';
import { SimpleAreaChart } from '../Fragments/SimpleAreaChart';
import { CompossedBar } from '../Fragments/CompossedBar';
import SemiCircularProgressBar from '../Fragments/SemiCircularProgressBar';
// import axios from 'axios';



// Static data for the bar chart
const chartData = [
  {
    id: 1,
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    id: 2,
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    id: 3,
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    id: 4,
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    id: 5,
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    id: 6,
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    id: 7,
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const totalData = chartData.map((item) => item.pv).reduce((a, b) => a + b, 0);

console.log(totalData);

export const Main = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3000/data')
  //     .then(res => res.json())
  //     .then(data => setData(data))
  //     .catch(err => console.log(err));
  // }, []);

  // axios.get('http://localhost:3000/data')
  //   .then(response => {
  //     console.log('Data yang diterima:', response.data);
  //     // Lakukan sesuatu dengan data yang diterima
  //   })
  //   .catch(error => {
  //     console.error('Ada masalah saat fetching data:', error);
  //   });

  fetch('http://localhost:3000/insert')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Data yang diterima:', data);
      // Lakukan sesuatu dengan data yang diterima
    })
    .catch(error => {
      console.error('Ada masalah saat fetching data:', error);
    });



  const [progress, setProgress] = useState(50)

  const handleInputChange = (e) => {
    setProgress(e.target.value)
  }

  return (
    <main className='px-3 py-10 pb-[100rem]'>
      <h1 className='text-3xl font-utama text-raven2 font-bold mb-10'>Statistik Data</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-7 justify-center gap-x-7 mb-24'>
        <div className=' py-5 rounded-xl bg-gradient-to-r from-biru to-blue-500 w-full h-72 flex justify-center items-center relative'>
          <h1 className='text-white font-utama text-lg absolute top-5 left-5'>Volume</h1>
          <SemiCircularProgressBar progress={375} />
        </div>
        <div className='flex justify-between items-start gap-x-5 rounded-xl w-full h-32 relative'>
          <div className='flex justify-center relative items-center w-full h-full rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-gray-900'>
            <h1 className='font-utama text-raven2 absolute top-3 left-3'>Prediksi</h1>
            <h2 className='text-3xl font-utama text-raven2'>2.5 jam</h2>
          </div>
          <div className='bg-gray-900 flex justify-center relative items-center w-full h-full rounded-xl  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
            <h1 className='font-utama text-raven2 absolute top-3 left-3'>laju</h1>
            <h2 className='text-3xl font-utama text-raven2'>3s</h2>

          </div>
        </div>
        {/* <div className='py-5 rounded-xl bg-gray-500 w-full h-72 flex justify-center items-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
          <SimpleBarChart dataGrafik={chartData}></SimpleBarChart>
        </div>
        <div className='py-5 rounded-xl bg-gray-500 w-full flex justify-center h-72 items-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
          <SimpleAreaChart className='max-w-xl' dataGrafik={chartData}></SimpleAreaChart>
        </div> */}
        {/* <div className='py-5 rounded-xl aspect-[4/3] bg-gray-500 w-full flex justify-center items-center max-w-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
          <SimpleAreaChart className='max-w-xl' dataGrafik={chartData}></SimpleAreaChart>
        </div> */}
        {/* <div className='py-5 rounded-xl aspect-[4/3] bg-gray-500 w-full flex justify-center items-center max-w-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
          <CompossedBar className='max-w-xl' dataGrafik={chartData}></CompossedBar>
        </div> */}
      </div>
      <div className='flex flex-col  gap-x-10 '>
        <h1 className='text-3xl font-utama text-raven2 font-bold mb-10'>History Data</h1>
        <Table className="max-w-2xl mx-auto border overflow-x-auto">
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader className="bg-biru">
            <TableRow>
              <TableHead className="w-[100px] text-putih">Invoice</TableHead>
              <TableHead className="text-putih">Status</TableHead>
              <TableHead className="text-putih">Method</TableHead>
              <TableHead className="text-right text-putih">Amount</TableHead>
            </TableRow>
          </TableHeader>
          {data.length > 0 && (
            <TableBody className="bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium text-raven font-poppins">{item.id}</TableCell>
                  <TableCell className="text-raven font-poppins">{item.weight_value}</TableCell>
                  {/* <TableCell className="text-raven font-poppins">{item.pv}</TableCell>
                  <TableCell className="text-right text-raven font-poppins">{item.amt}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </div>
      {/* <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleInputChange}
          className="mt-4 w-64"
        /> */}
      {/* <div className="overflow-x-auto">
        <table className="table border">
          <thead>
            <tr className='bg-primary'>
              <th className=' font-utama'>No</th>
              <th className='text-white font-utama uppercase'>Temprature</th>
              <th className='text-slate-100 uppercase'>Temprature</th>
              <th className=''>waktu</th>
            </tr>
          </thead>
          <tbody>
            {chartData.map((item) => (
              <tr key={item.id}>
                <th className='text-slate-100 font-utama'>{item.id}</th>
                <td className='text-slate-100'>{item.uv}</td>
                <td className='text-slate-100'>{item.pv}</td>
                <td className='text-slate-100'>{item.waktu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </main>
  );
};
