import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOneSpot, getOneSpot } from '../../store/spots';
import './SpotShow.css';


const SpotShow = () => {
    const { spotId } = useParams();
    console.log(spotId)
    const dispatch = useDispatch();
    const spot = useSelector(getOneSpot(spotId));
    useEffect(() => {
        dispatch(fetchOneSpot(spotId))
    }, [dispatch]);

    if (!spot.SpotImages) return null;

    return (
        <div className='spot-detail-wrapper'>
            <h1>{`${spot.name}`}</h1>
            <h3>{`${spot.city},${spot.state},${spot.country}`}</h3>
            <div className='spot-detail-imgWrapper'>
                <div className='spot-detail-imgMain'>
                    <img src={`${spot.SpotImages[0] ? spot.SpotImages[0].url : null}`} />
                </div>
                <div className='spot-detail-img'>
                    <img src={`${spot.SpotImages[1] ? spot.SpotImages[1].url : null}`} />
                </div>
                <div className='spot-detail-img'>
                    <img src={`${spot.SpotImages[2] ? spot.SpotImages[2].url : null}`} />
                </div>
                <div className='spot-detail-img'>
                    <img src={`${spot.SpotImages[3] ? spot.SpotImages[3].url : null}`} />
                </div>
                <div className='spot-detail-img'>
                    <img src={`${spot.SpotImages[4] ? spot.SpotImages[4].url : null}`} />
                </div>
            </div>

            <div>
                <h1>Hosted by {`${spot.Owner.firstName} ${spot.Owner.lastName}`}</h1>
                <div>{spot.description}</div>
                <div className='spot-booking-area'>
                    <span>{spot.price} <i className="fa-solid fa-star"></i> {spot.avgStarRating} {spot.numReviews} reviews</span>
                    <button>Reserve</button>
                </div>
            </div>

            <div className='spot-reivew'>
                <div>{spot.price} <i className="fa-solid fa-star"></i> {spot.avgStarRating} {spot.numReviews} reviews</div>

            </div>

        </div>
    );
};

export default SpotShow;
