import { csrfFetch } from './csrf'
export const LOAD_CURRENT_REVIEWS = 'reviews/LOAD_CURRENT_REVIEWS';
export const LOAD_SPOT_REVIEWS = 'reviews/LOAD_SPOT_REVIEWS';
export const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW';
export const UPDATE_REVIEW = 'reviews/UPDATE_REVIEW';
export const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';
export const REMOVE_CURRENT_REVIEWS = 'reviews/REMOVE_CURRENT_REVIEWS'


/******actions******************** */
export const setCurrentReviews = reviews => ({
    type: LOAD_CURRENT_REVIEWS,
    reviews
});

export const setSoptReviews = reviews => ({
    type: LOAD_SPOT_REVIEWS,
    reviews
});

export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review,
});

export const editReview = (review) => ({
    type: UPDATE_REVIEW,
    review,
});

export const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId,
});

export const removeCurrentReviews = () => ({
    type: REMOVE_CURRENT_REVIEWS,
});

/******thunks******************** */
export const fetchCurrentReviews = () => async (dispatch) => {
    const response = await csrfFetch(
        '/api/reviews/current',
        {
            method: 'GET'
        }
    );
    const data = await response.json();
    if (response.ok) {
        dispatch(setCurrentReviews(data.Reviews));
    }
    return data;
};

export const fetchReviewsBySpot = (spotId) => async (dispatch) => {
    const response = await csrfFetch(
        `/api/spots/${spotId}/reviews`,
        {
            method: 'GET'
        }
    );
    const data = await response.json();
    console.log(data)
    if (response.ok) {
        dispatch(setSoptReviews(data.Reviews));
    }
    return data;
};

export const createOneReview = (spotId, review) => async dispatch => {
    const res = await csrfFetch(
        `/api/spots/${spotId}/reviews`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        }
    );
    const data = await res.json();
    if (res.status === 201) {
        dispatch(receiveReview({...review, ...data}))
        return data;
    } else {
        throw data;
    }
};

export const updateOneReview = (review) => async dispatch => {
    const res = await csrfFetch(
        `/api/reviews/${review.id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        }
    );

    const data = await res.json();
    if (res.status === 200) {
        dispatch(receiveReview({...review, ...data}));
        return data;
    } else {
        throw data;
    }
};

export const deleteOneReview = (reviewId) => async dispatch => {
    const res = await csrfFetch(
        `/api/reviews/${reviewId}`,
        {
            method: 'DELETE'
        }
    );
    const data = await res.json();
    if (res.ok) {
        dispatch(removeReview(reviewId));
        return data;
    } else {
        throw data;
    }
};

// selectors
export const getCurrentReviews = (state) => Object.values(state.reviews.user);

export const getReviewsBySpot = (state) => Object.values(state.reviews.spot);

/******reduccer******************** */
const initialState = { spot: {}, user: {} };
const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CURRENT_REVIEWS:
            const reviewsState1 = { ...state, user: {} };
            action.reviews.forEach((review) => {
                reviewsState1.user[review.id] = review;
            });
            return reviewsState1;
        case LOAD_SPOT_REVIEWS:
            const reviewsState0 = { ...state, spot: {} };
            action.reviews.forEach((review) => {
                reviewsState0.spot[review.id] = review;
            });
            return reviewsState0;
        case RECEIVE_REVIEW:
            const reviewsState2 = { ...state };
            reviewsState2.spot[action.review.id] = action.review;
            reviewsState2.user[action.review.id] = action.review;
            return reviewsState2;
        case REMOVE_REVIEW:
            const newState = { ...state };
            delete newState.spot[action.reviewId];
            delete newState.user[action.reviewId];
            return newState;
        case REMOVE_CURRENT_REVIEWS:
            const newState1 = { ...state };
            newState1.user = {};
            return newState1;
        default:
            return state;
    }
};

export default reviewsReducer;
