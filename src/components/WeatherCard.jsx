import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchWeather = async (city) => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  return res.data;
};

export default function WeatherCard({ city }) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeather(city),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching weather.</p>;

  return (
    <div className="bg-white/20 backdrop-blur-xl p-6 rounded-2xl shadow-lg max-w-sm">
      <h3 className="text-xl font-bold">{data.name}</h3>
      <p className="text-5xl font-extrabold mt-2">{Math.round(data.main.temp)}°C</p>
      <p className="capitalize mt-2">{data.weather[0].description}</p>
      <div className="flex justify-between mt-4 text-sm opacity-80">
        <p>Humidity: {data.main.humidity}%</p>
        <p>Wind: {data.wind.speed} m/s</p>
      </div>
    </div>
  );
}
