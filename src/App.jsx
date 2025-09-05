import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import TvShows from './pages/TvShows'
import Header from './components/Header'
import SearchMovies from './components/SearchMovies'
import NotFound from './pages/NotFound'
import Genres from './pages/Genres'
import MoviePlayer from './pages/MoviePlayer'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Home />} />
        <Route path="/tv-shows" element={<TvShows />} />
        <Route path="/search/:query" element={<SearchMovies />} />
        <Route path="/genre/:query" element={<Genres />} />
        <Route path="/movie/:movieId" element={<MoviePlayer />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  )
}

export default App