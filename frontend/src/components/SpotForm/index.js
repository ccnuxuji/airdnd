import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createOneSpot, updateOneSpot } from '../../store/spots'
import './SpotForm.css';

const SpotForm = ({ spot, formType }) => {
    const history = useHistory();
    const [country, setCountry] = useState(spot?.country);
    const [address, setAddress] = useState(spot?.address);
    const [city, setCity] = useState(spot?.city);
    const [state, setState] = useState(spot?.state);
    const [lat, setLat] = useState(spot?.lat);
    const [lng, setLng] = useState(spot?.lng);
    const [description, setDescription] = useState(spot?.description);
    const [name, setName] = useState(spot?.name);
    const [price, setPrice] = useState(spot?.price);
    const [photoUrl, setPhotoUrl] = useState(spot.SpotImages[0]?.url);
    const [photoUrl2, setPhotoUrl2] = useState(spot.SpotImages[1]?.url);
    const [photoUrl3, setPhotoUrl3] = useState(spot.SpotImages[2]?.url);
    const [photoUrl4, setPhotoUrl4] = useState(spot.SpotImages[3]?.url);
    const [photoUrl5, setPhotoUrl5] = useState(spot.SpotImages[4]?.url);
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const images = [
            {   
                ...spot.SpotImages[0],
                url: photoUrl,
                preview: true
            },
            {
                ...spot.SpotImages[1],
                url: photoUrl2,
                preview: false
            },
            {
                ...spot.SpotImages[2],
                url: photoUrl3,
                preview: false
            },
            {
                ...spot.SpotImages[3],
                url: photoUrl4,
                preview: false
            },
            {
                ...spot.SpotImages[4],
                url: photoUrl5,
                preview: false
            },
        ];
        spot = { ...spot, country, address, city, state, lat, lng, description, name, price };
        try {
            if (formType === "Create Spot") {
                const { id } = await dispatch(createOneSpot(spot, images));
                history.push(`/spots/${id}`)
            } else {
                console.log(spot)
                const { id } = await dispatch(updateOneSpot(spot, images));
                history.push(`/spots/${id}`)
            }
        } catch (error) {
            setErrors({ ...error.errors });
        }

    };

    useEffect(() => {

    }, [country, address, city, state, lat, lng, description, price]);

    return (
        <div className='spot-form-page'>
            {
                formType === 'Create Spot' ?
                    (<h1>Create a new Spot</h1>)
                    : (<h1>Edit a Spot</h1>)
            }
            <h2>Where's your place located?</h2>
            <p>Guest will only get your exact address once they booked a reservation.</p>
            <form onSubmit={handleSubmit}>
                <div className='spot-form-country'>
                    <div>Country</div>
                    <div className="errors">{errors.country}</div>
                    <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </div>

                <div className='spot-form-address'>
                    <div>Street Address</div>
                    <div className="errors">{errors.address}</div>
                    <input
                        type='text'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>

                <div className='spot-form-city-state'>
                    <div className='spot-form-city'>
                        <div>City</div>
                        <div className="errors">{errors.city}</div>
                        <input
                            type='text'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div className='spot-form-state'>
                        <div>State</div>
                        <div className="errors">{errors.state}</div>
                        <input
                            type='text'
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </div>
                </div>

                <div className='spot-form-lat-lng'>
                    <div className='spot-form-lat'>
                        <div>Latitude</div>
                        <div className="errors">{errors.lat}</div>
                        <input
                            type='text'
                            value={lat}
                            onChange={(e) => setLat(e.target.value)}
                        />
                    </div>
                    <div className='spot-form-lng'>
                        <div>Longitude</div>
                        <div className="errors">{errors.lng}</div>
                        <input
                            type='text'
                            value={lng}
                            onChange={(e) => setLng(e.target.value)}
                        />
                    </div>
                </div>

                <div className='spot-form-description'>
                    <h1>Describe your place to guests</h1>
                    <div>Mention the best features of your space , any special amentities like fast wifi and parking, and what you love about your neighborhood.</div>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className=''>
                    <h1>Create a title for your spot</h1>
                    <div>Catch guest's attention with a spot title that highlights what makes your place special.</div>
                    <input
                        type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder='Name of your spot'
                    />
                </div>

                <div>
                    <h1>Set a base price for your spot</h1>
                    <div>Competitive pricing can help your listing stand out and rank higher in the search results.</div>
                    <label htmlFor='spot-form-price-input'>$</label>
                    <input
                        id='spot-form-price-input'
                        value={price}
                        type='text'
                        onChange={e => setPrice(e.target.value)}
                        placeholder='Price per night (USD)'
                    />
                </div>

                <div>
                    <h1>Liven up your spot with photos</h1>
                    <div>Submit a link to at least one photo to publish your spot.</div>
                    <input
                        value={photoUrl}
                        type='text'
                        onChange={e => setPhotoUrl(e.target.value)}
                        placeholder='Preview Image URL'
                    />
                    <input
                        value={photoUrl2}
                        type='text'
                        onChange={e => setPhotoUrl2(e.target.value)}
                        placeholder='Image URL'
                    />
                    <input
                        value={photoUrl3}
                        type='text'
                        onChange={e => setPhotoUrl3(e.target.value)}
                        placeholder='Image URL'
                    />
                    <input
                        value={photoUrl4}
                        type='text'
                        onChange={e => setPhotoUrl4(e.target.value)}
                        placeholder='Image URL'
                    />
                    <input
                        value={photoUrl5}
                        type='text'
                        onChange={e => setPhotoUrl5(e.target.value)}
                        placeholder='Image URL'
                    />
                </div>

                <button type="submit">{formType}</button>
            </form>
        </div>

    );
};

export default SpotForm;