import {
  GET_IMAGES,
  IMAGES_LOADING,
  GET_MORE_IMAGES,
  SAVE_IMAGE_LIST,
  DELETE_SAVED_SEARCH
} from "../actions/types";
const initialState = {
  imagesList: [],
  loading: false,
  isFirstLoad: false,
  page: 1,
  savedSearchList: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state,
        keyword: action.keyword,
        totalPages: action.payload.total_pages,
        totalImages: action.payload.total,
        page: action.last_page,
        imagesList: action.payload.results,
        loading: false,
        isFirstLoad: true
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
    case SAVE_IMAGE_LIST:
      if (
        state.savedSearchList.filter(e => e.savedKeyword === state.keyword)
          .length === 0
      ) {
        return {
          ...state,
          savedSearchList: state.savedSearchList.concat({
            savedKeyword: state.keyword,
            savedTotalImages: state.totalImages,
            savedTotalPages: state.totalPages,
            savedImagesList: state.imagesList.slice(0, 30)
          })
        };
      } else return state;
    case DELETE_SAVED_SEARCH:
      return {
        ...state,
        savedSearchList: state.savedSearchList.filter(
          search => search.savedKeyword !== action.keyword
        )
      };
    default:
      return state;
  }
}
