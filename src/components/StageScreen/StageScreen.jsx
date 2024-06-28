import './StageScreen.scss'

const StageScreen = ({ setStage, setLoading }) => {

    const configureGame = stage => {
        setStage(stage)
        setLoading(true)
    }

    return (
        <dialog open>
            <h2>Select A Stage</h2>

            <ul>
                <li onClick={() => configureGame('grassland')}>Grassland</li>
                <li onClick={() => configureGame('forest')}>Forest</li>
                <li onClick={() => configureGame("waters-edge")}>Water's Edge</li>
                <li onClick={() => configureGame('sea')}>Sea</li>
                <li onClick={() => configureGame('mountain')}>Mountain</li>
                <li onClick={() => configureGame('rough-terrain')}>Rough Terrain</li>
                <li onClick={() => configureGame('urban')}>Urban</li>
            </ul>
        </dialog>
    )
}

export default StageScreen
