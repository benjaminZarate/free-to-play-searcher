import React from 'react';

function Card({game})
{
    return(
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-cyan-50">
        <a href={game.game_url} target='_blank'><img className="w-full" src={game.thumbnail} alt={game.title}/></a>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{game.title}</div>
          <p className="text-gray-700 text-base">
            {game.short_description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{game.genre} </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{game.platform}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{game.developer}</span>
        </div>
      </div>
    );
}

export default Card;