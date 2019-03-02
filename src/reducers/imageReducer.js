import {
  GET_IMAGES,
  IMAGES_LOADING,
  GET_MORE_IMAGES,
  SAVE_IMAGE_LIST,
  DELETE_SAVED_SEARCH,
  OPEN_IMAGE_MODAL,
  CLOSE_IMAGE_MODAL,
  NEXT_MODAL_IMAGE
} from "../actions/types";
const initialState = {
  imagesList: [],
  loading: false,
  isFirstLoad: false,
  page: 1,
  savedSearchList: [],
  isModalVisible: false,
  modalCurrentImgIndex: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_IMAGES:
      if (action.keyword !== state.keyword) {
        return {
          ...state,
          keyword: action.keyword,
          totalPages: action.total_pages,
          totalImages: action.total,
          page: action.last_page,
          imagesList: action.images_list,
          loading: false,
          isFirstLoad: true
        };
      } else {
        return {
          ...state
        };
      }

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
    case OPEN_IMAGE_MODAL:
      return {
        ...state,
        isModalVisible: true,
        modalCurrentImgIndex: state.imagesList.findIndex(image => {
          return image.id === action.imageId;
        })
      };
    case CLOSE_IMAGE_MODAL:
      return {
        ...state,
        isModalVisible: false
      };
    case NEXT_MODAL_IMAGE:
      return {
        ...state,
        modalCurrentImgIndex: action.imageIndex
      };
    default:
      return state;
  }
}
