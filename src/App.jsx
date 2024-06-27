import { v4 as uuid } from 'uuid';
import { useEffect, useState } from 'react';
import './App.scss';
import StageScreen from './components/StageScreen/StageScreen';
import GameScreen from './components/GameScreen/GameScreen';
import HashLoader from 'react-spinners/HashLoader';

function App() {
  const [stage, setStage] = useState('');
  const [loading, setLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState([]);

  // randomly selects 10 pokemons and add them to state
  const getRandomPokemons = (pokemons) => {
    const shuffledList = [...pokemons].sort(() => 0.5 - Math.random());
    const slicedList = shuffledList.slice(0, 10);
    return slicedList.map(pokemon => ({ ...pokemon, id: uuid() }));
  };

  useEffect(() => {
    const fetchPokemonData = async () => {
      if (!stage) return;
      setLoading(true);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-habitat/${stage}`);
        const data = await response.json();
        const pokemons = data["pokemon_species"];
        console.log(pokemons);
        const randomPokemons = getRandomPokemons(pokemons);
        setPokemonData(randomPokemons);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    fetchPokemonData();
  }, [stage]);

  return (
    <div className='game-container'>
      <h1>PokeMatch</h1>
      {loading && <HashLoader color='green' size={100} className='loader' />}
      {!loading && pokemonData.length === 0 ? (
        <StageScreen setStage={setStage} setLoading={setLoading} />
      ) : (
        <GameScreen pokemonData={pokemonData} />
      )}
    </div>
  );
}

export default App;
