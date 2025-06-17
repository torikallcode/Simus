import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SemiCircularProgressBar from '../Fragments/SemiCircularProgressBar';
export const Main = () => {
  const [chartData, setChartData] = useState([]);
  const [latestData, setLatestData] = useState({
    kelembaban: 0,
    status: 'Tidak Tersedia',
    waktu: '00:00',
  });

  useEffect(() => {
    fetch('http://192.168.1.19:8000/kelembaban')
      .then(response => response.json())
      .then(data => {
        console.log('Data dari backend:', data);

        const getStatus = (kelembaban) => {
          if (kelembaban <= 20) return 'Kering';
          if (kelembaban <= 49) return 'Kurang Lembab';
          if (kelembaban <= 70) return 'Cukup Lembab';
          return 'Sangat Lembab';
        };

        if (data.length > 0) {
          const latest = data[data.length - 1];
          setLatestData({
            kelembaban: latest.kelembaban,
            status: getStatus(latest.kelembaban),
            waktu: formatDateTime(latest.waktu),
          });

          setChartData(data.map((item, index) => ({
            id: index + 1,
            kelembaban: item.kelembaban,
            status: getStatus(item.kelembaban),
            waktu: formatDateTime(item.waktu),
          })));
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const formatDateTime = (datetime) => {
    const date = new Date(datetime);
    const formattedDate = date.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    const formattedTime = date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
    });
    return `${formattedDate}, ${formattedTime}`;
  };

  return (
    <main className='px-3 py-10 pb-[100rem]'>
      <h1 className='mb-10 text-3xl font-bold font-utama text-raven2'>Statistik Data</h1>
      <div className='grid justify-center grid-cols-1 mb-24 lg:grid-cols-3 gap-7 gap-x-7'>
        <div className='relative flex items-center justify-center w-full py-5  rounded-xl bg-gradient-to-r from-biru to-blue-500 h-72'>
          <h1 className='absolute text-lg text-white font-utama top-5 left-5'>Volume</h1>
          <SemiCircularProgressBar progress={375} />
        </div>
        <div className='relative flex items-start justify-between w-full h-32 gap-x-5 rounded-xl'>
          <div className='relative flex items-center justify-center w-full h-full bg-gray-900 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
            <h1 className='absolute font-utama text-raven2 top-3 left-3'>Prediksi</h1>
            <h2 className='text-3xl font-utama text-raven2'>2.5 jam</h2>
          </div>
          <div className='relative flex items-center justify-center w-full h-full bg-gray-900 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
            <h1 className='absolute font-utama text-raven2 top-3 left-3'>laju</h1>
            <h2 className='text-3xl font-utama text-raven2'>3s</h2>

          </div>
        </div>
        {/* <div className='flex items-center justify-center w-full py-5 bg-gray-500 rounded-xl h-72 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
          <SimpleBarChart dataGrafik={chartData}></SimpleBarChart>
        </div>
        <div className='flex items-center justify-center w-full py-5 bg-gray-500 rounded-xl h-72 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
          <SimpleAreaChart className='max-w-xl' dataGrafik={chartData}></SimpleAreaChart>
        </div> */}
        {/* <div className='py-5 rounded-xl aspect-[4/3] bg-gray-500 w-full flex justify-center items-center max-w-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
          <SimpleAreaChart className='max-w-xl' dataGrafik={chartData}></SimpleAreaChart>
        </div> */}
        {/* <div className='py-5 rounded-xl aspect-[4/3] bg-gray-500 w-full flex justify-center items-center max-w-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
          <CompossedBar className='max-w-xl' dataGrafik={chartData}></CompossedBar>
        </div> */}
      </div>
      <div className='flex flex-col gap-x-10 '>
        <h1 className='mb-10 text-3xl font-bold font-utama text-raven2'>History Data</h1>
        <Table className="max-w-2xl mx-auto overflow-x-auto border">
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader className="bg-biru">
            <TableRow>
              <TableHead className="text-center text-putih">No</TableHead>
              <TableHead className="text-center text-putih">Kelembaban</TableHead>
              <TableHead className="text-center text-putih">Status</TableHead>
              <TableHead className="text-center text-putih">Time</TableHead>
            </TableRow>
          </TableHeader>
          {chartData.length > 0 && (
            <TableBody className="bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
              {chartData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="text-center  text-raven font-poppins">{item.id}</TableCell>
                  <TableCell className="text-center text-raven font-poppins ">{item.kelembaban}</TableCell>
                  <TableCell className="text-center  text-raven font-poppins">{item.status}</TableCell>
                  <TableCell className="text-center text-raven font-poppins ">{item.waktu}</TableCell>
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
          className="w-64 mt-4"
        /> */}
      {/* <div className="overflow-x-auto">
        <table className="table border">
          <thead>
            <tr className='bg-primary'>
              <th className=' font-utama'>No</th>
              <th className='text-white uppercase font-utama'>Temprature</th>
              <th className='uppercase text-slate-100'>Temprature</th>
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
}
