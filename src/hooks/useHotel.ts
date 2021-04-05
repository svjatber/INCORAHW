import useSWR, { cache } from 'swr';
import { GetHotelResponse, getHotelResponse, PaginationResponse } from '../api/hotels/types';
import { getHotels, postHotel } from '../api/hotels/endpoint';

export const useHotels = () => {
  const { data, error, mutate } = useSWR('/hotels', () => getHotels().then(r => r.data));

  const addHotel = async (hotel: getHotelResponse) => {
    const res = await postHotel(hotel);
    const cached: PaginationResponse<getHotelResponse> = cache.get('/hotel');

    mutate(
      {
        ...cached,
        items: [...cached.items, { ...hotel, id: res.data.objectId }],
        total: cached.total + 1
      },
      false
    );
    console.log(res);
  };

  return {
    loading: !data && !error,
    data,
    addHotel
  };
};
