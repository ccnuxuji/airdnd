import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./EditReviewForm.css";
import ReviewForm from "../ReviewForm";

function EditReviewFormModal({ review }) {
    const dispatch = useDispatch();
    const formType = 'Update';
    const { closeModal } = useModal();

    console.log(review)

    return (
        <>
            <ReviewForm 
                review={review}
                formType={formType}
            />
        </>
    );
}

export default EditReviewFormModal;
