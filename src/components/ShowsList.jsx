import { fetchShows } from '../api/Tmdb'
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import Loader from './Loader'

const ShowsList = () => {
    const [shows, setShows] = useState([])
        const getShows = async () =>{
            const response = await fetchShows();

            setShows(response.data.results)
            console.log(response.data.results);
            
          }
          useEffect(() => {
              getShows();
          },[])
  return (
    <div className="pt-4">
        <h3 className='text-left md:ml-[20rem] ml-4 text-4xl font-semibold bg-white w-fit rounded-lg text-black p-2 '>TV <span className='text-red-500'>Shows</span></h3>
        {shows.length > 0 ? (
            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-20 md:mt-0 md:ml-64">
                {shows.map((shows) => (
                <MovieCard key={shows.id} movie={shows} />
                ))}
            </div>
            ) : (
            <Loader />
            )}
    </div>
  )
}

export default ShowsList