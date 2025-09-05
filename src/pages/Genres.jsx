import MovieCard from "../components/MovieCard";
import Header from "../components/Header";
import { getGenreMovies } from '../api/Tmdb';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loader from "../components/Loader";

const Genres = () => {
    const { query } = useParams();
    const [genreMovies, setGenreMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const Genres = [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ]
    const getGenreName = (name) => {
        const genre = Genres.find((genre) => genre.name.toLowerCase() === name.toLowerCase());
        return genre ? genre.id : null;
        console.log(genre.id);
    }
    useEffect(() => {
        const fetchMoviesByGenre = async () => {
            setLoading(true);
            const genreId = getGenreName(query);
            const response = await getGenreMovies(genreId);
            setGenreMovies(response.data.results);
            setLoading(false);
        };
        fetchMoviesByGenre();
    }, [query])
    if (loading) {
        return <Loader />;
    }

    return (
        <div>
            <Header />
            <h2 className="text-white text-center text-3xl font-medium">Search Results for <span className="text-red-500 font-bold text-4xl">"{query}"</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-2 md:ml-60 lg:grid-cols-4 gap-4 lg:ml-70 p-4">
                {genreMovies.length > 0 ? (
                    genreMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                ) : (
                    <p className="text-white text-center col-span-full">No results found.</p>
                )}
            </div>
        </div>
    )
}

export default Genres