import React, { useState } from 'react';

const GenreList = ({data,onChangeGenre}) => {
    const [selectedGenre, setSelectedGenre] = useState();
    
    const handleGenreChange = (e) => {
    const selectedValue = e.target.value;
    console.log('Selected Genre:', selectedValue);
    setSelectedGenre(selectedValue);
    onChangeGenre(selectedValue);
  };

    return (
    <div>
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Genre</label>
    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    id="genre"
    value={selectedGenre}
    onChange={handleGenreChange}
    
    >
    <option >Choose Genre</option>
    {data.map((genre) => (
        <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
    </select>
    </div>
   
  );
};

export default GenreList;