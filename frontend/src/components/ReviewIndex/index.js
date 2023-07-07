import { useSelector, useDispatch } from 'react-redux';
import { getCurrentReviews, fetchCurrentReviews } from '../../store/reviews';
import ReviewIndexItem from '../ReviewIndexItem';
import { useEffect } from 'react';
import { getCurrentUser } from '../../store/session';


const ReviewIndex = () => {
    const dispatch = useDispatch();
    const reviews = useSelector(getCurrentReviews);
    const user = useSelector(getCurrentUser);

    useEffect(() => {
        if (user) {
            dispatch(fetchCurrentReviews());
        }
    }, [dispatch, user]);

    return (
        <div>
            <h1>Manage Reviews</h1>
            {
                reviews.map(review => (
                    <ReviewIndexItem
                        review={review}
                        key={review.id}
                    />
                ))
            }
        </div>
    );
};

export default ReviewIndex;