import { useState } from "react";
import WeatherCard from "./components/WeatherCard";

export default function App() {
  const [city, setCity] = useState("Chennai");
  const [search, setSearch] = useState("Chennai");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(city);
  };

  return (
    <div
      className=" bg-cover bg-center relative  text-white overflow-x-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1920&q=80')`,
        height: "100vh",
        width: "100vw",

      }}
    >

      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm "></div>


      <div className=" flex-wrap  md:left-52 flex-col relative z-10 flex md:flex-row h-full justify-center items-center">

        <div className="w-full md:w-1/3 bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-7xl font-bold">{search}</h2>
            <p className="text-2xl opacity-80">Weather Forecast</p>
            <p className="text-5xl mt-16 flex justify-center">☁️☔⛈️</p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex bg-white/20 rounded-full overflow-hidden"
          >
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Search city..."
              className="flex-1 bg-transparent px-4 py-2 text-white placeholder-white/60 outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 transition"
            >
              Search
            </button>
          </form>
        </div>


        <div className="flex-1 p-8 flex flex-col justify-center">

          <div className="mb-8">
            <h2 className="text-3xl font-bold">Weather Forecast</h2>
          </div>


          <WeatherCard city={search} />


        </div>
      </div>
    </div>
  );
}
