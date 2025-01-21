import './Style.css';

const Content = ({setIsModalOpen}) => {
    return (<div className="modal_content">
        <p>Your modal window is open</p>
        <button onClick={() => setIsModalOpen(false)}>CLOSE MODAL WINDOW</button>
    </div>)
}

export default Content