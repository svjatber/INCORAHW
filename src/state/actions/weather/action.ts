import { WeatherType } from '../../actions/weather/types';
import { AnyAction } from 'redux';
import { getWeather } from '../../../api/weather/endpoint';

export const loadWeather = (city: string) => async (dispatch: React.Dispatch<AnyAction>) => {
  dispatch({
    type: WeatherType.GET_WEATHER_REQUEST
  });

  try {
    const res = await getWeather(city);
    dispatch({
      type: WeatherType.GET_WEATHER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: WeatherType.GET_WEATHER_FAIL,
      payload: err
    });
  }
};
