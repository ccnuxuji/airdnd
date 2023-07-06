import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SpotForm from '../SpotForm';
import { fetchOneSpot, getOneSpot } from '../../store/spots';
import { useEffect } from 'react';

const EditSpotForm = () => {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const spot = useSelector(getOneSpot(spotId)); // populate from Redux store
  console.log(spot)
  for (let i = 0; i < 5; i++) {
    if(spot.SpotImages && spot.SpotImages[i]) {
      spot.SpotImages.push({url: '', preview: false})
    } 
  }
 

  useEffect(() => {
    dispatch(fetchOneSpot(spotId))
  }, [dispatch]);

  if (!spot.id || spot.id != spotId) return(<></>);

  return (
    Object.keys(spot).length > 1 && (
      <>
        <SpotForm
          spot={spot}
          formType="Update Spot"
        />
      </>
    )
  );
};

export default EditSpotForm;