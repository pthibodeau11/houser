import { createStore } from "redux";

const initialState = {
  propertyName: "",
  propertyAddress: "",
  propertyCity: "",
  propertyState: "",
  propertyZip: 0,
  propertyImageUrl: "",
  propertyMortgage: 0,
  propertyRent: 0,
  allHouses: []
};

//export const ... go below
export const ADD_NAME = "ADD_NAME";
export const ADD_ADDRESS = "ADD_ADDRESS";
export const ADD_CITY = "ADD_CITY";
export const ADD_STATE = "ADD_STATE";
export const ADD_ZIP = "ADD_ZIP";
export const ADD_IMAGE_URL = "ADD_IMAGE_URL";
export const ADD_MORTGAGE = "ADD_MORTGAGE";
export const ADD_RENT = "ADD_RENT";

// create function reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NAME:
      //   const newProductUrl = [...state.product_image_url, action.payload];
      return {
        propertyName: (state.propertyName += action.payload)
        // ...state,
        // propertyName: action.payload
      };
    case ADD_ADDRESS:
      return {
        propertyAddress: (state.propertyAddress += action.payload)
        // ...state,
        // propertyAddress: action.payload
      };
    case ADD_CITY:
      return {
        propertyCity: (state.propertyCity += action.payload)
        // ...state,
        // propertyCity: action.payload
      };
    case ADD_STATE:
      return {
        propertyState: (state.propertyState += action.payload)
        // ...state,
        // propertyState: action.payload
      };
    case ADD_ZIP:
      return {
        propertyZip: (state.propertyZip += action.payload)
        // ...state,
        // propertyZip: action.payload
      };
    case ADD_IMAGE_URL:
      return {
        propertyImageUrl: (state.propertyImageUrl += action.payload)
      };
    case ADD_MORTGAGE:
      return {
        propertyMortgage: (state.propertyMortgage += action.payload)
      };
    case ADD_RENT:
      return {
        propertyRent: (state.propertyRent += action.payload)
      };
  }
}

export default createStore(reducer);
