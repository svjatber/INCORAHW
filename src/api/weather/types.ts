import { AxiosResponse } from 'axios';
import axios from '../axios';

export type getHotelResponse = {
  id?: number;
  name: string;
  description: string;
  phone: string;
  address: {
    country: string;
    city: string;
    state: string;
    street: string;
    address1: string;
    address2: string;
    zip: number;
    location: {
      latitude: string;
      longtitude: string;
    };
  };
};

export interface PaginationResponse<T> {
  items: T[];
  itemsCount: number;
  maxPage: null;
  page: null;
  total: number;
}
export type GetHotelResponse = AxiosResponse<PaginationResponse<getHotelResponse>>;
export type PostHotelResponse = AxiosResponse<{
  message: string;
  objectId: number;
  statusCode: string;
}>;
