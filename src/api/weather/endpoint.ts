import Axios from '../axios';

const API_KEY = '8ee74cfdf2eb259b49f61cbbd3ac74fc';

export const getWeather = (city: string): Promise<any> => {
  return Axios.instance.get('', {
    params: {
      q: city,
      appid: API_KEY,
      lang: 'ua',
      units: 'metric'
    }
  });
};
