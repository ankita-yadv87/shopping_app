import {ActionTypes} from "../constants/action-types"

//Creating action for adding item to cart
export const addCart = (product2)=>{

    return{
        type: ActionTypes.ADD_PRODUCT,
        payload: product2,
    };

};

//Creating action for deleting item from cart
export const delCart = (product2)=>{

    return{
        type: ActionTypes.DEL_PRODUCT,
        payload: product2,
    };

};