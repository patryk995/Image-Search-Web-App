import { GET_IMAGES, IMAGES_LOADING, GET_MORE_IMAGES } from "../actions/types";
const initialState = {
  images: {},
  imagesList: [],
  loading: false,
  isResponse: false,
  page: 1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state,
        images: action.payload,
        keyword: action.keyword,
        totalPages: action.payload.total_pages,
        page: action.last_page,
        imagesList: action.payload.results,
        loading: false,
        isResponse: true
      };
    case GET_MORE_IMAGES:
      return {
        ...state,
        imagesList: state.imagesList.concat(action.payload.results),
        page: action.last_page
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
