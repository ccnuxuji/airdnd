import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteOneSpot } from '../../store/spots';
import './SpotIndexItem.css';

const SpotIndexItem = ({ spot, fromPath }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    history.push(`/spots/${spot.id}/edit`)
  }

  const handleDelete = (e) => {
    // e.preventDefault();
    dispatch(deleteOneSpot(spot.id));
    history.push(`/spots/current`)
  }

  return (
    <div className="spot-index-item">
      <Link to={`/spots/${spot.id}`}>
        <div className='spotItem-img'>
          <img alt='house image' src={`${spot.previewImage}`} />
        </div>
        <div className='spotItem-name'>{`${spot.name}`}</div>
        <div className='spotItem-address'>{`${spot.address}`}</div>
        <div className='spotItem-description'>{`${spot.description}`}</div>
      </Link>
      {
        fromPath === '/spots/current' &&
        (
          <div>
            <button
              onClick={handleUpdate}
            >Update</button>
            <button
            onClick={handleDelete}
            >Delete</button>
          </div>

        )
      }
    </div>
  );
};

export default SpotIndexItem;