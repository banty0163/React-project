import { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const API_KEY = "c8b5d8c9";

  const searchMovies = () => {
    if (!query) return;

    fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]);
          alert(data.Error);
        }
      })
      .catch((err) => console.error("API Error:", err));

    setQuery("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 flex flex-col items-center p-8">
      <h1 className="text-5xl font-extrabold mb-8 text-center text-gray-800 drop-shadow-lg">
        🎬 Movie Search App
      </h1>

      <div className="flex w-full max-w-xl mb-8 shadow-lg rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 p-3 text-lg border-none focus:ring-2 focus:ring-purple-400 outline-none"
        />
        <button
          onClick={searchMovies}
          className="bg-purple-600 text-white font-semibold px-6 hover:bg-purple-700 transition"
        >
          Search
        </button>
      </div>

      {movies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {movies.map((movie) => (
            <div
              key={movie.imdbID}
              className="bg-white rounded-xl shadow-xl hover:scale-105 transform transition duration-300 overflow-hidden"
            >
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/300x450?text=No+Image"
                }
                alt={movie.Title}
                className="w-full h-80 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="font-bold text-xl text-gray-800">{movie.Title}</h2>
                <p className="text-gray-500">{movie.Year}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 mt-12 text-lg">Search for a movie to see results.</p>
      )}
    </div>
  );
}

export default App;
