import React from 'react'
import Gap from '../atom/Gap/Gap'

function DetailMovieSection({movie,genres}) {
  return (
    <>
          <section>
      <div className='relative'>
      <div className='absolute w-full'
      style={{ top: 0, bottom: 0 }}
      >
        <img className='object-cover blur-[4px]'
        style={{ width: '100%', height: '100%' }}
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
      </div>
      <div
    className='absolute top-0 left-0 w-full h-full'
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
    </div>
      <div className='container mx-auto relative '>
      <div className='flex flex-col md:flex-row bg-red items-center'>
        <div className='py-10'>
      <img className='h-96 max-w-2xl md:max-h-full' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
        </div>
      <div className='flex  flex-col justify-center text-white px-10 '>
        <div className='flex md:flex-row flex-wrap items-center lg:justify-start sm:justify-center '>
      <h1 className='font-bold text-5xl md:text-center'>{movie.title} </h1>
      <h1 className='mx-2 text-4xl md:text-center '>({new Date(movie.release_date).getFullYear()})</h1>
        </div>
      <div className=''>
        <p>
        {genres.map((genre, index) => (
          <span key={genre.id}>
            {genre.name}
            {index < genres.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>
      <Gap height={10}/>
      <h1 className='text-4xl font-bold'>Overview</h1>
      <Gap height={3}/>
      <p className='text-justify'>{movie.overview}</p>
      </div>
      </div>
      </div>
       </div>
       </div>
       </section>
    </>
  )}
export default DetailMovieSection
