import React, { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { loadWeather } from './state/actions/weather/action';
import { WeatherBlock } from './components/weatherBlock';
const defaultValue: any = {
  city: 'Kyiv'
};

export const NotFound = () => {
  const dispatch = useDispatch();

  const weatherResponseData = useSelector((state: any) => {
    return state.weather;
  });
  useEffect(() => {
    dispatch(loadWeather(defaultValue.city));
  }, []);

  return (
    <div>
      <Formik
        initialValues={defaultValue}
        onSubmit={values => {
          dispatch(loadWeather(values.city));
        }}
      >
        <Form>
          <Field type='text' name='city' placeholder='Enter city ...' />
          <button type='submit'>Шукати</button>
        </Form>
      </Formik>
      <h3>
        {weatherResponseData.city.name}({weatherResponseData.city.coord.lon} -{' '}
        {weatherResponseData.city.coord.lat} )
      </h3>
      <WeatherBlock wind={weatherResponseData.wind} main={weatherResponseData.main} />
    </div>
  );
};
