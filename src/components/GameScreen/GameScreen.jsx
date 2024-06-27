import { useState } from "react"

const GameScreen = ({pokemonData, setGameCondition}) => {
    const [selected, setSelected] = useState([])

    console.log(pokemonData)

    const handleMatch = id => {
        if (!selected.includes(id)) {
            setSelected(prevSelected => [...prevSelected, id])
        } 
    }

    if (selected.length >= 10) {
        setGameCondition('win')
    }

    return (
        <div className="cards-container">
            {pokemonData.map(pokemon => (
                <div key={pokemon.id} onClick={() => handleMatch(pokemon.id)}>
                    <h3>{pokemon.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default GameScreen