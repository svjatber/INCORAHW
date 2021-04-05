import { AxiosResponse } from 'axios';
import Axios from '../axios';
import { LoginBody, LoginUserResp, RegisterUserRequestBody } from './types';
export const registerUser = (body: RegisterUserRequestBody): Promise<any> => {
  return Axios.instance.post('/register', body);
};

export const loginUser = (body: LoginBody): Promise<AxiosResponse<LoginUserResp>> => {
  return Axios.instance.post('/login', body);
};
