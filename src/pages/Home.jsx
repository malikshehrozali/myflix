
import { Link } from 'react-router';
import Aurora from '../components/Aurora';
import MovieList from '../components/MovieList'
import { FaAnglesDown } from "react-icons/fa6";



const Home = () => {


  return (
    <div>
      <div className='relative w-full h-screen md:pl-64'>
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col justify-center items-center text-white'>
          <h2 className='text-4xl font-bold md:text-6xl'>Unlimited movies, TV<br />shows, and more</h2>
          <button onClick={() => { window.scrollTo({ top: window.innerHeight, behavior: 'smooth' }) }} className='px-4 py-2 bg-red-500 hover:bg-red-600 text-white mt-4 rounded-lg'>Watch Now</button>
        </div>
        <div className='absolute w-full bottom-25 left-0 flex flex-col items-center justify-center text-white gap-2'>
          <p className='text-lg'>Scroll Down</p>
          <div className='border-2 p-3 cursor-pointer w-15 h-15 rounded-lg flex items-center justify-center'> <FaAnglesDown onClick={() => { window.scrollTo({ top: window.innerHeight, behavior: 'smooth' }) }} size={40} className='animate-bounce text-red-400 h-18 ' /></div>
        </div>

      </div>
      <MovieList />
    </div>
  )
}

export default Home