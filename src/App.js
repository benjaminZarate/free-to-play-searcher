import './App.css';
import GameCards from './Components/GameCards';
import {React, useEffect, useState } from 'react';
import SearchBar from './Components/SearchBar';
import { GenreProvider } from './Components/GenreContext';
import Title from './Components/Title';
import Footer from './Components/Footer';
import LoadingSpin from './Components/LoadingSpin';

function App() {
  const [games, setGames] = useState(null);

  useEffect(() => {
    const reqApi = async() => 
    {
      const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ee72a4cb6dmsh9697385719b5263p1c6205jsn2ed1244015b6',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setGames(result);
      } catch (error) {
        console.error(error);
      }
    }
    reqApi();
  });

  return (
    <GenreProvider>
      <div className="App">
        <Title />
        {games ? <SearchBar games={games}/> : <LoadingSpin/>}
        {games ? <GameCards games={games}/> : <LoadingSpin/>}
        <Footer />
      </div>
    </GenreProvider>
  );
}

export default App;
