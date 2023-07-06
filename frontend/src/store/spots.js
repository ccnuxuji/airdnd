import { csrfFetch } from './csrf'
export const LOAD_SPOTS = 'load/SPOTS';
export const LOAD_CURRENT_SPOTS = 'load/current/SPOTS';
export const RECEIVE_SPOT = 'spots/RECEIVE_SPOT';
export const UPDATE_SPOT = 'spots/UPDATE_SPOT';
export const REMOVE_SPOT = 'spots/REMOVE_SPOT';


/******actions******************** */
export const setSpots = spots => ({
    type: LOAD_SPOTS,
    spots
});

export const setCurrentSpots = spots => ({
    type: LOAD_CURRENT_SPOTS,
    spots
});

export const receiveSpot = (spot) => ({
    type: RECEIVE_SPOT,
    spot,
});

export const editSpot = (spot) => ({
    type: UPDATE_SPOT,
    spot,
});

export const removeSpot = (spotId) => ({
    type: REMOVE_SPOT,
    spotId,
});

/******thunks******************** */
export const fetchSpots = () => async (dispatch) => {
    const response = await csrfFetch(
        '/api/spots/',
        {
            method: 'GET'
        }
    );
    const data = await response.json();
    if (response.ok) {
        dispatch(setSpots(data.Spots));
    }
    return data;
};

export const fetchCurrentSpots = () => async (dispatch) => {
    const response = await csrfFetch(
        '/api/spots/current',
        {
            method: 'GET'
        }
    );
    const data = await response.json();
    if (response.ok) {
        dispatch(setCurrentSpots(data.Spots));
    }
    return data;
};

export const fetchOneSpot = (spotId) => async dispatch => {
    const res = await csrfFetch(`/api/spots/${spotId}`);
    const spot = await res.json();
    if (res.ok) {
        dispatch(receiveSpot(spot))
    }
    return spot;
};

export const createOneSpot = (spot, images) => async dispatch => {
    const res = await csrfFetch(
        `/api/spots/`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(spot)
        }
    );
    const data = await res.json();
    if (res.status === 201) {
        images.fotEach(async image => {
            if (image.url !== '') {
                await csrfFetch(
                    `/api/spots/${data.id}/images`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(image)
                    }
                );
            }
        });

        dispatch(receiveSpot(data))
        return data;
    } else {
        throw data;
    }
};

export const updateOneSpot = (spot, images) => async dispatch => {
    const res = await csrfFetch(
        `/api/spots/${spot.id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(spot)
        }
    );

    const data = await res.json();

    if (res.status === 200) {
        images.forEach(async image => {
            if (image.id && image.url === '') {
                // need to delete this image
                await csrfFetch(`/api/spot-images/${image.id}`, { method: 'DELETE' });
            } else if (!image.id && image.url !== '') {
                // need to add a new image
                await csrfFetch(
                    `/api/spots/${data.id}/images`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(image)
                    }
                );
            } else if (image.id && image.url !== '') {
                // need to update this image(delete first and then add new image)
                await csrfFetch(`/api/spot-images/${image.id}`, { method: 'DELETE' });
                await csrfFetch(
                    `/api/spots/${data.id}/images`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(image)
                    }
                );
            }
            
        });
        dispatch(receiveSpot({...spot, SpotImages: images}));
        return data;
    } else {
        throw data;
    }
};

export const deleteOneSpot = (spotId) => async dispatch => {
    const res = await csrfFetch(
        `/api/spots/${spotId}`,
        {
            method: 'DELETE'
        }
    );
    console.log(res.ok);
    if (res.ok) {
        dispatch(removeSpot(spotId));
    }

};

// selectors
export const getSpots = (state) => Object.values(state.spots.allSpots);

export const getCurrentSpots = (state) => Object.values(state.spots.currentSpots);

export const getOneSpot = (spotId) => (state) => state.spots.singleSpot;

/******reduccer******************** */
const initialState = { allSpots: {}, currentSpots: {}, singleSpot: {} };
const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SPOTS:
            const spotsState = { ...state };
            action.spots.forEach((spot) => {
                spotsState.allSpots[spot.id] = spot;
            });
            return spotsState;
        case LOAD_CURRENT_SPOTS:
            const spotsState1 = { ...state };
            action.spots.forEach((spot) => {
                spotsState1.currentSpots[spot.id] = spot;
            });
            return spotsState1;
        case RECEIVE_SPOT:
            return { ...state, singleSpot: action.spot };
        case UPDATE_SPOT:
            return { ...state, [action.spot.id]: action.spot };
        case REMOVE_SPOT:
            const newState = { ...state };
            delete newState.allSpots[action.spotId];
            delete newState.currentSpots[action.spotId];
            return newState;
        default:
            return state;
    }
};

export default spotsReducer;
