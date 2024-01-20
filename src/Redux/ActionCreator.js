import { ADDPRODUCT, ADDUSERITEM, CLEARITEM, DELETEPRODUCT } from "./ActionType"

export const incrementProductItem = (data) => {
    return {type: ADDPRODUCT , payload  : data}
}
export const decrementProductItem = (data) => {
    return {type: DELETEPRODUCT , payload  : data}
}
export const addItemInCart  = (data) => {
    return { type : ADDUSERITEM , payload : data}
}
export const removeProductItem  = (data) => {
    return{type:CLEARITEM , payload : data}
}