import './StageScreen.scss'

const StageScreen = ({ setStage, setLoading }) => {

    const configureGame = stage => {
        setStage(stage)
        setLoading(true)
    }

    return (
        <div>
            <h2>Select a difficulty</h2>

            <ul>
                <li onClick={() => configureGame('grassland')}>Grassland</li>
                <li onClick={() => configureGame('forest')}>Forest</li>
                <li onClick={() => configureGame("waters-edge")}>Water's Edge</li>
                <li onClick={() => configureGame('sea')}>Sea</li>
                <li onClick={() => configureGame('mountain')}>Mountain</li>
                <li onClick={() => configureGame('rough-terrain')}>Rough Terrain</li>
                <li onClick={() => configureGame('urban')}>Urban</li>
                <li onClick={() => configureGame('rare')}>Rare</li>
            </ul>
        </div>
    )
}

export default StageScreen
