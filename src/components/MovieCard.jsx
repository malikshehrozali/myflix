import { Link } from "react-router"

const MovieCard = ({movie}) => {
    
  return (
    <Link to={`/movie/${movie.id}`} className="bg-white rounded-lg shadow-md cursor-pointer overflow-hidden text-black w-full lg:h-[42rem]">
        <div className="relative flex justify-center items-center mt-3 p-2">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="lg:w-[20rem] rounded-lg lg:h-[30rem] object-cover object-center"/>
            <p className="text-white font-semibold text-sm absolute bottom-4 left-4 bg-red-500 p-2 rounded-lg ">{movie.release_date ? movie.release_date : movie.first_air_date}</p>   
            {movie.adult ? <p className="absolute top-4 right-4 bg-red-500 text-white font-semibold text-md p-2 rounded-lg">18+</p> : null}     
        </div>
        <div className="p-4 flex flex-col gap-2">
            <h2 className="text-lg font-bold">{movie.title}</h2>
            <p className="hidden lg:block">{movie.overview?.substring(0, 60) + "..."}</p>
            <p to={`/movie/${movie.id}`} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">Watch Now</p>
        </div>
    </Link>
  )
}

export default MovieCard