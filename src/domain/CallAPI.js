import axios from "axios";

export const CallAPI = async ({ endpoint, method, headers, params, data, baseUrl }) => {
  const baseURL = "http://localhost:3000";
  const option = {
    baseURL,
    url: endpoint,
    method,
    headers,
    params,
    data,
  };
  const response = await axios(option);
  return response?.data;
};
