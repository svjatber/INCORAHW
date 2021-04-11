import { AnyAction } from 'redux';
import { WeatherType } from '../../state/actions/weather/types';

const initialState = {
  city: { name: 'Kyiv' },
  main: {},
  wind: {}
};

export const weather = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case WeatherType.GET_WEATHER_REQUEST: {
      return {
        ...state
      };
    }

    case WeatherType.GET_WEATHER_SUCCESS: {
      return {
        ...state,
        city: { ...state.city, name: action.payload.name, coord: action.payload.coord },
        main: action.payload.main,
        wind: action.payload.wind
      };
    }

    case WeatherType.GET_WEATHER_FAIL: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};
