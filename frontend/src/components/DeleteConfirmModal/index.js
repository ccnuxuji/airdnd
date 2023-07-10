import { useModal } from "../../context/Modal";
import './DeleteConfirmModal.css';


function DeleteConfirmModal({ review, spot, handleDelete, type }) {
    const { closeModal } = useModal();

    const handleCancel = (e) => {
        e.preventDefault();
        closeModal();

    }
    return (
        <div className="delete-modal-wrapper">
            <div className="delete-modal-title">
                <h1>Confirm Delete</h1>
            </div>
            <div className="delete-confirm-text">
                <p>Are you sure you want to delete this {type} ?</p>
            </div>
            <div className="delete-modal-button-wrapper">
                <button className="delete-button" onClick={handleDelete}>Yes (Delete {type})</button>
                <button className="cancelDelete-button" onClick={handleCancel}>No (Keep {type})</button>
            </div>

        </div>
    );
}

export default DeleteConfirmModal;
