import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {deleteOneReview} from '../../store/reviews'
import { getCurrentUser } from '../../store/session';
import OpenModalMenuItem from '../Navigation/OpenModalMenuItem';
import EditReviewFormModal from '../EditReviewFormModal';
import DeleteConfirmModal from '../DeleteConfirmModal';
import { useModal } from "../../context/Modal";


const ReviewIndexItem = ({ review, type }) => {
    const history = useHistory();
    const { closeModal } = useModal();
    const user = useSelector(getCurrentUser);
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteOneReview(review.id));
        closeModal();
        // history.push(`/reviews/current`)
    }

    return (
        <div>
            { type !== 'spotDetail' && <h2>{review.Spot.name}</h2>}
            { type === 'spotDetail' && <h2>Reviewed by {review.User.firstName}</h2>}
            <div>{review.createdAt}</div>
            <div>{review.review}</div>
            {
                user && user.id === review.userId &&
                (
                    <div>
                        <OpenModalMenuItem
                            itemText="Update"
                            itemType='button'
                            // onItemClick={closeMenu}
                            modalComponent={<EditReviewFormModal review={review} />}
                        />
                        <OpenModalMenuItem
                            itemType='button'
                            itemText="Delete"
                            // onItemClick={closeMenu}
                            modalComponent={<DeleteConfirmModal review={review} handleDelete={handleDelete} type='review'/>}
                        />
                    </div>
                )
            }
        </div>
    );
};

export default ReviewIndexItem;