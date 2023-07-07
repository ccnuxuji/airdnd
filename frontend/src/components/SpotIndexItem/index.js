import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteOneSpot } from '../../store/spots';
import OpenModalMenuItem from '../Navigation/OpenModalMenuItem';
import DeleteConfirmModal from '../DeleteConfirmModal';
import { useModal } from "../../context/Modal";



import './SpotIndexItem.css';

const SpotIndexItem = ({ spot, fromPath }) => {
  const { closeModal } = useModal();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    history.push(`/spots/${spot.id}/edit`)
  }

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteOneSpot(spot.id));
    closeModal();
    history.push(`/spots/current`)
  }

  return (
    <div className="spot-index-item">
      <Link to={`/spots/${spot.id}`}>
        <div className='spotItem-img'>
          <img alt='house' src={`${spot.previewImage}`} />
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
            <OpenModalMenuItem
              itemType='button'
              itemText="Delete"
              // onItemClick={closeMenu}
              modalComponent={<DeleteConfirmModal spot={spot} handleDelete={handleDelete} type='spot' />}
            />
          </div>

        )
      }
    </div>
  );
};

export default SpotIndexItem;