// import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import axios, { AxiosError, AxiosRequestConfig } from "axios";

const onDownloadProgress = () => {
  // do your thing here}
};
const onUploadProgress = () => {
  // do your thing here
};

const instance = axios.create({
  baseURL: "https://api.resolver.gdn/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 50000,
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // Do something before request is sent
    return {
      ...config,
      onUploadProgress,
      onDownloadProgress,
    };
  },
  (error: AxiosError) => {
    if (error.response) {
      console.error(error.response.data);
    }
    return Promise.reject(error);
  }
);

instance.interceptors.response.use((response) => {
  return {
    ...response,
    onUploadProgress,
    onDownloadProgress,
  };
});

export default instance;
