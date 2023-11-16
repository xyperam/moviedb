import React, { useEffect, useState } from 'react';
import Navbar from '../components/molecules/Navbar';
import GenreList from '../components/molecules/GenreList';
import { useSelector, useDispatch } from 'react-redux';
import { getGenres, getMoviesByGenre } from '../redux/action/homeAction';
import Card from '../components/atom/Card/Card';
function Movies() {
  const [selectedGenre, setSelectedGenre] = useState('');
  const { genres, movies } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getMoviesByGenre(selectedGenre)); // Panggil aksi getMoviesByGenre saat komponen di-mount
  }, [dispatch, selectedGenre]);

  const filteredMovies = selectedGenre
    ? movies.filter((movie) => movie.genre_ids.includes(parseInt(selectedGenre)))
    : movies;

  const handleGenreChange = (genreId) => {
    setSelectedGenre(genreId);
    dispatch(getMoviesByGenre(genreId)); // Panggil aksi getMoviesByGenre saat genre berubah
  };

  return (
    <>
      <Navbar />
      <GenreList data={genres} onChangeGenre={handleGenreChange} />
      <div>
        <div className="container mx-auto mt-3 text-black">
        <h1>Movies</h1>
        <div className="flex flex-wrap justify-between">
          {filteredMovies.map((movie) => (
             <Card
             key={movie.id}
             id={movie.id}
             title={movie.title}
             vote_average={movie.vote_average}
             image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
             />
              ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default Movies;