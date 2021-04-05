import axios from 'axios';
export const instance = axios.create({
  baseURL: 'http://192.168.0.151:3000'
});

instance.interceptors.request.use((req: any) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers = {
      Authorization: `Bearer ${token}`
    };
  }
  return req;
});

instance.interceptors.response.use(
  (res: any) => {
    return res;
  },
  (err: any) => {
    if (err.response.status === 401) {
      window.location.replace('/login');
    }
    console.log(err.response);
    return Promise.reject(err);
  }
);

export default {
  instance
};
