import { API } from '../middleware/actions/types'

export function get(url, params, onSuccess, onFailure) {
    return apiAction({
        url,
        params,
        onSuccess,
        onFailure,
        label: 'api request'
    });
}

export function post(url, data, onSuccess, onFailure) {
    return apiAction({
        method: 'POST',
        data,
        onSuccess,
        onFailure,
        label: 'api request'
    });
}


function apiAction({
    url = "",
    method = "GET",
    data = null,
    accessToken = null,
    onSuccess = () => {},
    onFailure = () => {},
    label = "",
    headersOverride = null
  }) {
    return {
      type: API,
      payload: {
        url,
        method,
        data,
        accessToken,
        onSuccess,
        onFailure,
        label,
        headersOverride
      }
    };
  }