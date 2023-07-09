import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOneSpot, getOneSpot } from '../../store/spots';
import { getCurrentUser } from '../../store/session';
import { fetchReviewsBySpot, getReviewsBySpot } from '../../store/reviews'
import './SpotShow.css';
import ReviewIndexItem from '../ReviewIndexItem';
import { useHistory } from 'react-router-dom';
import OpenModalMenuItem from '../Navigation/OpenModalMenuItem';
import CreateReviewFormModal from '../CreateReviewFormModal';


const SpotShow = () => {
    const history = useHistory();
    const { spotId } = useParams();
    const dispatch = useDispatch();
    const spot = useSelector(getOneSpot(spotId));
    const reviews = useSelector(getReviewsBySpot);
    reviews.sort((review1, review2) => {
        const a = new Date(review1.createdAt);
        const b = new Date(review2.createdAt);
        return b - a;
    });

    const user = useSelector(getCurrentUser);
    let showCreateButton = true;
    reviews.forEach(review => {
        if (user && user.id === review.userId) {
            showCreateButton = false;
        }
    });

    const reserveHandler = (e) => {
        e.preventDefault();
        alert('Feature coming soon');
    }

    useEffect(() => {
        dispatch(fetchOneSpot(spotId))
        dispatch(fetchReviewsBySpot(spotId))
    }, [dispatch]);

    if (!spot.SpotImages) return null;

    return (
        <div className='spot-detail-wrapper-outter'>
            <div className='spot-detail-wrapper'>
                <h1>{`${spot.name}`}</h1>
                <h3>{`${spot.city},${spot.state},${spot.country}`}</h3>
                <div className='spot-detail-imgWrapper'>
                    <div className='spot-detail-imgMain'>
                        <img alt='' src={`${spot.SpotImages[0] ? spot.SpotImages[0].url : null}`} />
                    </div>
                    <div className='spot-detail-img1'>
                        <img alt='' src={`${spot.SpotImages[1] ? spot.SpotImages[1].url : null}`} />
                    </div>
                    <div className='spot-detail-img2'>
                        <img alt='' src={`${spot.SpotImages[2] ? spot.SpotImages[2].url : null}`} />
                    </div>
                    <div className='spot-detail-img3'>
                        <img alt='' src={`${spot.SpotImages[3] ? spot.SpotImages[3].url : null}`} />
                    </div>
                    <div className='spot-detail-img4'>
                        <img alt='' src={`${spot.SpotImages[4] ? spot.SpotImages[4].url : null}`} />
                    </div>
                </div>

                <div className='spot-detail-description-booking'>
                    <div className='spot-detail-decription'>
                        <h2>Hosted by {`${spot.Owner.firstName} ${spot.Owner.lastName}`}</h2>
                        <div>{spot.description}</div>
                    </div>

                    <div className='spot-booking-area'>
                        <div className='spot-booking-area-price-rating'>
                            <div className='spot-booking-area-price'><span>$ {spot.price}</span> night</div>
                            <div className='spot-booking-area-rating'>
                                <i className="fa-solid fa-star"></i>
                                {spot.avgStarRating === 0 ? 'New' : spot.avgStarRating.toFixed(1)}
                                {spot.numReviews === 1 && ' · 1 Review'}
                                {spot.numReviews > 1 && ` · ${spot.numReviews} Reviews`}
                            </div>
                        </div>
                        <div className='reserve-button-div'>
                            <button onClick={reserveHandler}>Reserve</button>
                        </div>
                    </div>
                </div>

                <div className='spot-reivew-area'>
                    <div className='spot-reivew-title'>
                        <i className="fa-solid fa-star"></i>
                        {spot.avgStarRating === 0 ? 'New' : spot.avgStarRating.toFixed(1)}
                        {spot.numReviews === 1 && ' · 1 Review'}
                        {spot.numReviews > 1 && ` · ${spot.numReviews} Reviews`}
                    </div>
                    {
                        user && (user.id !== spot.ownerId) && showCreateButton &&
                        (
                            <OpenModalMenuItem
                                itemText="Post Your Review"
                                itemType='button'
                                modalComponent={<CreateReviewFormModal spotId={spotId} />}
                            />
                        )
                    }
                    {
                        user && (user.id !== spot.ownerId) && spot.numReviews === 0 &&
                        (
                            <h2>Be the first to post a review!</h2>
                        )
                    }
                    {
                        reviews.map(review => (
                            <ReviewIndexItem key={review.id} review={review} type='spotDetail' />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default SpotShow;
