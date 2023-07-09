import { csrfFetch } from './csrf'
export const LOAD_SPOTS = 'load/SPOTS';
export const LOAD_CURRENT_SPOTS = 'load/current/SPOTS';
export const RECEIVE_SPOT = 'spots/RECEIVE_SPOT';
export const UPDATE_SPOT = 'spots/UPDATE_SPOT';
export const REMOVE_SPOT = 'spots/REMOVE_SPOT';
export const REMOVE_CURRENT_SPOTS = 'remove/current/SPOTS'


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

export const removeCurrentSpots = () => ({
    type: REMOVE_CURRENT_SPOTS,
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
        const imageUploadPromises = images.map(async image => {
            if (image.url !== '') {
                return csrfFetch(
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
            return Promise.resolve(); // Skip if the image URL is empty
        });
        await Promise.all(imageUploadPromises);
        await dispatch(receiveSpot(data))
        await dispatch(fetchSpots())
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
        const imageUploadPromises = [];
        images.forEach(async image => {
            if (image.url !== '') {
                // need to add a new image
                const curr = csrfFetch(
                    `/api/spots/${data.id}/images`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(image)
                    }
                );
                imageUploadPromises.push(curr)
            }
            if (image.id) {
                // need to delete this image
                imageUploadPromises.push(csrfFetch(`/api/spot-images/${image.id}`, { method: 'DELETE' }));
            }
        });
        await Promise.all(imageUploadPromises);
        dispatch(receiveSpot({ ...spot, SpotImages: images }));
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
            return { ...state, singleSpot: action.spot };
        case REMOVE_SPOT:
            const newState = { ...state };
            delete newState.allSpots[action.spotId];
            delete newState.currentSpots[action.spotId];
            return newState;
        case REMOVE_CURRENT_SPOTS:
            const newState1 = { ...state };
            newState1.currentSpots = {};
            return newState1;
        default:
            return state;
    }
};

export default spotsReducer;
