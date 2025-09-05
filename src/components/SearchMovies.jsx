import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovies } from "../api/Tmdb";
import MovieCard from "./MovieCard";
import Header from "./Header";
import Loader from "./Loader";

const SearchMovies = () => {
  const [searchedMovies, setSearchedMovies] = useState([])
  const { query } = useParams();
  useEffect(() => {
    const search = async () => {
      const response = await searchMovies(query);
      setSearchedMovies(response.data.results);
    }
    search();
  }, [query])
  return (
    <div>
      <h2 className="text-white text-center text-3xl font-medium">Search Results for <span className="text-red-500 font-bold text-4xl">"{query}"</span></h2>
      <div className="grid grid-cols-2 md:grid-cols-2 md:ml-60 lg:grid-cols-4 gap-4 lg:ml-70 p-4">
        {searchedMovies.length > 0 ? (
          searchedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  )
}

export default SearchMovies