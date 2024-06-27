import React, { useState, useEffect } from "react";
import './GameScreen.scss';

const GameScreen = ({ pokemonData, setGameCondition }) => {
    const [selected, setSelected] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [cards, setCards] = useState([]);

    const shuffleCards = () => {
        const shuffledList = [...pokemonData].sort(() => 0.5 - Math.random());
        setCards(shuffledList);
    }

    useEffect(() => {
        if (pokemonData.length > 0) {
            shuffleCards();
        }
    }, [pokemonData]);

    // Update high score when score changes
    useEffect(() => {
        if (score > highScore) {
            setHighScore(score);
        }
    }, [score, highScore]);

    // Handle match function
    const handleMatch = (id) => {
        if (!selected.includes(id)) {
            setSelected(prevSelected => [...prevSelected, id]);
            setScore(prevScore => prevScore + 1);
            shuffleCards();
        }
    };


    return (
        <div className="game-container">
            <div className="score-container">
                <div className="score">SCORE: {score}</div>
                <div className="high-score">HIGH SCORE: {highScore} </div>
            </div>

            <div className="cards-container">
                {cards.map(pokemon => (
                    <div key={pokemon.id} onClick={() => handleMatch(pokemon.id)} className="card">
                        <img src={pokemon.frontImage} alt="pokemon image" />
                        <h3>{pokemon.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameScreen;
