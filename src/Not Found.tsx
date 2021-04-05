import { loginUser, registerUser } from './api/auth/endpoints';
import { useHotels } from './hooks/useHotel';

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

  const { data, addHotel } = useHotels();
  console.log(data);

  const createPost = () => {
    addHotel({
      name: 'svjatasssss',
      description: 'aa',
      phone: 'aa',
      address: {
        country: 'aa',
        city: 'aa',
        state: 'aa',
        street: 'aa',
        address1: 'aa',
        address2: 'aa',
        zip: 0,
        location: {
          latitude: 'aa',
          longtitude: 'aa'
        }
      }
    });
  };

  return (
    <div>
      <button onClick={createUser}>Register</button>
      <button onClick={loginUserInt}>Login</button>
      <button onClick={createPost}>postHotel</button>
    </div>
  );
};
