import { Obj } from "../../App"
import { ADD_PRODUCTS, DELETE_PRODUCT, EDIT_PRODUCT } from "./types"

export const addProducts = (product: Obj) => {
  return {
    type: ADD_PRODUCTS,
    payload: product
  }
}

export const deleteProduct = (product: Obj) =>{
  return {
    type: DELETE_PRODUCT,
    payload: product
  }
}

export const editProduct = (product: Obj) => ({type: EDIT_PRODUCT, payload: product})
