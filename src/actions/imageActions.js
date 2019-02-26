import { GET_IMAGES } from "./types";
import Unsplash from "unsplash-js";

const toJson = require("unsplash-js").toJson;
const unsplash = new Unsplash({
  applicationId:
    "945e06e6f422db442b33f0e0e7aadb5a3dc5ea1da946279f5ee012dc448ed264",
  secret: "93eca2da52d5fc2d52e5d1a5f041a4eb820433bf2e2405a4f2439858c1cdc902"
});

export const getImages = (keyword, page, per_page) => dispatch => {
  unsplash.search
    .photos(keyword, page, per_page)
    .then(toJson)
    .then(json =>
      dispatch({
        type: GET_IMAGES,
        payload: json
      })
    );
};
