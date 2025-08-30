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
      className="min-h-screen bg-cover bg-center relative text-white"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1920&q=80')`,
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row h-full">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/3 bg-white/10 backdrop-blur-xl p-6 rounded-r-3xl shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-7xl font-bold">{search}</h2>
            <p className="text-2xl opacity-80">Weather Forecast</p>
            <p className="text-5xl mt-16 flex justify-center">☁️☔⛈️</p>

          </div>

          {/* Search */}
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

        {/* Right Content */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          {/* Current Weather Summary */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Storm with Heavy Rain</h2>
            <p className="opacity-80 mt-2">
              Variable clouds with heavy showers. High 17°. Winds E at 10 to 20
              mph. Chance of rain 50%.
            </p>
          </div>

          {/* WeatherCard (real API data) */}
          <WeatherCard city={search} />

          {/* Forecast Graph (placeholder for now) */}
          <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
            {[
              { day: "Washington", temp: 20 },
              { day: "Oklahoma", temp: 17 },
              { day: "Philadelphia", temp: 14 },
              { day: "San Francisco", temp: 12 },
              { day: "New York", temp: 10 },
              { day: "North Dakota", temp: -9 },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-md"
              >
                <p className="text-sm">{item.day}</p>
                <p className="text-2xl font-bold">{item.temp}°</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
