import { useState } from 'react';
import { FiMenu, FiSearch, FiUser } from 'react-icons/fi';
import { AiOutlineHome, AiOutlineStar } from 'react-icons/ai';
import { MdCategory, MdFavorite } from 'react-icons/md';
import { Link, useNavigate } from 'react-router';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { searchMovies } from '../api/Tmdb';


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [genreId, setGenreId] = useState();
  const [selectedGenre, setSelectedGenre] = useState("Genre");


  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
    searchMovies(search);
    navigate(`/search/${search}`);
    window.location.reload();
    setMenuOpen(false);

  }

  const handleGenre = (query) => {
    navigate(`/genre/${query}`);
    setMenuOpen(false);
  }



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

  return (
    <header className="flex md:flex-col bg-black z-10 border-b-2 lg:border-r-2 lg:border-b-0 text-white md:h-screen md:w-64 w-full items-center md:items-stretch justify-between p-4 md:fixed">
      {/* Logo and Mobile Menu Button */}
      <div className="flex justify-between items-center w-full md:mb-6">
        <div className="text-2xl font-bold">My <span className='text-red-500 text-3xl'>Flix</span></div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          <FiMenu />
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-col space-y-4">
        <div className="relative">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full px-3 py-2 rounded bg-gray-800 text-sm"
            />
            <button type='submit' className='cursor-pointer'><FiSearch className="absolute right-3 top-2.5 text-gray-400" /></button>
          </form>
        </div>
        <div className=''>
          <Link to='/' className='flex items-center space-x-2 cursor-pointer'><AiOutlineHome /> <span>Home</span></Link>
          <Link to='/popular' className='flex items-center space-x-2 cursor-pointer'><AiOutlineStar /> <span>Popular</span></Link>
          <Link to='/tv-shows' className='flex items-center space-x-2 cursor-pointer'><MdFavorite /> <span>Tv Shows</span></Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Link className='flex items-center space-x-2 cursor-pointer'><MdCategory /> <div className='flex items-center justify-center space-x-2'><span>{selectedGenre}</span> <IoMdArrowDropdownCircle /></div></Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuRadioGroup value={genreId} onValueChange={handleGenre}>
                {Genres.map((genre) => (
                  <DropdownMenuRadioItem key={genre.id} value={genre.name} onClick={() => setSelectedGenre(genre.name)}>{genre.name}</DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="md:hidden absolute top-16 left-0 right-0 bg-gray-800 px-4 py-2 z-10 rounded shadow">
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 rounded bg-gray-700 text-sm"
            />
            <FiSearch className="absolute right-3 top-2.5 text-gray-400" />
          </div>
          <div className="flex flex-col space-y-2">
            <div className=''>
              <Link to='/' className='flex items-center space-x-2 cursor-pointer'><AiOutlineHome /> <span>Home</span></Link>
              <Link to='/' className='flex items-center space-x-2 cursor-pointer'><AiOutlineStar /> <span>Popular</span></Link>
              <Link to='/' className='flex items-center space-x-2 cursor-pointer'><MdFavorite /> <span>Favourites</span></Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Link className='flex items-center space-x-2 cursor-pointer'><MdCategory /> <div className='flex items-center justify-center space-x-2'><span>{selectedGenre}</span> <IoMdArrowDropdownCircle /></div></Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuRadioGroup value={genreId} onValueChange={handleGenre}>
                    {Genres.map((genre) => (
                      <DropdownMenuRadioItem key={genre.id} value={genre.name} onClick={() => setSelectedGenre(genre.name)}>{genre.name}</DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>

            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
