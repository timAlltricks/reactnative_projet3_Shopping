const INITIAL_STATE = {
  products: []
};

const cartReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'ADD_ITEM':
      if(state.products.findIndex(x => x.id === action.payload.id) != -1){
        action.payload.qtty += 1;
        state.products[state.products.findIndex(x => x.id === action.payload.id)] = {
          ...state.products[state.products.findIndex(x => x.id === action.payload.id)],
          ...action.payload
        }
        return {...state}
      } else {
        action.payload.qtty = 1;
        return {...state, products: [...state.products, action.payload]}
      }

      return { products };

    case 'DEL_ITEM':
      if(action.payload.qtty > 1){
        action.payload.qtty -= 1;
        state.products[state.products.findIndex(x => x.id === action.payload.id)] = {
          ...state.products[state.products.findIndex(x => x.id === action.payload.id)],
          ...action.payload
        }
        return {...state}
      } else {
        return {...state, products: state.products.filter(x => x.id !== action.payload.id)};
      }

      return { products };

    default:
      return state
  }
};

export default cartReducer;