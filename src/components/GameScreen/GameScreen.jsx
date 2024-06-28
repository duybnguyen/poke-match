import React, { useState, useEffect } from "react";
import './GameScreen.scss';
import ReactCardFlip from 'react-card-flip';

const GameScreen = ({ pokemonData, setGameCondition, setFinalScore }) => {
    const [selected, setSelected] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [cards, setCards] = useState([]);
    const [allFlipped, setAllFlipped] = useState(false);

    const shuffleCards = () => {
        const shuffledList = [...pokemonData].sort(() => 0.5 - Math.random());
        setCards(shuffledList);
    };

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
            setAllFlipped(true);
            setTimeout(() => {
                shuffleCards();
                setAllFlipped(false);
            }, 1000);
        } else {
            setGameCondition('loss')
            setFinalScore(score)

        }
    };

    return (
        <div className="game-container">
            <div className="score-container">
                <div className="score">SCORE: {score}</div>
                <div className="high-score">HIGH SCORE: {highScore}</div>
            </div>

            <div className="cards-container">
                {cards.map(pokemon => (
                    <div key={pokemon.id} onClick={() => handleMatch(pokemon.id)} className="card">
                        <ReactCardFlip isFlipped={allFlipped} flipDirection="horizontal">
                            <div className="card-front">
                                <img src={pokemon.frontImage} alt="pokemon front" />
                                <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
                            </div>
                            <div className="card-back">
                                <img src={pokemon.backImage} alt="pokemon back" />
                            </div>
                        </ReactCardFlip>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameScreen;
