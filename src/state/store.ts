import {Products} from './reducers/productsReducer';
import {combineReducers, createStore,  applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const router = combineReducers({
  products: Products
})


export type AppStore = ReturnType<typeof router>
export const store = createStore(router, applyMiddleware(thunk));
