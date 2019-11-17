import {
    API_START,
    API_END,
    API_ERROR
} from "../actions/types";
import type { IApiReducer } from '../middleware.interface';
  
  export default function(state: IApiReducer = {}, action: API_START | API_END | API_ERROR) {
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