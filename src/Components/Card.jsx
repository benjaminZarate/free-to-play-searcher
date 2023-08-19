import React from 'react';

function Card({game})
{
    return(
      <div className="my-8 rounded shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
                x-for="(post, index) in posts">
        <a href={game.game_url} target='_blank' rel="noreferrer" className="cursor-pointer">
          <figure>
            <img src={game.thumbnail} className="rounded-t h-72 w-full object-cover" alt="thumbnail"/>
            <figcaption className="p-4">
                <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"
                    x-text={game.title}>
                      {game.title}
                </p>
                <small
                    className="leading-5 text-gray-500 dark:text-gray-400"
                    x-text={game.short_description}>
                      {game.short_description}
                </small>
            </figcaption>
          </figure>
        </a>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{game.genre} </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{game.platform}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{game.developer}</span>
        </div>
      </div>      
    );
}

export default Card;