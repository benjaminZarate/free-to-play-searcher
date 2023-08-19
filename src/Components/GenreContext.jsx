import React, {createContext, useContext, useState} from 'react';

const GenreContext = createContext();

export function GenreProvider({children})
{
    const [selectedGenre, setSelectedGenre] = useState(null);

    return(
        <GenreContext.Provider value={{selectedGenre, setSelectedGenre}}>{children}</GenreContext.Provider>
    );
}

export function useGenre()
{
    return useContext(GenreContext);
}