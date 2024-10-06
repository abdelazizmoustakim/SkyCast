import React, { useEffect, useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

// City data array with names and image paths
const citiesData = [
  {
    name: "New York",
    image: "/src/assets/cities/newyork.jpeg",
  },
  {
    name: "Tokyo",
    image: "/src/assets/cities/tokyo.jpeg",
  },
  {
    name: "Paris",
    image: "/src/assets/cities/paris.jpeg",
  },
  {
    name: "London",
    image: "/src/assets/cities/london.jpeg",
  },
  {
    name: "Dubai",
    image: "/src/assets/cities/dubai.jpeg",
  },
  {
    name: "Sydney",
    image: "/src/assets/cities/sydney.jpeg",
  },
  {
    name: "Moscow",
    image: "/src/assets/cities/moscow.jpeg",
  },
  {
    name: "Rio",
    image: "/src/assets/cities/rio.jpeg",
  },
  {
    name: "Québec",
    image: "/src/assets/cities/quebec.jpeg", // Ensure this path is correct
  }
];

const Hero = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [favorites, setFavorites] = useState(new Set()); // Track favorite cities

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = "fcd28ab3f43cd207c364b148bd4d575c";
        const units = "metric"; // Use metric units (Celsius)

        const cityWeatherPromises = citiesData.map((city) =>
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${apiKey}&units=${units}`
          ).then((response) => {
            if (!response.ok) {
              throw new Error(`Failed to fetch weather data for ${city.name}`);
            }
            return response.json();
          })
        );

        const weatherResponses = await Promise.all(cityWeatherPromises);
        setWeatherData(weatherResponses);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  const toggleFavorite = (cityName) => {
    setFavorites((prevFavorites) => {
      const newFavorites = new Set(prevFavorites);
      if (newFavorites.has(cityName)) {
        newFavorites.delete(cityName); // Remove from favorites
      } else {
        newFavorites.add(cityName); // Add to favorites
      }
      return newFavorites;
    });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {weatherData.length > 0 &&
          weatherData.map((cityWeather, index) => {
            const cityInfo = citiesData.find(
              (city) => city.name === cityWeather.name
            );

            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 relative"
              >
                {/* Display City Image */}
                {cityInfo?.image && (
                  <img
                    src={cityInfo.image}
                    alt={cityWeather.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                )}

                <h2 className="text-xl font-bold text-secondary mt-2 mb-2">
                  {cityWeather.name || "City not found"}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {cityWeather.weather
                    ? cityWeather.weather[0].description
                    : "No data available"}
                </p>
                <p className="text-gray-900 dark:text-white text-3xl font-bold">
                  {cityWeather.main
                    ? Math.round(cityWeather.main.temp)
                    : "N/A"}
                  °C
                </p>

                {/* Favorite Button positioned at the bottom right */}
                <button
                  onClick={() => toggleFavorite(cityWeather.name)}
                  className="absolute bottom-4 right-4 focus:outline-none"
                >
                  {favorites.has(cityWeather.name) ? (
                    <MdFavorite className="text-red-500" size={32} />
                  ) : (
                    <MdFavoriteBorder className="text-gray-400" size={32} />
                  )}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Hero;
