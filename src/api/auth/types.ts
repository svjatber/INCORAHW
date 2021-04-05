export interface RegisterUserRequestBody {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface LoginBody {
  email: string;
  password: string;
}
export interface LoginUserResp {
  access_token: string;
  objectId: number;
  refresh_token: string;
  status: number;
}
