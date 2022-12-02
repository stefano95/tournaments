import { showLoader, hideLoader } from "./dialogSlice";
import settings from "./settings";

const execute = async (dispatch, endpoint, body, customConfig) => {
  const headers = {
    Accept: "/",
  };

  headers["Content-Type"] = `application/json`;

  const accessToken = settings.access_token;

  if (accessToken) {
    headers["Authorization"] = `Basic ${window.btoa(accessToken)}`;
  }

  const config = {
    ...customConfig,
    headers: headers,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  let data;

  try {
    dispatch(showLoader());

    const response = await window.fetch(endpoint, config);
    data = await response.json();

    if (response.ok) {
      dispatch(hideLoader(endpoint));
      return {
        ok: response.ok,
        status: response.status,
        data,
      };
    }
  } catch (err) {
    console.log(err, "error");
    dispatch(hideLoader(endpoint));
  }
};

const api = {};

api.get = async (dispatch, endpoint) => {
  return execute(dispatch, endpoint, null, {
    method: "GET",
  });
};

api.delete = async (dispatch, endpoint, body) => {
  return execute(dispatch, endpoint, body, {
    method: "DELETE",
  });
};

api.post = async (dispatch, endpoint, body) => {
  return execute(dispatch, endpoint, body, {
    method: "POST",
  });
};

api.put = async (dispatch, endpoint, body) => {
  return execute(dispatch, endpoint, body, {
    method: "PUT",
  });
};

export { api };
