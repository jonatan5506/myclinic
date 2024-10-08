import axios from "axios";
import { parseCookies } from "nookies";

export const ApiConfig = (ctx = undefined) => {
  const cookies = parseCookies(ctx);
  const api = axios.create({
    baseURL: "http://localhost:3300/api/",
    headers: {
      Authorization: "Bearer " + cookies['@myclinic.token']
    }
  });

  api.interceptors.request.use(
    function(config) {
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );

  return api;
};
