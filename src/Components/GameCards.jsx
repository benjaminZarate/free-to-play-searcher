import React from 'react';
import { useGenre } from './GenreContext';
import Card from './Card';

function GameCards({games})
{
  const {selectedGenre} = useGenre();
  
  const filteredGames = selectedGenre ? games.filter((game) => game.genre === selectedGenre) : games;

  return(
    <div>
      <div className="grid grid-cols-4 gap-4 p-10">
        {filteredGames.map((game, index) => (
          <Card game={game}/>
        ))}
      </div>
    </div>
    );
}

export default GameCards;