import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  FETCH_BY_SEARCH,
  START_LOADING,
  END_LOADING,
  FETCH_POST,
  FETCH_FOR_USER,
} from "../constants/actionTypes.js";

const postReducer = (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING: {
      return { ...state, isLoading: true };
    }
    case END_LOADING: {
      return { ...state, isLoading: false };
    }
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload };
    case FETCH_FOR_USER: {
      return { ...state, posts: action.payload };
    }
    case FETCH_POST:
      return { ...state, post: action.payload };
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPage,
      };

    case CREATE:
      return [...state, action.payload];
    case UPDATE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };

    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };

    default:
      return state;
  }
};
export default postReducer;
