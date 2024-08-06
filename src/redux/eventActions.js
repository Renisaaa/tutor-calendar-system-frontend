import axios from "axios";

//* Action types
export const FETCH_EVENTS_REQUEST = "FETCH_EVENTS_REQUEST";
export const FETCH_EVENTS_SUCCESS = "FETCH_EVENTS_SUCCESS";
export const FETCH_EVENTS_FAILURE = "FETCH_EVENTS_FAILURE";
export const ADD_EVENT_SUCCESS = "ADD_EVENT_SUCCESS";
export const ADD_EVENT_FAILURE = "ADD_EVENT_FAILURE";

//* Action creators
export const fetchEventsRequest = () => ({
  type: FETCH_EVENTS_REQUEST,
});

export const fetchEventsSuccess = (events) => ({
  type: FETCH_EVENTS_SUCCESS,
  payload: events,
});

export const fetchEventsFailure = (error) => ({
  type: FETCH_EVENTS_FAILURE,
  payload: error,
});

//* Thunks
export const fetchEvents = (userId) => async (dispatch) => {
  dispatch(fetchEventsRequest());
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/events?userId=${userId}`
    );
    dispatch(fetchEventsSuccess(response.data));
  } catch (error) {
    dispatch(fetchEventsFailure(error.message));
  }
};

//* Add Event Action Creator
export const addEvent = (event) => async (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/api/events`, event)
    .then((response) => {
      dispatch({
        type: ADD_EVENT_SUCCESS,
        payload: event,
      });
    })
    .catch((error) => {
      dispatch({
        type: ADD_EVENT_FAILURE,
        payload: error.message,
      });
    });
};
