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
    <main className='px-3 py-10'>
      <h1 className='text-3xl font-utama text-raven2 font-bold mb-7'>Statistik Data</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 justify-center gap-x-7 mb-16 lg:mx-auto'>
        <div className='py-5 rounded-xl bg-[#609966] w-full h-72 flex justify-center items-center relative'>
          <h1 className='text-white font-utama lg:text-lg absolute top-5 left-5'>Tingkat kelembaban</h1>
          <SemiCircularProgressBar progress={latestData.kelembaban} />
        </div>
        <div className='flex justify-between items-start gap-x-5 rounded-xl w-full h-32 relative lg:h-full'>
          <div className='flex justify-center relative items-center w-full h-full rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-gray-900 px-2'>
            <h1 className='font-utama text-raven2 absolute top-3 left-3 lg:top-5 lg:left-5 lg:text-lg'>Status</h1>
            <h2 className='text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-medium text-center font-utama text-raven2'>{latestData.status}</h2>
          </div>
          <div className='bg-gray-900 flex justify-center relative items-center w-full h-full rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 px-2'>
            <h1 className='font-utama text-raven2 absolute top-3 left-3 lg:top-5 lg:left-5 lg:text-lg'>Time</h1>
            <h2 className='text-sm sm:text-lg md:text-lg lg:text-xl xl:text-2xl xl:px-7 font-medium text-center font-utama text-raven2'>{latestData.waktu}</h2>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-x-10'>
        <h1 className='text-3xl font-utama text-raven2 font-bold mb-7'>History Data</h1>
        <Table className="max-w-2xl mx-auto border overflow-x-auto rounded-lg overflow-hidden">
          <TableHeader className="bg-[#609966]">
            <TableRow>
              <TableHead className="text-putih text-center">No</TableHead>
              <TableHead className="text-putih text-center">Kelembaban</TableHead>
              <TableHead className="text-putih text-center">Status</TableHead>
              <TableHead className="text-putih text-center">Time</TableHead>
            </TableRow>
          </TableHeader>
          {chartData.length > 0 && (
            <TableBody className="bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
              {chartData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className=" text-raven font-poppins text-center">{item.id}</TableCell>
                  <TableCell className="text-raven font-poppins text-center ">{item.kelembaban}</TableCell>
                  <TableCell className=" text-raven font-poppins text-center">{item.status}</TableCell>
                  <TableCell className="text-raven font-poppins text-center ">{item.waktu}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </div>
    </main>
  );
}
