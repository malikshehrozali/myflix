import { useEffect, useState } from 'react'
import { fetchMovies } from '../api/Tmdb'
import MovieCard from './MovieCard';
import { useLocation } from 'react-router';
import Loader from './Loader';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const MovieList = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([])

    const settings = {
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        arrows: false,
    };

    const getMovies = async () => {
        const response = await fetchMovies()
        setMovies(response.data.results)
    }
    useEffect(() => {
        getMovies();
    }, [])
    return (
        <div className="pt-4">
            {/* <Slider {...settings} className='h-[55vh] shadow-md  md:ml-64'>
                {movies.slice(0, 10).map((movie) => (
                    <img key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} className="h-[60vh] object-cover rounded-xl p-5" />
                ))}
            </Slider> */}
            <h3 className='text-left md:ml-[20rem] ml-4 text-4xl font-semibold bg-white w-fit rounded-lg mt-10 text-black p-2 '>{location.pathname === '/popular' ? 'Popular ' : ''}<span className='text-red-500'>Movies</span></h3>
            {movies.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-20 md:mt-0 md:ml-64">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            ) : (
                <Loader />
            )}
        </div>
    )
}

export default MovieList