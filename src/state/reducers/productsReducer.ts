import * as Types from '../actions/types';

const initialState = {
  products: []
}

export const Products = (state = initialState, {type, payload} : any) => {
  switch (type){
    case (Types.ADD_PRODUCTS): {
      return {
        ...state,
        products: [...state.products, payload]
      }
    }
    case (Types.DELETE_PRODUCT):{
      const productsClone = state.products.filter((v: any) => v.id !== payload.id)
      return {
        ...state,
        products: [...productsClone]
      }
    }
    case (Types.EDIT_PRODUCT):{
      const productsClone = state.products.map((v: any) => {
        if(v.id === payload.id){
          return payload
        }
        return v
      })

      return {
        ...state,
        products: [...productsClone]
      }
    }
    default:
      return state

  }
}


