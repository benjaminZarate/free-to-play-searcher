import {useState} from 'react';
import { useGenre } from './GenreContext';

function SearchBar({games})
{
    const { selectedGenre, setSelectedGenre } = useGenre();
    const handleGenreChange = (event) => {
      setSelectedGenre(event.target.value);
    };

    const uniqueGenres = [...new Set(games.map((game) => game.genre))];

    return (
      <div className="py-4 px-4 sm:px-20 md:px-14 lg:px-20 xl:px-36">
        <label htmlFor="genre" className="block font-medium mb-1 text-white text-2xl">Select Genre:</label>
        <select
          id="genre"
          value={selectedGenre}
          onChange={handleGenreChange}
          className="w-full p-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none">
          <option value="">All Genres</option>
          {uniqueGenres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
            
    );
}

export default SearchBar;