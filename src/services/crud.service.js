import { API } from '../middleware/actions/types'

export function get(params, onSuccess, onFailure) {
    return apiAction({
        onSuccess: onSuccess,
        onFailure: onFailure,
        label: 'api request'
    });
}

export function post(data, onSuccess, onFailure) {
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