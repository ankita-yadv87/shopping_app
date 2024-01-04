import { ActionTypes } from "../constants/action-types"
//defining an inital value for state
const initalState = {
  ttt :[]
};

//this is reducer handleCart=> takes 2 arguments, state and action
// always needs to define initial state
// in the action argument we have 2 things action.type and action.payload
const handleCart = (state = initalState, action) => {

  const product = action.payload;

  switch (action.type) {
  case ActionTypes.ADD_PRODUCT:
    //check  if product already exists or not
    // const exist = state.find((x) => x.id === product.id);
    // if (exist) {
    //   return state.map((x) => x.id === product.id ? {...x, quantity : quantity+1} : x);
    // }
    
      return {...state, ttt:[...state.ttt,product]};
    
  

  case ActionTypes.DEL_PRODUCT:
   // case of delete item  from  cart
    const exist1 = state.find((x) => x.id === product.id);
    // if (exist1.quantity === 1) {
    //   return state.filter((x) => x.id !== exist1.id)
    // }
    // else {
    //    return state.map((x) => x.id === product.id ? state-1 : x);
    // }

    if (exist1){
      return state.filter((x)=> x.id != product.id);
    }


  default:
    return state;
};

  


};

export default handleCart;







// switch (action.type) {
//   case ActionTypes.ADD_PRODUCT:
//     //check  if product already exists or not
//     return state + 1;

//   case ActionTypes.DEL_PRODUCT:
//     return state - 1;


//   default:
//     return state;
// };