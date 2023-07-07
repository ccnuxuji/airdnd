import { useHistory } from 'react-router-dom';
import SpotIndexItem from '../SpotIndexItem';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSpots, getSpots, fetchCurrentSpots, getCurrentSpots } from '../../store/spots';
import { getCurrentUser } from '../../store/session';
import { useEffect } from 'react';
import './SpotIndex.css';

const SpotIndex = () => {
  const history = useHistory();
  const path = window.location.pathname;
  const spots = useSelector(getSpots);
  const currentSpots = useSelector(getCurrentSpots);
  const user = useSelector(getCurrentUser);
  const dispatch = useDispatch();

  const createNewSpotHandler = (e) => {
    e.preventDefault();
    history.push(`/spots/new`)
  }

  useEffect(() => {
    dispatch(fetchSpots());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
       dispatch(fetchCurrentSpots());
    }
  }, [dispatch, user]);

  return (
    <div>
      {
        path === "/spots/current" &&
        (
          <div>
            <div>Manage your spots</div>
            <button
              onClick={createNewSpotHandler}
            >Create a new spot</button>

            <div className='spot-index-all'>
              {currentSpots.map((spot) => (
                <SpotIndexItem
                  fromPath={path}
                  spot={spot}
                  key={spot.id}
                />
              ))}
            </div>
          </div>
        )
      }
      {
        path === "/" &&
        (
          <div className='spot-index-all'>
            {spots.map((spot) => (
              <SpotIndexItem
                fromPath={path}
                spot={spot}
                key={spot.id}
              />
            ))}
          </div>
        )
      }
    </div>
  );
};

export default SpotIndex;