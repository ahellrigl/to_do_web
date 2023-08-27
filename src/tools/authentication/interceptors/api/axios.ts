import { useAuthStore } from '../../../stores/auth.store';
import axios from 'axios';

const authApi = axios.create({
  baseURL: 'https://localhost:7008/api'
})

authApi.interceptors.request.use(
  request => {
    const auth = useAuthStore();

    const access_token = auth.access_token;

    request.headers["Accept"] = "application/json";
    request.headers["Content-Type"] = "application/json";

    if (access_token) {
      request.headers["Authorization"] = "Bearer " + access_token;
    }

    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default authApi


