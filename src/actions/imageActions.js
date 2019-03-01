import {
  GET_IMAGES,
  IMAGES_LOADING,
  GET_MORE_IMAGES,
  SAVE_IMAGE_LIST,
  DELETE_SAVED_SEARCH
} from "./types";
import Unsplash from "unsplash-js";

const toJson = require("unsplash-js").toJson;
const unsplash = new Unsplash({
  applicationId:
    "945e06e6f422db442b33f0e0e7aadb5a3dc5ea1da946279f5ee012dc448ed264",
  secret: "93eca2da52d5fc2d52e5d1a5f041a4eb820433bf2e2405a4f2439858c1cdc902"
});
const per_page = 30;
export const getImages = (keyword, page) => dispatch => {
  dispatch(setImagesLoading());
  unsplash.search
    .photos(keyword, page, per_page)
    .then(toJson)
    .then(json =>
      dispatch({
        type: GET_IMAGES,
        payload: json,
        keyword: keyword,
        last_page: page,
        total_pages: json.total_pages,
        total: json.total,
        images_list: json.results
      })
    );
};

export const getMoreImages = (keyword, page) => dispatch => {
  unsplash.search
    .photos(keyword, page, per_page)
    .then(toJson)
    .then(json =>
      dispatch({
        type: GET_MORE_IMAGES,
        payload: json,
        keyword: keyword,
        last_page: page
      })
    );
};

export const setImagesLoading = () => {
  return {
    type: IMAGES_LOADING
  };
};

export const saveSearch = () => {
  return {
    type: SAVE_IMAGE_LIST
  };
};
export const deleteSavedSearch = keyword => dispatch => {
  dispatch({
    type: DELETE_SAVED_SEARCH,
    keyword: keyword
  });
};

export const loadSavedSearch = searchItem => dispatch => {
  dispatch(setImagesLoading());
  dispatch({
    type: GET_IMAGES,
    keyword: searchItem.savedKeyword,
    last_page: 1,
    total_pages: searchItem.savedTotalPages,
    total: searchItem.savedTotalImages,
    images_list: searchItem.savedImagesList
  });
};
