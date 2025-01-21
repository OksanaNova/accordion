import './Style.css';

const Modal = ( {setIsModalOpen, children} ) => {

    const closeModal = e => {
        if (e.target.classList.contains('overlay')) {
            setIsModalOpen(false)
        }
    }

    return (
        <div className='modal'>
            <div className='overlay' onClick={closeModal}>{children}</div>
        </div>
    )
}

export default Modal;