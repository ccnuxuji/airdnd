import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./CreateReviewFormModal.css";
import ReviewForm from "../ReviewForm";

function CreateReviewFormModal({ spotId }) {
    const dispatch = useDispatch();
    const formType = 'Create';
    const { closeModal } = useModal();
    const review = {spotId, review: '', stars: 0};

    return (
        <>
            <ReviewForm
                review={review}
                spotId={spotId}
                formType={formType}
            />
        </>
    );
}

export default CreateReviewFormModal;
