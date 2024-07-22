import axios from "axios";
import store from "../epics/store";
import { getToken, getSudo } from "./auth";
const baseUrl = process.env.REACT_APP_API;

const callApi = (method, needAuth, path, data, doneCallback, failCallback, isCorp) => {
  
  let options = {};
  let baseUrl_ = baseUrl
  if (isCorp) {
    baseUrl_ = baseUrl_.replace('ubo', 'corp')
  }
  if (needAuth) {
    const token = getToken();
    if (!token) {
      if (failCallback) failCallback("Token not exists.");
      store.dispatch({
        type: "api.API_FAILED",
        payload: { errorMsg: "Token not exists" },
      });
      return;
    }
    options = {
      ...options,
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + token,
      },
    };
  }
  if (data) {
    data['sudo_name'] = getSudo()
  }
  store.dispatch({ type: "api.API_STARTED" });
  let axiosCall;
  if (method === "POST") {
    if (needAuth) {
      axiosCall = axios.post(`${baseUrl_}${path}`, data, options);
    } else {
      axiosCall = axios.post(`${baseUrl_}${path}`, data, options);
    }
  } else if (method === "GET") {
    if (needAuth) {
      axiosCall = axios.get(`${baseUrl_}${path}`, options);
    } else {
      axiosCall = axios.get(`${baseUrl_}${path}`, options);
    }
  } else if (method === "PUT") {
    if (needAuth) {
      axiosCall = axios.put(`${baseUrl_}${path}`, data, options);
    } else {
      axiosCall = axios.put(`${baseUrl_}${path}`, data, options);
    }
  } else if (method === "DELETE") {
    if (needAuth) {
      axiosCall = axios.delete(`${baseUrl_}${path}`, options);
    } else {
      axiosCall = axios.delete(`${baseUrl_}${path}`, options);
    }
  }
  axiosCall.then(
    (res) => {
      if (doneCallback) doneCallback(res.data);
      store.dispatch({ type: "api.API_DONE" });
    },
    (err) => {
      let errorMessage = "Network error.";
      let status = 503;
      if (err.response) {
        errorMessage = err.response.data.message;
        status = err.response.status;
      }
      if (failCallback) failCallback(errorMessage);
      store.dispatch({
        type: "api.API_FAILED",
        payload: { errorMessage, status },
      });
      setTimeout(() => {
        store.dispatch({ type: "api.CLEAR_ERROR_MESSAGE" });
      }, 2500);
    }
  );
};

export const callGetApi = (path, doneCallback, failCallback, isCorp) => {
  callApi("GET", false, path, undefined, doneCallback, failCallback, isCorp);
};

export const callPostApi = (path, data, doneCallback, failCallback, isCorp) => {
  callApi("POST", false, path, data, doneCallback, failCallback, isCorp);
};

export const callPutApi = (path, data, doneCallback, failCallback, isCorp) => {
  callApi("PUT", false, path, data, doneCallback, failCallback, isCorp);
};

export const callDeleteApi = (path, doneCallback, failCallback, isCorp) => {
  callApi("DELETE", false, path, undefined, doneCallback, failCallback, isCorp);
};

export const callGetApiWithAuth = (path, doneCallback, failCallback, isCorp) => {
  callApi("GET", true, path, undefined, doneCallback, failCallback, isCorp);
};

export const callPostApiWithAuth = (path, data, doneCallback, failCallback, isCorp) => {
  callApi("POST", true, path, data, doneCallback, failCallback, isCorp);
};

export const callPutApiWithAuth = (path, data, doneCallback, failCallback, isCorp) => {
  callApi("PUT", true, path, data, doneCallback, failCallback, isCorp);
};

export const callDeleteApiWithAuth = (path, doneCallback, failCallback, isCorp) => {
  callApi("DELETE", true, path, undefined, doneCallback, failCallback, isCorp);
};
