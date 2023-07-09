import { useModal } from "../../context/Modal";
import './DeleteConfirmModal.css';


function DeleteConfirmModal({ review, spot, handleDelete, type }) {
    const { closeModal } = useModal();

    const handleCancel = (e) => {
        e.preventDefault();
        closeModal();

    }
    return (
        <div>
            <h1>Confirm Delete</h1>
            <h1>Are you sure you want to delete this {type} ?</h1>
            <button className="delete-button" onClick={handleDelete}>Yes (Delete {type})</button>
            <button className="cancelDelete-button" onClick={handleCancel}>No (Keep {type})</button>
        </div>
    );
}

export default DeleteConfirmModal;
