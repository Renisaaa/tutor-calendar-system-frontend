import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
  ADD_EVENT_FAILURE,
  ADD_EVENT_SUCCESS,
} from "./eventActions";

//* Initial state
const initialState = {
  events: [],
  status: "idle",
  error: null,
};

//* Reducer
const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS_REQUEST:
      return {
        ...state,
        status: "loading",
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        status: "succeeded",
        events: action.payload,
      };
    case FETCH_EVENTS_FAILURE:
      return {
        ...state,
        status: "failed",
        error: action.payload,
      };
    case ADD_EVENT_SUCCESS:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case ADD_EVENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default eventReducer;
