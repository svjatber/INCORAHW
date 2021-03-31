import { loginUser, registerUser } from './api/auth/endpoints';

export const NotFound = () => {
  const createUser = () => {
    registerUser({
      email: 'svjat@mail.com',
      firstName: 'sv',
      lastName: 'dsfsfdfsdsfd',
      password: 'cxvxvdcxsfdfsd'
    });
  };
  const loginUserInt = async () => {
    try {
      const res = await loginUser({
        email: 'svjatber@mail.com',
        password: 'cxvxvdcxsfdfsd'
      });
      const { access_token, refresh_token } = res.data;
      localStorage.setItem('token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <button onClick={createUser}>Register</button>
      <button onClick={loginUserInt}>Login</button>
    </div>
  );
};
