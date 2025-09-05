import axios from "axios";


// Create Axios instance
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: '144183ccd004474701c71f449858700a',
    language: 'en-US'
  },
});

// Example API calls
// ?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc
export const fetchMovies = async () => {
  try {
    const response = await api.get("/discover/movie");
    return response;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
};

export const fetchShows = async () => {
  try {
    const response = await api.get("/discover/tv")
    return response;
  } catch (error) {
    console.log("Error fetching shows:", error);
    return [];
  }
}

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await api.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await api.get(`/search/multi?query=${query}`, {
      params: { query },
    });
    return response;
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};
export const getGenreMovies = async (query) => {
  try {
    const response = await api.get(`/discover/movie?include_adult=true&include_video=false`, {
      params: {
        with_genres: query
      },
    });
    return response;
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};


