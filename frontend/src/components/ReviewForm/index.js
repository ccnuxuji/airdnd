import './ReviewForm.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useModal } from "../../context/Modal";
import { createOneReview, updateOneReview } from '../../store/reviews'
import { fetchOneSpot } from '../../store/spots';

function ReviewForm({ review, spotId, formType }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [reviewContent, setReviewContent] = useState(review.review);
    const [rating, setRating] = useState(review.stars);
    const [errors, setErrors] = useState({});
    const { closeModal } = useModal();


    const handleRatingChange = (event) => {
        const selectedRating = parseInt(event.target.value);
        setRating(selectedRating);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        review = { ...review, stars: rating, review: reviewContent };
        try {
            if (formType === "Create") {
                await dispatch(createOneReview(spotId, review));
            } else {
                // the other case is "Update"
                await dispatch(updateOneReview(review));
            }
            closeModal();

        } catch (error) {
            setErrors({ ...error.errors });
        }

    };

    useEffect(() => {
        const errorsObject = {};
        if (reviewContent.length < 10) {
            errorsObject.review = "Review field is required";
        }
        if (rating < 1) {
            errorsObject.rating = 'star rating is required'
        }
        setErrors(errorsObject);

    }, [reviewContent, rating]);

    return (
        <>
            <div className="edit-review-modal">
                <div className="edit-review-header">
                    <h2>How was your stay {formType === 'Update' ? `at ${review.Spot.name}` : ''}?</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='review-textarea-wrapper'>
                        <textarea
                            type="text"
                            value={reviewContent}
                            onChange={(e) => setReviewContent(e.target.value)}
                            placeholder="leave your review here..."
                            required
                        />
                    </div>
                    <div className='star-rating-wrapper'>
                        <div className="star-rating">
                            <div className='star-text'>
                                <div>Stars</div>
                            </div>
                            <input
                                type="radio"
                                id="star5"
                                name="rating"
                                value="5"
                                checked={rating === 5}
                                onChange={handleRatingChange}
                            />
                            <label htmlFor="star5">&#9733;</label>
                            <input
                                type="radio"
                                id="star4"
                                name="rating"
                                value="4"
                                checked={rating === 4}
                                onChange={handleRatingChange}
                            />
                            <label htmlFor="star4">&#9733;</label>
                            <input
                                type="radio"
                                id="star3"
                                name="rating"
                                value="3"
                                checked={rating === 3}
                                onChange={handleRatingChange}
                            />
                            <label htmlFor="star3">&#9733;</label>
                            <input
                                type="radio"
                                id="star2"
                                name="rating"
                                value="2"
                                checked={rating === 2}
                                onChange={handleRatingChange}
                            />
                            <label htmlFor="star2">&#9733;</label>
                            <input
                                type="radio"
                                id="star1"
                                name="rating"
                                value="1"
                                checked={rating === 1}
                                onChange={handleRatingChange}
                            />
                            <label htmlFor="star1">&#9733;</label>
                        </div>
                    </div>

                    {errors.credential && (
                        <p>{errors.credential}</p>
                    )}
                    <div className='review-submit-button-wrapper'>
                        <button
                            disabled={Object.keys(errors).length !== 0}
                            type="submit">Submit Your Review
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ReviewForm;