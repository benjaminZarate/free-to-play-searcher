import React from 'react';
import { useGenre } from './GenreContext';
import Card from './Card';

function GameCards({games})
{
  const {selectedGenre} = useGenre();
  
  const filteredGames = selectedGenre ? games.filter((game) => game.genre === selectedGenre) : games;

  return(
    <div>
      <div className="grid grid-flow-row gap-2 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
        {filteredGames.map((game, index) => (
          <Card game={game}/>
        ))}
      </div>
    </div>
    );
}

export default GameCards;