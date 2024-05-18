import axios from "axios";
// import { deleteTokenFromCookies, getTokenFromCookies } from "./common";

export async function makeAxiosRequest(
  method: any,
  urlPath: any,
  data?: any,
  params?: any
) {
  try {
    // const serviceToken = getTokenFromCookies();
    const serviceToken = "";
    // const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

    const headers =
      data instanceof FormData
        ? {
            Accept: "application/json",
            Authorization: `Bearer ${serviceToken}`,
          }
        : {
            "Content-Type": "application/json",
            Accept: "application/json",
            // Authorization: `Bearer ${serviceToken}`,
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTYXF1aWJAZ21haWwuY29tIiwiZW1haWwiOiJTYXF1aWJAZ21haWwuY29tIiwicGhvbmVOdW1iZXIiOiIwMTk1NzczNTc1IiwiaWQiOjcsImV4cCI6MTgwNTM3MDA5NH0.RhdIiAUdSajWdGjjA6nPtczPWSCqNQv2f5_-lVpUhMo`,
          };
console.log(import.meta.env.VITE_REACT_APP_API_URL);

    const instance = axios.create({
      baseURL: "/api",
    });
    const response = await instance({
      method,
      url: `${urlPath}`,
      data,
      params,
      headers,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.status === 401) {
          //   deleteTokenFromCookies();
        }
        throw error.response;
      } else if (error.request) {
        throw error.request;
      } else {
        throw new Error(`Error: ${error.message}`);
      }
    } else {
      throw error;
    }
  }
}
