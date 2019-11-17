// @flow

import { API_START, API_END, ACCESS_DENIED, API_ERROR } from "../actions/types";

export const apiStart = (label: string) => ({
  type: API_START,
  payload: label
});

export const apiEnd = (label: string) => ({
  type: API_END,
  payload: label
});

export const accessDenied = (url: string) => ({
  type: ACCESS_DENIED,
  payload: {
    url
  }
});

export const apiError = (error: string) => ({
  type: API_ERROR,
  error
});