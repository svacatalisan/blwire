import {
    API_START,
    API_END,
    API_ERROR
  } from "../actions/types";
  
  export default function(state = {}, action) {
    switch (action.type) {
      case API_START:
        return {
            ...state,
            error: null,
            isLoadingData: true
        };
      case API_ERROR:
        return {
            ...state,
            error: action.payload,
            isLoadingData: false
        };
      case API_END:
        return {
            ...state,
            isLoadingData: false
        };
      default:
        return state;
    }
  }