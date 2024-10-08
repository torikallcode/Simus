import React from "react";
import { ButtonUi } from "../Elements/ButtonUi";

export const HomePage = () => {
  return (
    <section className="w-full h-screen flex flex-col lg:flex-row gap-y-7 justify-center items-center mx-auto relative p-5">
      <div
        className="bg-[#222631] w-full h-full bg-cover bg-center absolute top-0 left-0"
        style={{ backgroundImage: "url(img/homepagetumbuhan3.jpg)" }}>
      </div>
      <div className="bg-raven w-full h-full absolute top-0 left-0 opacity-50">
      </div>
      <div className="flex flex-col z-10">
        <h1 className="text-putih drop-shadow-sm text-5xl font-utama font-bold z-10 xl:text-7xl mb-3 lg:mx-auto lg:max-w-3xl xl:max-w-5xl">Sistem tetes tanaman</h1>
        <p className="text-putih drop-shadow-sm text-base font-poppins z-10 mb-5 lg:mx-auto lg:max-w-3xl xl:max-w-3xl lg:text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequatur sint molestias ipsa incidunt non nemo debitis architecto explicabo minus.</p>
      </div>
    </section>
  )
}

































{/* <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 w-full h-full">
  <div className="bg-[#222631] rounded-3xl col-span-2 row-span-2 p-5 relative">
    <h1 className="text-putih text-5xl font-utama font-bold">Sistem <br /> Monitoring <br /> Infus</h1>
    <img
      src="img/HomePage1.png"
      alt=""
      className="absolute bottom-0 right-0" />
  </div>
  <div className="bg-gray-600 rounded-3xl col-span-2 bg-cover bg-center p-3" style={{ backgroundImage: "url(img/HomePage3Dark.png)" }}></div>
  <div className="bg-primary rounded-3xl flex justify-start items-end px-3 pb-3">
    <h1 className="text-3xl font-semibold font-utama text-putih">Stay Healty!!!</h1>
  </div>
  <div className="bg-[#222631] rounded-3xl"></div>
</div> */}