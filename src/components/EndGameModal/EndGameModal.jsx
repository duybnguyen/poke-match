import './EndGameModal.scss'

const EndGameModal = ({ headerText, finalScore, setEndModal, endImg}) => {


    return (
        <dialog open className='endModal'>
            <h2>{headerText}</h2>
            <img src={endImg} alt="status gif" />
            <p>Your final score is <span>{finalScore}</span></p>
            <button onClick={setEndModal}>Close</button>

        </dialog>
    )
}

export default EndGameModal