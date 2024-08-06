import { AuthLayout } from '../components/Layouts/AuthLayout';

export const Home = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:8081/internet')
  //     .then(res => res.json())
  //     .then(data => setData(data))
  //     .catch(err => console.log(err));
  // }, []);

  return (
    <div className='bg-putih min-h-screen w-full'>
      <AuthLayout></AuthLayout>
      {/* <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className='bg-primary'>
              <th className=' font-utama'>No</th>
              <th className='text-white font-utama uppercase'>Temprature</th>
              <th className='text-slate-100 uppercase'>Temprature</th>
              <th className=''>waktu</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <th className='text-slate-100 font-utama'>{item.id}</th>
                <td className='text-slate-100'>{item.temprature}</td>
                <td className='text-slate-100'>{item.kelembaban}</td>
                <td className='text-slate-100'>{item.waktu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};
