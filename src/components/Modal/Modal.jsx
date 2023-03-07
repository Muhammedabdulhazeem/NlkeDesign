import './Modal.css'
import { useModal } from '../../hooks/useModal';


const Modal = () => {
    const { modal: {bool, src}, showModal } = useModal()

    return (
        (bool && (<div className="modal">
                <div className="img">
                    <img className='' src={src} alt="watch" />
                </div>
                <span onClick={() => showModal({bool: false})}>X</span>
        </div>))
    );
}
 
export default Modal;