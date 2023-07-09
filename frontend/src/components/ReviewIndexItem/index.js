import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteOneReview } from '../../store/reviews'
import { getCurrentUser } from '../../store/session';
import OpenModalMenuItem from '../Navigation/OpenModalMenuItem';
import EditReviewFormModal from '../EditReviewFormModal';
import DeleteConfirmModal from '../DeleteConfirmModal';
import { useModal } from "../../context/Modal";
import './ReviewIndexItem.css';


const ReviewIndexItem = ({ review, type }) => {
    const history = useHistory();
    const { closeModal } = useModal();
    const user = useSelector(getCurrentUser);
    const dispatch = useDispatch();
    const date = new Date(review.createdAt);

    let year = date.getFullYear();
    let month = date.getMonth();
    const monthName =  [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteOneReview(review));
        closeModal();
    }

    return (
        <div className='review-item'>
            {type !== 'spotDetail' && <div className='review-item-spotname'>{review.Spot.name}</div>}
            {type === 'spotDetail' && <div className='review-item-firstname'>{review.User.firstName}</div>}
            <div className='review-create-time'>
                {`${monthName[month]} ${year}`}
            </div>
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
                            modalComponent={<DeleteConfirmModal review={review} handleDelete={handleDelete} type='review' />}
                        />
                    </div>
                )
            }
        </div>
    );
};

export default ReviewIndexItem;