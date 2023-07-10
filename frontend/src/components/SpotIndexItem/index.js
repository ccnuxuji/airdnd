import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import spotsReducer, { deleteOneSpot } from '../../store/spots';
import OpenModalMenuItem from '../Navigation/OpenModalMenuItem';
import DeleteConfirmModal from '../DeleteConfirmModal';
import { useModal } from "../../context/Modal";
import { useState } from 'react';


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
      <Link className='spot-item-link tooltip'
        to={`/spots/${spot.id}`}>
        <div className='spotItem-img'>
          <img alt='house' src={`${spot.previewImage}`} />
        </div>
        {/* <div className='spotItem-name'>{`${spot.name}`}</div> */}
        <div className='spot-item-address-wrapper'>
          <div className='spotItem-address'>{spot.city} , {spot.state}</div>
          <div className='spot-item-rating'>
            <i className="fa-solid fa-star" style={{color: '#ffc107'}}></i>
            <div className='spot-item-rating-value'>{spot.avgRating === 0 ? 'New' : spot.avgRating.toFixed(1)}</div>
          </div>
        </div>
        <div className='spot-item-price'>$ {spot.price} night</div>
        <span className="tooltiptext">{spot.name}</span>
      </Link>

  {
    fromPath === '/spots/current' &&
      (
        <div className='spot-item-button-area'>
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
    </div >
  );
};

export default SpotIndexItem;