import { GET_IMAGES, IMAGES_LOADING } from "../actions/types";
const initialState = {
  images: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state,
        images: action.payload,
        keyword: action.keyword,
        loading: false
      };
    case IMAGES_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
