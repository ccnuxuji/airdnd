import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
                const imagesForUpdate = [];
                if (photoUrl !== spot.SpotImages[0].url) imagesForUpdate.push({ ...spot.SpotImages[0], url: photoUrl, preview: true });
                if (photoUrl2 !== spot.SpotImages[1].url) imagesForUpdate.push({ ...spot.SpotImages[1], url: photoUrl2, preview: false });
                if (photoUrl3 !== spot.SpotImages[2].url) imagesForUpdate.push({ ...spot.SpotImages[2], url: photoUrl3, preview: false });
                if (photoUrl4 !== spot.SpotImages[3].url) imagesForUpdate.push({ ...spot.SpotImages[3], url: photoUrl4, preview: false });
                if (photoUrl5 !== spot.SpotImages[4].url) imagesForUpdate.push({ ...spot.SpotImages[4], url: photoUrl5, preview: false });
                const { id } = await dispatch(updateOneSpot(spot, imagesForUpdate));
                history.push(`/spots/${id}`)
            }
        } catch (error) {
            console.log(error);
            setErrors({ ...error.errors });
        }

    };

    useEffect(() => {
        const errorsObject = {};
        if (country.length === 0) {
            errorsObject.country = "Country field is required";
        }
        if (address.length === 0) {
            errorsObject.address = "Address field is required";
        }
        if (city.length === 0) {
            errorsObject.city = "City field is required";
        }
        if (lat.length === 0) {
            errorsObject.lat = "Latitude field is required";
        }
        if (lng.length === 0) {
            errorsObject.lng = "Longitude field is required";
        }
        if (price.length === 0) {
            errorsObject.price = "Price field is required";
        }
        if (state.length === 0) {
            errorsObject.state = "State field is required";
        }
        if (name.length === 0) {
            errorsObject.name = "Title field is required";
        }
        if (photoUrl.length === 0) {
            errorsObject.mainImg = "Title photo url is required";
        }
        setErrors(errorsObject);

    }, [country, address, city, state, lat, lng, description, name, price]);

    return (
        <div className='spot-form-page-wrapper'>
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
                            placeholder='country'
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </div>

                    <div className='spot-form-address'>
                        <div>Street Address</div>
                        <div className="errors">{errors.address}</div>
                        <input
                            type='text'
                            value={address}
                            placeholder='address'
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
                                placeholder='city'
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                        <div className='spot-form-state'>
                            <div>State</div>
                            <div className="errors">{errors.state}</div>
                            <input
                                type='text'
                                value={state}
                                placeholder='state'
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
                                placeholder='latitude'
                                onChange={(e) => setLat(e.target.value)}
                            />
                        </div>
                        <div className='spot-form-lng'>
                            <div>Longitude</div>
                            <div className="errors">{errors.lng}</div>
                            <input
                                type='text'
                                value={lng}
                                placeholder='longitude'
                                onChange={(e) => setLng(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className='spot-form-description'>
                        <h1>Describe your place to guests</h1>
                        <div>Mention the best features of your space , any special amentities like fast wifi and parking, and what you love about your neighborhood.</div>
                        <textarea
                            value={description}
                            placeholder='Please write at least 30 characters'
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className=''>
                        <h1>Create a title for your spot</h1>
                        <div>Catch guest's attention with a spot title that highlights what makes your place special.</div>
                        <div className="errors">{errors.name}</div>
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
                        <div className="errors">{errors.price}</div>
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

                    <button
                        disabled={!(Object.keys(errors).length === 0)}
                        type="submit">{formType}
                    </button>
                </form>
            </div>
        </div>

    );
};

export default SpotForm;