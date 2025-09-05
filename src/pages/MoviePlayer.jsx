import { useParams } from "react-router"

const MoviePlayer = () => {
    const { movieId } = useParams();
    const movieUrl = `https://vidsrc.xyz/embed/movie/${movieId}`
    // const movieUrl = `https://vidsrc.xyz/embed/movie/${movieId}&ds_lang=en`
    return (
        <div className="w-[80vw] h-[80vh] flex justify-center items-center translate-x-1/5 translate-y-1/10 ">
            <iframe src={movieUrl} width="100%" height="100%" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default MoviePlayer