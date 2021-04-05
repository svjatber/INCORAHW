import axios from '../axios';
import { getHotelResponse, GetHotelResponse, PostHotelResponse } from './types';

export const getHotels = (): Promise<GetHotelResponse> => {
  return axios.instance.get('/hotel');
};

export const postHotel = (hotel: getHotelResponse): Promise<PostHotelResponse> => {
  return axios.instance.post('/hotel', hotel);
};
