import React from 'react'
import Card from '../atom/Card/Card'
const SearchResult = ({data}) => {
  return (
       <div className="container mx-auto mt-3">
        <h2>Search Results</h2>
        <div className="flex flex-wrap justify-between">
         {data.map(item => (
             <Card
             key={item.id}
             id={item.id}
             original_title={item.original_title}
             vote_average={item.vote_average}
             image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
             />
             ))}
        </div>
      </div>
  )
}

export default SearchResult